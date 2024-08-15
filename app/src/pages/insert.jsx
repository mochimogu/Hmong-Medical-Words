import axios from "axios"
import { useState } from "react"



export default function Insert() {

    const [word, setWord] = useState("");
    const [wordtype, setWordType] = useState("");
    const [Dlawb, setDlawb] = useState("");
    const [Leeg, setLeeg] = useState("");

    console.log(word, wordtype, Dlawb, Leeg);

    function insert() {

        axios.post('/api/insertData', {'word' : word, 'wordtype' : wordtype, 'white' : Dlawb, 'green' : Leeg})
        .then((results) => {
            console.log(results.data)
        })
        .catch((err) => {
            console.log(err);
        })


    }

    return (

        <div className="box mt-2">
            <h1 className="is-size-3">Adding a new word to database</h1>
            <form>
                <div className="field p-2">
                    <label className="label">American Term</label>
                    <div className="control ml-2">
                        <input className="input" 
                            type="text" 
                            placeholder="insert here..." 
                            onChange={(e) => {setWord(e.target.value)}} 
                        />
                    </div>
                    <p className="help ml-2">Insert the American medical term here</p>
                </div>
                <label className="label ml-2">Grammar Type</label>
                <div className="select p-2 mb-3 ml-2">
                    <select onChange={(e) => {setWordType(e.target.value)}}>
                        <option value={"noun"}>Noun</option>
                        <option value={"adjective"}>Adjective</option>
                        <option value={"verb"}>Verb</option>
                    </select>
                </div>
                <div className="field p-2">
                    <label className="label">Hmong White Definition</label>
                    <div className="control ml-2">
                        <input className="input" 
                            type="text" 
                            placeholder="insert here..." 
                            onChange={(e) => {setDlawb(e.target.value)}} 
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
                            onChange={(e) => {setLeeg(e.target.value)}} 
                        />
                    </div>
                    <p className="help ml-2">Insert the Hmong green/leeg translation here</p>
                </div>
                <div className="control is-flex is-justify-content-end p-2">
                    <button className="button is-primary" type="submit" onClick={insert}>Submit</button>
                </div>
            </form>
        </div>
    )


}




