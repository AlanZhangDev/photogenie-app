const AddForm = () => {
    return (
        <div>
            <form className="add-form">
                <header>
                    <h1 className="add-film-header">Add Film</h1>
                </header>

                <label htmlFor="film-title" className="input-label">Film Title</label>
                <input type="text" id="film-title" name="film-title" />

                <label htmlFor="film-year" className="input-label">Year</label>
                <input type="number" id="film-year" name="film-year" />

                <label htmlFor="film-cost" className="input-label">Cost</label>
                <input type="number" id="film-cost" name="film-cost" step=".01" />

                <label htmlFor="film-image" className="input-label">Image</label>
                <input type="text" id="film-image" name="film-image" />

                <p className="input-label">Description</p>
                <textarea rows="4" id="film-description" name="film-description"></textarea>
            </form>
        </div>
    );
}

export default AddForm;