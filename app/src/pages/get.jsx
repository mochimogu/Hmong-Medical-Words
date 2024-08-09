import { useState } from "react"
import axios from 'axios';



export default function Get() {


    const [data , showData] = useState();

    function getAllData() {

        axios.get({
            method: 'get',
            url : '/api/getAllData',
        })
        .then((response) => {
            console.log(response);
        })
        .catch((e) => {
            console.log(e);
        })


    }

    return (

        <div>
            <h1>GET METHODS</h1>
            <div>
                <h1>GET METHODS - by all type</h1>
                <p>Explains how to use it</p>
                <div>
                    <div>                        
                    </div>
                    <div>
                        <button class="button is-primary" type="submit" onClick={getAllData}>Primary</button>
                    </div>
                </div>
            </div>
            <div>
                <h1>GET METHODS - by grammar type</h1>
            </div>
            <div>
                <h1>GET METHODS - by name</h1>
            </div>
        </div>


    )


}

