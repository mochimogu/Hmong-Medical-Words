import axios from "axios";
import { useState } from "react";



export default function Delete() {

    const [data , setData] = useState();
    const [nameData , setNameData] = useState();
    const [typeData , setTypeData] = useState();

    const [name, setName] = useState("");
    const [type, setType] = useState("");

    // console.log(name);
    // console.log(type);

    async function getAllData() {

        axios.get("http://localhost:4321/api/getAllData")
        .then((response) => {
            console.log(response.data);

            if(response.data !== null) {
                setData(response.data.data);
            } else {
                console.log("error data");
            }
        })
        .catch((e) => {
            console.log(e);
        })

    }

    async function getDataByType() {

        axios.post("http://localhost:4321/api/getDataByType", {'type' : type})
        .then((response) => {
            console.log(response.data);

            if(response.data !== null) {
                setTypeData(response.data.data);
            } else {
                console.log("error data");
            }
        })
        .catch((e) => {
            console.log(e);
        })

    }

    async function getDataByName() {

        axios.post("http://localhost:4321/api/getDataByName", {'name' : name})
        .then((response) => {
            console.log(response.data);

            if(response.data !== null) {

                setNameData(response.data.data);
            } else {
                console.log("error data");
            }

        })
        .catch((e) => {
            console.log(e);
        })

    }

    async function deleteWordByType(term, wordtypes) {

        console.log(term);

        axios.delete(`/api/deleteword/${wordtypes}/${term}`)
        .then((response) => {
            console.log(response.data);

            if(response.data.results === 'successful') {
                setTypeData(response.data.data);
            }
        })
        .catch((error) => {
            console.log(error);
        })


    }

    return (

        <div>
            <h1>DELETE METHODS</h1>
            <div className="box m-2">
                <h1>DELETE METHODS - by all type</h1>
                <p>Explains how to use it</p>
                <div>
                    <div className="is-flex is-justify-content-end">
                        <button className="button is-primary" type="submit" onClick={getAllData}>Show</button>
                    </div>
                    <div className="m-3 p-2">      
                        {
                            (data === undefined) ? <div></div> :
                            <div>
                                {data.map((items) => (
                                    <div className="box is-flex is-justify-content-space-between">
                                        <div>
                                            <h1>TERM : {items.word}</h1>
                                            <h1>TYPE : {items.wordtype}</h1>
                                            <h1>LEEG : {items.definitions[0].leeg}</h1>
                                            <h1>DLAWB : {items.definitions[0].dlawb}</h1>
                                        </div>
                                        <div>
                                            <button type="button" className="button is-danger m-6">Delete</button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        }                  
                    </div>
                </div>
            </div>
            <div className="box m-2">
                <h1>DELETE METHODS - by grammar type</h1>
                <p>Explains how to use it</p>
                <div>
                    <div className="is-flex is-justify-content-end mt-2">
                        <input
                            className="input is-info mr-2"
                            type="text"
                            placeholder="Enter Grammar Type Here..."
                            onChange={(e) => setType(e.target.value)}
                        />
                        <button className="button is-primary" type="submit" onClick={getDataByType}>Show</button>
                    </div>
                    <div className="m-3 p-2">    
                        {
                            (typeData === undefined) ?
                                <div></div> :                             
                                <div>
                                    {typeData.map((items) => (
                                        <div className="box is-flex is-justify-content-space-between">
                                            <div>
                                                <h1>TERM : {items.word}</h1>
                                                <h1>TYPE : {items.wordtype}</h1>
                                                <h1>LEEG : {items.definitions[0].leeg}</h1>
                                                <h1>DLAWB : {items.definitions[0].dlawb}</h1>
                                            </div>
                                            <div>
                                                <button type="button" className="button is-danger m-6" onClick={ () => deleteWordByType(items.word, items.wordtype) }>Delete</button>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                        }                         
                    </div>
                </div>
            </div>
            <div className="box m-2">
                <h1>DELETE METHODS - by name</h1>
                <p>Explains how to use it</p>
                <div>
                    <div className="is-flex is-justify-content-end mt-2">
                        <input
                            className="input is-info mr-2"
                            type="text"
                            placeholder="Enter Name Here..."
                            onChange={(e) => setName(e.target.value)}
                        />
                        <button className="button is-primary" type="submit" onClick={getDataByName}>Show</button>
                    </div>
                    <div className="m-3 p-2">
                        {
                            (nameData === undefined) ? 
                                <div></div> :                             
                                <div>
                                    {nameData.map((items) => (
                                        <div className="box is-flex is-justify-content-space-between">
                                            <div>
                                                <h1>TERM : {items.word}</h1>
                                                <h1>TYPE : {items.wordtype}</h1>
                                                <h1>LEEG : {items.definitions[0].leeg}</h1>
                                                <h1>DLAWB : {items.definitions[0].dlawb}</h1>
                                            </div>
                                            <div>
                                                <button type="button" className="button is-danger m-6">Delete</button>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                        }                        
                    </div>
                </div>
            </div>
        </div>


    )



}



