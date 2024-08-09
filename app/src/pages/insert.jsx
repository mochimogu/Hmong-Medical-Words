


export default function Insert() {


    return (

        <div className="box mt-2">
            <h1 className="is-size-3">Adding a new word to database</h1>
            <form action="#" method="POST">
                <div className="field p-2">
                    <label className="label">American Term</label>
                    <div className="control ml-2">
                        <input className="input" type="text" placeholder="insert here..." />
                    </div>
                    <p className="help ml-2">Insert the American medical term here</p>
                </div>
                <label className="label ml-2">Grammar Type</label>
                <div className="select p-2 mb-3 ml-2">
                    <select>
                        <option>Noun</option>
                        <option>Adjective</option>
                        <option>Verb</option>
                    </select>
                </div>
                <div className="field p-2">
                    <label className="label">Hmong White Definition</label>
                    <div className="control ml-2">
                        <input className="input" type="text" placeholder="insert here..." />
                    </div>
                    <p className="help ml-2">Insert the Hmong white translation here</p>
                </div>
                <div className="field p-2">
                    <label className="label">Hmong Green/Leeg Definition Term</label>
                    <div className="control ml-2">
                        <input className="input" type="text" placeholder="insert here..." />
                    </div>
                    <p className="help ml-2">Insert the Hmong green/leeg translation here</p>
                </div>
                <div className="control is-flex is-justify-content-end p-2">
                    <button className="button is-primary">Submit</button>
                </div>
            </form>
        </div>
    )


}




