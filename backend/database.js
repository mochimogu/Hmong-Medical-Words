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
        // console.log(results.rows);

        await client.release();

        return results.rows;
        
    } catch (error) {
        console.log(error);
        return 1;
    }


}

async function insertData(data) {

    try {
        const client = await db.connect();

        // const data = [JSON.stringify({'dlawb' : 'toom ntawm plab', 'leeg' : 'toom ntawm plaab'})];
        const query = "INSERT INTO hmongmedicalwords (word, wordtype, definitions) VALUES($1, $2, $3)";
        // const values = ['abdonmen', 'noun', data];
        const values = [];


        const results = await client.query(query, values);
        console.log(results);

        await client.release();

        return 0;

    } catch (error) {
        console.log(error);
        return 1;   
    }

}

module.exports = { createTable, getData, insertData };
