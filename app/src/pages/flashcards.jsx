import { useEffect, useState } from "react";
import Nav from "./nav";
import axios from "axios";




export default function Flashcards() {


    const [categories, setCategories] = useState("");

    async function getCategories(word) {

        // axios.post('/api/getDataByType', {type : word})
        // .then((response) => {
        //     console.log(response.data);
        //     setCategories(word);
        //     console.log(categories);
        // })
        // .catch((error) => {
        //     console.log(error);
        // })
        console.log(word);


    }

    useEffect(() => {

        if(window.location.pathname === '/terms/flashcards/adjective' 
            || window.location.pathname === '/terms/flashcards/noun' 
            || window.location.pathname === '/terms/flashcards/verb' ) {
            let path = window.location.pathname.split('/');
            console.log(path);

            setCategories(path[3]);

            axios.post('/api/getDataByType', {type : categories})
            .then((response) => {
                console.log(response.data.data);
            })
            .catch((error) => {
                console.log(error);
            })        }


    }, [])



    return (

        <div>
            <Nav/>
            {
                categories === "" ? 
                <div>
                    <strong><h1 className="is-size-2 has-text-centered mb-3">Categories</h1></strong>
                    <div className=" container is-flex is-justify-content-space-evenly">
                        <div className="card m-2">
                            <div className="card-content">
                                <p className="title">
                                    Adjectives
                                </p>
                                <p className="subtitle"></p>
                            </div>
                            <footer className="card-footer">
                                <p className="card-footer-item">
                                    <span>
                                        View the
                                        <a href="https://nursing.wisc.edu/wp-content/uploads/sites/626/2024/05/Lexicon-English-HMoob-Medical-Terminology-Final-Version.pdf"
                                        > source</a
                                        >
                                    </span>
                                </p>
                                <p className="card-footer-item">
                                    <span> Try <a href="/terms/flashcards/adjective" onClick={() => getCategories("adjective")}>Flashcards</a> </span>
                                </p>
                            </footer>
                        </div>
                        <div className="card m-2">
                            <div className="card-content">
                                <p className="title">
                                    Nouns
                                </p>
                                <p className="subtitle"></p>
                            </div>
                            <footer className="card-footer">
                                <p className="card-footer-item">
                                    <span>
                                        View the
                                        <a href="https://nursing.wisc.edu/wp-content/uploads/sites/626/2024/05/Lexicon-English-HMoob-Medical-Terminology-Final-Version.pdf"
                                        > source</a
                                        >
                                    </span>
                                </p>
                                <p className="card-footer-item">
                                    <span> Try <a href="/terms/flashcards/noun" onClick={() => getCategories("noun")}>Flashcards</a> </span>
                                </p>
                            </footer>
                        </div>
                        <div className="card m-2">
                            <div className="card-content">
                                <p className="title">
                                    Verbs
                                </p>
                                <p className="subtitle"></p>
                            </div>
                            <footer className="card-footer">
                                <p className="card-footer-item">
                                    <span>
                                        View the
                                        <a href="https://nursing.wisc.edu/wp-content/uploads/sites/626/2024/05/Lexicon-English-HMoob-Medical-Terminology-Final-Version.pdf"
                                        > source</a
                                        >
                                    </span>
                                </p>
                                <p className="card-footer-item">
                                    <span> Try <a href="/terms/flashcards/verb" onClick={() => getCategories("verb")}>Flashcards</a> </span>
                                </p>
                            </footer>
                        </div>
                    </div> 
                </div>
                :
                <div></div>
            }
        </div>
    )

}


