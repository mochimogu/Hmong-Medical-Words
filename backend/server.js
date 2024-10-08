const express = require('express');
const server = express();
const PORT = 4321;

const cors = require('cors');

server.use(express.json());
server.use(cors());
server.use(express.urlencoded({extended : true}));

const db = require('../backend/database');

server.get('/', async (request, response) => {
    response.json({"results" : "successful"});
})

server.get("/api/create", async (request, response) => {

    const results = await db.createTable();
    console.log(results);

    if(results == 0) {
        response.status(200).json({'results' : 'successful'})

    } else {
        response.status(200).json({'results' : 'failed'})

    }

})

server.get("/api/insertMockData", async (request, response) => {

    const results = await db.insertData({'results' : 'successful'});

    if(results == 0) {
        response.status(200).json({'results' : 'successful'})

    } else {
        response.status(200).json({'results' : 'failed'})

    }
})

server.get("/api/getAllData", async (request, response) => {
    
    const results = await db.getData();
    //REMEMBER TO JSON.PARSE DEFINITION
    // console.log(JSON.parse(results[0].definitions[0]));

    if(results != null) {
        response.status(200).json({'results' : 'successful', 'data' : results})

    } else {
        response.status(200).json({'results' : 'failed'})

    }
})

server.post('/api/insertData', async (request, response) => {

    // const results = request.body
    // console.log(results);

    const data = {
        'word' : request.body.word,
        'wordtype' : request.body.wordtype,
        'definitions' : [{'dlawb' : request.body.white, 'leeg' : request.body.green}]
    }

    const results = await db.insertData(data);

    if(results != null) {
        response.status(200).json({'results' : 'successful', 'data' : results})

    } else {
        response.status(200).json({'results' : 'failed'})
    }

})

server.post('/api/getDataByName', async (request, response) => {

    const data = request.body.name;
    // console.log(data);

    const results = await db.getDataByName(data);
    console.log(results);
    // console.log(JSON.parse(results[0].definitions[0]));
    // const def = JSON.parse(results[0].definitions[0]);
    const def = "hi";

    if(results != null) {
        response.status(200).json({'results' : 'successful', 'data' : results, 'def' : def})

    } else {
        response.status(200).json({'results' : 'failed'})

    }

})

server.post('/api/getDataByType', async (request, response) => {

    const data = request.body.type;
    console.log(data);

    const results = await db.getDataByType(data);
    console.log(results);
    // const def = JSON.parse(results[0].definitions[0]);
    const def = "hi";


    if(results != null) {
        response.status(200).json({'results' : 'successful', 'data' : results, 'def' : def})

    } else {
        response.status(200).json({'results' : 'failed'})

    }

})

server.post('/api/updateword', async (request, response) => {

    // console.log("request" , request.body);

    const data = {
        'id' : request.body.id,
        'word' : request.body.word,
        'wordtype' : request.body.wordtype,
        'definitions' : [{'dlawb' : request.body.white, 'leeg' : request.body.green}]
    }

    const results = await db.updateWord(data);

    if(results != null) {
        response.status(200).json({'results' : 'successful', 'data' : results})
    } else {
        response.status(200).json({'results' : 'failed'})

    }

})


server.delete('/api/deleteword/:type/:word', async (request, response) => {

    console.log(request.params.word)
    const data = {"word" : request.params.word, 'type' : request.params.type};
    
    const results = await db.deleteWord(data);

    if(results != 1) {
        response.status(200).json({'results' : 'successful', 'data' : results})
    } else {
        response.status(200).json({'results' : 'failed'})

    }

})


server.listen(PORT, ()=>{
    console.log(`Listening to Port ${PORT}`);
})
