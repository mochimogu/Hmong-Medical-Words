import { useEffect, useState, useParams } from "react";
import axios from "axios";


export default function UpdateWord() {

    const [data, setData] = useState();
    const { word } = useParams(); 
    console.log(word);

    return (
        <div>
            {
                data.map((items) => (
                    <div>
                        <h1>{items.word}</h1>
                    
                    
                    </div>
                ))
            }
        </div>
    )
}



