import { useParams } from "react-router-dom"
import Nav from "./nav";
import { useEffect, useState } from "react";
import axios from "axios";





export default function Search() {

    const { word } = useParams();
    console.log(word);

    const [data, setData] = useState([]);

    useEffect(() => {

        async function getSearchWord() {

            axios.post('/api/getDataByName', {name : word})
            .then((response) => {
                console.log(response.data.data);
                setData(response.data.data);
            })
            .catch((error) => {
                console.log(error);
            })

        }

        getSearchWord();

    },[word])


    return (
        <div>
            <Nav/>
            {
                data.length === 0 ? 
                <div className="container">
                    <h1 className="is-size-4">Word Cannot Be Found</h1>
                </div>
                :
                <div>
                    {
                        data.map((items) => (
                            <div key={items.id} className="box m-5" id="searchTermBox">
                                <h1 className="m-3">Terms : {items.word}</h1>
                                <h1 className="m-3">Type : {items.wordtype}</h1>
                                <h1 className="m-3">Leeg : {items.definitions[0].leeg}</h1>
                                <h1 className="m-3">Dlawb : {items.definitions[0].dlawb}</h1>
                            </div>
                        ))
                    }
                </div>
            }
        </div>

    )


}
