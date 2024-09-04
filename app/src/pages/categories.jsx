import { useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";
import axios from "axios";


export default function Categories() {

    const [flipped, setFlipped] = useState(false);

    const flashcardStyle = {
        perspective: '500px',
        cursor: 'pointer',
        margin: 'auto',
        marginTop : '1%',
        width : '50%'
    }

    const innerStyle = {
        position: 'relative',
        width: '300px',
        height: '350px',
        textAlign: 'center',
        transition: 'transform 0.6s',
        transformStyle: 'preserve-3d',
        transform: flipped ? 'rotateY(180deg)' : 'none',
        margin: 'auto'
    };

    const frontBackStyle = {
        position: 'absolute',
        width: '100%',
        height: '100%',
        backfaceVisibility: 'hidden',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: '10px',
    };

    const frontStyle = {
        ...frontBackStyle,
        backgroundColor: '#00d1b2',
        color: 'white',
    };

    const backStyle = {
        ...frontBackStyle,
        backgroundColor: '#f5f5f5',
        transform: 'rotateY(180deg)',
    };

    const { categories } = useOutletContext();
    const [ data, setData ] = useState([]);

    console.log(categories);
    
    useEffect(() => {
        async function getCategories() {
            axios.post('/api/getDataByType', {type : categories})
            .then((response) => {
                console.log(response.data.data);
                setData(response.data.data);
            })
            .catch((error) => {
                console.log(error);
            })    
        }
        getCategories();

    },[categories])

    const [currentIndex, setCurrentIndex] = useState(0);

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length);
        console.log("Next", currentIndex);
    };
  
    const handlePrevious = () => {
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? data.length - 1 : prevIndex - 1
      );
      console.log("Prev", currentIndex);
    };

    return ( 
        <div>
            {
                data.length !== 0 ?             
                <div>
                    <h1 className="is-size-2 has-text-centered">{categories}</h1>
                    <div style={flashcardStyle} onClick={() => setFlipped(!flipped)}>
                        <div style={innerStyle}>
                            <div style={frontStyle}>
                                <p>{data[currentIndex].word}</p>
                            </div>
                            <div style={backStyle}>
                                <div className="is-flex is-flex-direction-column p-3">
                                    <p className="mb-2">Leeg: {data[currentIndex].definitions[0].leeg}</p>
                                    <p>Dawb: {data[currentIndex].definitions[0].dlawb}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="is-flex is-justify-content-center mt-4 ">
                        <button 
                            className="button is-primary mr-5" 
                            type="button"
                            onClick={handlePrevious}
                        >Prev</button>
                        <button 
                            className="button is-primary" 
                            type="button"
                            onClick={handleNext}
                        >Next</button>
                    </div> 
                </div>
                :
                <div></div>
            }
        </div>
    )



}






