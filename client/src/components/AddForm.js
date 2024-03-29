import { useState } from "react";
import { useDispatch } from "react-redux";
import { getFilmsFilteredAsync, getFilmsSortedAsync, postFilmAsync } from "../features/filmsThunk";

const AddForm = () => {
    const dispatch = useDispatch();

    const [title, setTitle] = useState("");
    const [year, setYear] = useState("");
    const [cost, setCost] = useState("");
    const [image, setImage] = useState("");
    const [description, setDescription] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        const film = {
            name: title,
            year: Number(year),
            cost: Number(cost),
            image: image,
            description: description,
        }

        dispatch(postFilmAsync(film));
    }

    const handleSort = (sortType) => {
        dispatch(getFilmsSortedAsync(sortType))
    }

    const handleFilter = () => {
        let filterYear = new Date().getFullYear()
        dispatch(getFilmsFilteredAsync(filterYear))
    }

    return (
        <div>
            <form className="add-form" onSubmit={handleSubmit}>
                <header>
                    <h1 className="add-film-header">Add Film</h1>
                </header>

                <label htmlFor="film-title" className="input-label">Film Title</label>
                <input type="text" id="film-title" name="film-title" value={title} onChange={(e) => setTitle(e.target.value)}/>

                <label htmlFor="film-year" className="input-label">Year</label>
                <input type="number" id="film-year" name="film-year" value={year} onChange={(e) => setYear(e.target.value)}/>

                <label htmlFor="film-cost" className="input-label">Cost</label>
                <input type="number" id="film-cost" name="film-cost" step=".01" value={cost} onChange={(e) => setCost(e.target.value)}/>

                <label htmlFor="film-image" className="input-label">Image</label>
                <input type="text" id="film-image" name="film-image" value={image} onChange={(e) => setImage(e.target.value)}/>

                <p className="input-label">Description</p>
                <textarea rows="4" id="film-description" name="film-description" value={description} onChange={(e) => setDescription(e.target.value)}></textarea>
                <div className="add-film-form-buttons">
                    <button type="submit" className="add-film-button">Add Film</button>
                    <button onClick={() => {
                        setTitle("");
                        setYear("");
                        setCost("");
                        setImage("");
                        setDescription("");
                    }} type="button" className="clear-inputs-button">Clear</button>
                </div>
                <br></br>
                <h1 className="add-film-header">Sort Films</h1>
                <div className="add-film-form-buttons">
                    <button type="button" onClick={() => handleSort("title-ascending")} className="sort-by-button">Sort by Title (A-Z)</button>
                    <button type="button" onClick={() => handleSort("title-descending")} className="sort-by-button">Sort by Title (Z-A)</button>
                    <button type="button" onClick={() => handleSort("price-ascending")} className="sort-by-button">Sort by Price ($-$$$)</button>
                    <button type="button" onClick={() => handleSort("price-descending")} className="sort-by-button">Sort by Title ($$$-$)</button>
                    <button type="button" onClick={() => handleFilter()} className="sort-by-button">Find Films This Year</button>
                </div>
            </form>
        </div>
    );
}

export default AddForm;