import { useState } from "react"



export default function Nav() {

    const [search, setSearch] = useState("");

    const searching = (word) => {
        setSearch(word);
        console.log(search);
    }

    const searchRedirect = () => {
        console.log(window.location.pathname);

        if(search !== "") {
            window.location.pathname = `/search/${search}`;
        }
    }

    return (

        <nav className="navbar m-3" role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
                <a className="navbar-item" href="/">
                    <svg width="50" height="50" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M3 4.86592C3 4.44124 3.26824 4.06287 3.66898 3.9223L11.669 1.11595C11.8833 1.04078 12.1167 1.04078 12.331 1.11595L20.331 3.92229C20.7318 4.06287 21 4.44124 21 4.86592V10.6602C21 16.2207 17.4878 21.1747 12.2408 23.0154C12.0849 23.07 11.9151 23.07 11.7592 23.0154C6.51216 21.1747 3 16.2207 3 10.6602V4.86592Z" stroke="white" strokeWidth="1.5" />
                        <path d="M13.3333 8.99983C13.3333 8.44754 12.8856 7.99983 12.3333 7.99983H11.6667C11.1144 7.99983 10.6667 8.44754 10.6667 8.99983V10.5665C10.6667 10.6217 10.6219 10.6665 10.5667 10.6665H9C8.44772 10.6665 8 11.1142 8 11.6665V12.3332C8 12.8854 8.44772 13.3332 9 13.3332H10.5667C10.6219 13.3332 10.6667 13.3779 10.6667 13.4332V14.9998C10.6667 15.5521 11.1144 15.9998 11.6667 15.9998H12.3333C12.8856 15.9998 13.3333 15.5521 13.3333 14.9998V13.4332C13.3333 13.3779 13.3781 13.3332 13.4333 13.3332H15C15.5523 13.3332 16 12.8854 16 12.3332V11.6665C16 11.1142 15.5523 10.6665 15 10.6665L13.4333 10.6665C13.3781 10.6665 13.3333 10.6217 13.3333 10.5665V8.99983Z" 
                            stroke="white" 
                            strokeWidth="1" 
                        />
                    </svg>
                </a>

                <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </a>
            </div>

            <div id="navbarBasicExample" className="navbar-menu">
                <div className="navbar-start">
                    <a className="navbar-item" href="/">
                        Home
                    </a>
                    <a className="navbar-item" href="/terms/flashcards">
                        Flash Card
                    </a>
                    <a className="navbar-item" href="/terms/all">
                        All Terms
                    </a>
                </div>
            </div>
            <div className="nav-end">
                <div className="is-flex is-flex-direction-row">
                    <input className="input" type="text" placeholder="search word..." onChange={(e) => searching(e.target.value)}/>
                    <input className="button" type="button" value="Search" onClick={searchRedirect}/>
                </div>
            </div>
        </nav>
    )


}





