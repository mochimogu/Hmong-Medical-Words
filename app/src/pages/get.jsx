import { useState } from "react"
import axios from 'axios';



export default function Get() {


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

    return (

        <div>
            <h1>GET METHODS</h1>
            <div className="box m-2">
                <h1>GET METHODS - by all type</h1>
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
                                    <div className="box">
                                        <h1> TERM : {items.word}</h1>
                                        <h1>TYPE : {items.wordtype}</h1>
                                        <h1>LEEG : {items.definitions[0].leeg}</h1>
                                        <h1>DLAWB : {items.definitions[0].dlawb}</h1>
                                    </div>
                                ))}
                            </div>
                        }                  
                    </div>
                </div>
            </div>
            <div className="box m-2">
                <h1>GET METHODS - by grammar type</h1>
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
                                <div></div> : <div>{typeData.map((items) => (
                                    <div className="box">
                                        <h1> TERM : {items.word}</h1>
                                        <h1>TYPE : {items.wordtype}</h1>
                                        <h1>LEEG : {items.definitions[0].leeg}</h1>
                                        <h1>DLAWB : {items.definitions[0].dlawb}</h1>
                                    </div>
                                ))}</div>
                        }                         
                    </div>
                </div>
            </div>
            <div className="box m-2">
                <h1>GET METHODS - by name</h1>
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
                                <div></div> : <div>{nameData.map((items) => (
                                    <div className="box">
                                        <h1> TERM : {items.word}</h1>
                                        <h1>TYPE : {items.wordtype}</h1>
                                        <h1>LEEG : {items.definitions[0].leeg}</h1>
                                        <h1>DLAWB : {items.definitions[0].dlawb}</h1>
                                    </div>
                                ))}</div>
                        }                        
                    </div>
                </div>
            </div>
        </div>


    )


}

