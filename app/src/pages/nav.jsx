


export default function Nav() {



    return (

        <nav className="navbar m-3" role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
                <a className="navbar-item" href="/">
                    Logo Here
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
                    <a className="navbar-item" href="#">
                        Home
                    </a>

                    <a className="navbar-item" href="#">
                        Documentation
                    </a>
                </div>
            </div>
            <div className="nav-end">
                <div className="is-flex is-flex-direction-row">
                    <input className="input" type="text" placeholder="search word..." />
                    <input className="button" type="submit" value="Search" />
                </div>
            </div>
        </nav>
    )


}





