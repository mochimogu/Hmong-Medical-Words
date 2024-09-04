import { useEffect, useState } from "react";
import Nav from "./nav";
import axios from "axios";




export default function AllTerms() {


    const [data, setData] = useState([]);

    useEffect(() => {

        async function getAll() {
            axios.get('/api/getAllData')
            .then((response) => {
                console.log(response.data.data);
                setData(response.data.data);
            })
            .catch((error) => {
                console.log(error);
            })
        }
        getAll();

    }, [])


    const [visible, setVisible] = useState(null);

    const makeVisible = (index) => {
        setVisible(visible === index ? null : index)
    }

    return (
        <div>
            <Nav/>
            <h1 className="is-size-3 m-4">All Terms</h1>
            {
                data.length !== 0 ? 
                <div>
                    {
                        data.map((items) => (
                            <div key={items.id} className="p-3 m-3 box">
                                <h1
                                    onClick={ () => makeVisible(items.id) }
                                    style={{cursor : 'pointer'}}
                                >{items.word}</h1>
                                {
                                    visible === items.id ? 
                                    <div className="is-flex is-flex-direction-column p-2 ">
                                        <span>Leeg : {items.definitions[0].leeg}</span>
                                        <span>Dawb : {items.definitions[0].dlawb}</span>
                                    </div>
                                    :
                                    <span></span>
                                }
                            </div>
                        ))
                    }
                </div>
                :
                <div></div>
            }

        </div>
    )



}




