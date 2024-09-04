import { useEffect, useState } from "react";
import Nav from "./nav";
import axios from "axios";
import { Outlet } from "react-router-dom";


export default function Flashcards() {


    const [categories, setCategories] = useState("");


    useEffect(() => {

        if(window.location.pathname === '/terms/flashcards/adjective' 
            || window.location.pathname === '/terms/flashcards/noun' 
            || window.location.pathname === '/terms/flashcards/verb' ) {
            let path = window.location.pathname.split('/');
            console.log(path);

            setCategories(path[3]);    
        }


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
                                    <span> Try <a href="/terms/flashcards/adjective" onClick={() => setCategories("adjective")}>Flashcards</a> </span>
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
                                    <span> Try <a href="/terms/flashcards/noun" onClick={() => setCategories("noun")}>Flashcards</a> </span>
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
                                    <span> Try <a href="/terms/flashcards/verb" onClick={() => setCategories("verb")}>Flashcards</a> </span>
                                </p>
                            </footer>
                        </div>
                    </div> 
                </div>
                :
                <div>
                    <p className="has-text-right mr-3"><a href="/terms/flashcards/">Back to Categories</a></p>
                    <Outlet context={{categories}}/>
                </div>
            }
        </div>
    )

}


