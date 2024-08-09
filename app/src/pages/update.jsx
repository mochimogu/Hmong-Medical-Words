import { useParams } from "react-router-dom"





export default function Update() {


    const { word } = useParams();

    return (

        <div>
            <h1>UPDATE METHOD</h1>
            <div>
                <h1>Update through name</h1>
                {word && <h1>{word}</h1>}
            </div>
        </div>

    )



}



