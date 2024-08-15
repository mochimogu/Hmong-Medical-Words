import { useEffect, useState } from "react";
import { Outlet, useParams } from "react-router-dom"
import axios from "axios";



export default function Update() {

    const [data, setData] = useState();
    const [nameData, setNameData] = useState();
    const [term, setTerm] = useState();
    const [wordtype, setWordType] = useState();
    const [leeg, setLeeg] = useState();
    const [dlawb, setDlawb] = useState();
    const [index, setIndex] = useState();

    const { word } = useParams(); 

    const updateLeeg = (e) => { setLeeg(e.target.value) };
    const updateDlawb = (e) => { setDlawb(e.target.value) };

    console.log(wordtype);

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
                    // console.log(response.data);
        
                    if(response.data !== null) {
                        // console.log(response.data.data[0].definitions[0].dlawb);
                        setNameData(response.data.data);
                        setTerm(response.data.data[0].word)
                        setWordType(response.data.data[0].wordtype)
                        setDlawb(response.data.data[0].definitions[0].dlawb);
                        setLeeg(response.data.data[0].definitions[0].leeg);
                        setIndex(response.data.data[0].id)

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


    function updateWord() {

        axios.post('/api/updateWord', {
            'id' : index,
            'word' : term, 
            'wordtype' : wordtype, 
            'white' : dlawb, 
            'green' : leeg
        })
        .then((results) => {
            console.log(results.data)
        })
        .catch((err) => {
            console.log(err.response.status);
        })

    }

    return (

        <div>
            <h1 className="is-size-4">UPDATE METHOD</h1>
            <div>
                <div className="is-flex is-justify-content-space-between">
                    <h1>Update By Clicking One of The Words</h1>
                    {
                        (word === undefined) ? <div></div> : <a href="/admin/update"><button type="button">Back To List</button></a>
                    }
                </div>
                <div>
                    {
                        (word === undefined) ? 
                            (data === undefined) ? 
                                <div></div> :
                                <div>
                                    {
                                        data.map((items, index) => (
                                            <div id={items.id} key={index} className="box is-flex mt-3 ml-6 mr-6 is-justify-content-space-between">
                                                <div className="">
                                                    <a href={`/admin/update/${items.word}`}><h1 className="is-size-5 is-uppercase">{items.word}</h1></a>
                                                    <h1 className="is-size-6 is-italic">{items.wordtype}</h1>
                                                    <h1 className="is-size-6">Leeg : <em>{items.definitions[0].leeg}</em></h1>
                                                    <h1 className="is-size-6">Dlawb/Dawb : <em>{items.definitions[0].dlawb}</em></h1>
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
                                                <form action="/admin/update">
                                                    <div className="field p-2">
                                                        <label className="label">American Term</label>
                                                        <div className="control ml-2">
                                                            <input className="input" 
                                                                type="text" 
                                                                placeholder="insert here..." 
                                                                value={term}
                                                                onChange={(e) => {setTerm(e.target.value)}}
                                                            />
                                                        </div>
                                                        <p className="help ml-2">Insert the American medical term here</p>
                                                    </div>
                                                    <label className="label ml-2">Grammar Type</label>
                                                    <div className="select p-2 mb-3 ml-2">
                                                        <select onChange={(e) => {setWordType(e.target.value)}}>
                                                            <option defaultValue={items.wordtype === "noun" ? "selected" : ""}>noun</option>
                                                            <option defaultValue={items.wordtype === "adjective" ? "selected" : ""}>adjective</option>
                                                            <option defaultValue={items.wordtype === "verb" ? "selected" : ""}>verb</option>
                                                        </select>
                                                    </div>
                                                    <div className="field p-2">
                                                        <label className="label">Hmong White Definition</label>
                                                        <div className="control ml-2">
                                                            <input className="input" 
                                                                type="text" 
                                                                placeholder="insert here..." 
                                                                defaultValue={dlawb}
                                                                onChange={updateDlawb}
                                                                required
                                                            />
                                                        </div>
                                                        <p className="help ml-2">Insert the Hmong white translation here</p>
                                                    </div>
                                                    <div className="field p-2">
                                                        <label className="label">Hmong Green/Leeg Definition Term</label>
                                                        <div className="control ml-2">
                                                            <input className="input" 
                                                                type="text" 
                                                                placeholder="insert here..." 
                                                                defaultValue={leeg}
                                                                onChange={updateLeeg}
                                                                required
                                                            />
                                                        </div>
                                                        <p className="help ml-2">Insert the Hmong green/leeg translation here</p>
                                                    </div>
                                                    <div className="control is-flex is-justify-content-end p-2">
                                                        <button className="button is-primary" onClick={updateWord}>Update</button>
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



