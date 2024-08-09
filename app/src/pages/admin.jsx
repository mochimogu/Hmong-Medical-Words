import { Outlet } from "react-router-dom";




export default function Admin() {


    return (

        <div className="container is-fluid">
            <nav className="navbar" role="navigation" aria-label="main-navigation">
                <div className="navbar-brand">
                    <a className="navbar-item is-size-2" href="/admin">Admin</a>
                </div>
                <div className="navbar-end">
                    <a className="navbar-item" href="/">Back to Home</a>
                </div>
            </nav>
            <div className="mb-4">
                <nav className="level">
                    <p className="level-item has-text-centered">
                        <a className="link is-info" href="/admin/get">Get</a>
                    </p>
                    <p className="level-item has-text-centered">
                        <a className="link is-info" href="/admin/insert">Insert</a>
                    </p>
                    <p className="level-item has-text-centered">
                        <a className="link is-info" href="/admin/delete">Delete</a>
                    </p>
                    <p className="level-item has-text-centered">
                        <a className="link is-info" href="/admin/update">Update</a>
                    </p>
                </nav>
            </div>
            {/* will add a if statement to show content for the homepage of '/admin' else show the outlet*/}
            <Outlet/>
        </div>

    )


}


