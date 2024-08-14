import { useEffect, useState } from "react";
import { Outlet, useParams } from "react-router-dom"
import axios from "axios";



export default function Update() {

    const [data, setData] = useState();
    const [nameData, setNameData] = useState();
    const [leeg, setLeeg] = useState();
    const [dlawb, setDlawb] = useState();

    const { word } = useParams(); 

    useEffect(() => {
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
        getAllData();

        if(word !== undefined) {
            async function getDataByName() {
        
                axios.post("http://localhost:4321/api/getDataByName", {'name' : word})
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
            getDataByName();
        }
    },[word]);


    return (

        <div>
            <h1>UPDATE METHOD</h1>
            <div>
                <div className="is-flex is-justify-content-space-between">
                    <h1>Update Through Word</h1>
                    <a href="/admin/update"><button type="button">Back To List</button></a>
                </div>
                <div>
                    {
                        (word === undefined) ? 
                            (data === undefined) ? 
                                <div></div> :
                                <div>
                                    {
                                        data.map((items, index) => (
                                            <div key={index} className="box is-flex mt-3 ml-6 mr-6 is-justify-content-space-between">
                                                <div className="">
                                                    <a href={`/admin/update/${items.word}`}><h1 className="is-size-4 is-uppercase">{items.word}</h1></a>
                                                    <h1 className="is-size-6 is-italic">{items.wordtype}</h1>
                                                    <h1 className="is-size-5">Leeg : {items.definitions[0].leeg}</h1>
                                                    <h1 className="is-size-5">Dlawb/Dawb : {items.definitions[0].dlawb}</h1>
                                                </div>
                                            </div>
                                        ))
                                    }
                                </div>
                            :
                            <div>
                                {
                                    (nameData !== undefined) ? 
                                        nameData.map((items, index) => (
                                            <div className="box mt-2" key={index}>
                                                <h1 className="is-size-3">Adding a new word to database</h1>
                                                <form action="#" method="POST">
                                                    <div className="field p-2">
                                                        <label className="label">American Term</label>
                                                        <div className="control ml-2">
                                                            <input className="input" type="text" placeholder="insert here..." value={items.word}/>
                                                        </div>
                                                        <p className="help ml-2">Insert the American medical term here</p>
                                                    </div>
                                                    <label className="label ml-2">Grammar Type</label>
                                                    <div className="select p-2 mb-3 ml-2">
                                                        <select>
                                                            <option defaultValue={items.wordtype === "noun" ? "selected" : ""}>Noun</option>
                                                            <option defaultValue={items.wordtype === "adjective" ? "selected" : ""}>Adjective</option>
                                                            <option defaultValue={items.wordtype === "verb" ? "selected" : ""}>Verb</option>
                                                        </select>
                                                    </div>
                                                    <div className="field p-2">
                                                        <label className="label">Hmong White Definition</label>
                                                        <div className="control ml-2">
                                                            <input className="input" type="text" placeholder="insert here..." value={items.definitions[0].dlawb}/>
                                                        </div>
                                                        <p className="help ml-2">Insert the Hmong white translation here</p>
                                                    </div>
                                                    <div className="field p-2">
                                                        <label className="label">Hmong Green/Leeg Definition Term</label>
                                                        <div className="control ml-2">
                                                            <input className="input" type="text" placeholder="insert here..." value={items.definitions[0].leeg}/>
                                                        </div>
                                                        <p className="help ml-2">Insert the Hmong green/leeg translation here</p>
                                                    </div>
                                                    <div className="control is-flex is-justify-content-end p-2">
                                                        <button className="button is-primary">Submit</button>
                                                    </div>
                                                </form>
                                            </div>
                                        ))
                                        :
                                        <div></div>
                                }
                            </div>
                    }               
                </div>
            </div>
        </div>

    )

}



