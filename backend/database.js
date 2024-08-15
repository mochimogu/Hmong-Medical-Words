const pool = require('pg').Pool;
require('dotenv').config();



const db = new pool({
    connectionString : `${process.env.DATABASE}`,
    ssl : {
        rejectUnauthorized : false
    }
})


async function createTable() {
    
    try {
        const client = await db.connect();
        const query = "CREATE TABLE hmongmedicalwords (id SERIAL PRIMARY KEY, word VARCHAR(50), wordtype VARCHAR(20), definitions TEXT[]);"

        const results = await client.query(query);
        // console.log(results);
        await client.release();

        return 0;

    } catch (error) {
        console.log(error);
        return 1;
    }

}

async function getData() {

    try {

        const client = await db.connect();

        const query = "SELECT * FROM hmongmedicalwords";
        const results = await client.query(query);

        for(let i = 0; i < results.rows.length; i++) {
            results.rows[i].definitions[0] = JSON.parse(results.rows[i].definitions[0]);
        }
        // const def = JSON.parse(results.rows[0].definitions[0]);
        // results.rows.definitions[0] = def;
        
        await client.release();

        return results.rows;
        
    } catch (error) {
        console.log(error);
        return 1;
    }


}

async function insertData(data) {

    try {

        console.log(data);

        const client = await db.connect();

        // const data = [JSON.stringify({'dlawb' : 'toom ntawm plab', 'leeg' : 'toom ntawm plaab'})];
        const query = "INSERT INTO hmongmedicalwords (word, wordtype, definitions) VALUES($1, $2, $3)";
        // const values = ['abdonmen', 'noun', data];
        const values = [data.word, data.wordtype, data.definitions];


        const results = await client.query(query, values);
        console.log(results.rows);

        await client.release();

        return 0;

    } catch (error) {
        console.log(error);
        return 1;   
    }
}

async function getDataByName(name) {
    
    try {

        const client = await db.connect();
        const query = "SELECT * FROM hmongmedicalwords WHERE word = $1";
        const values = [name];

        const results = await client.query(query, values);

        for(let i = 0; i < results.rows.length; i++) {
            results.rows[i].definitions[0] = JSON.parse(results.rows[i].definitions[0]);
        }

        await client.release();

        return results.rows
        
    } catch (error) {
        console.log(error);
    }

}

async function getDataByType(type) {
    
    try {

        const client = await db.connect();
        const query = "SELECT * FROM hmongmedicalwords WHERE wordtype = $1";
        const values = [type];

        const results = await client.query(query, values);
        // console.log(results.rows);
        
        for(let i = 0; i < results.rows.length; i++) {
            results.rows[i].definitions[0] = JSON.parse(results.rows[i].definitions[0]);
        }

        await client.release();

        return results.rows
        
    } catch (error) {
        console.log(error);
    }

}

async function updateWord(data) {


    try {

        console.log(data);

        const client = await db.connect();

        let query = "SELECT * FROM hmongmedicalwords WHERE id = $1";
        let values = [data.id];

        let results = await client.query(query, values);


        results.rows[0].definitions[0] = JSON.parse(results.rows[0].definitions[0]);

        // console.log("database:", results.rows);

        if(data !== results.rows[0]) {
            query = "UPDATE hmongmedicalwords SET word = $1, wordtype = $2, definitions = $3 WHERE id = $4";
            values = [data.word, data.wordtype, data.definitions, data.id];

            results = await client.query(query, values);

            await client.release();
            
            return results.rows;
        }

        await client.release();
        
        return 0;

        
    } catch (error) {
        console.log(error);
        return 1;
    }


}


module.exports = { createTable, getData, insertData, getDataByName, getDataByType, updateWord };
