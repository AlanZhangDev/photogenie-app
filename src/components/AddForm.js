import { useState } from "react";
import { useDispatch } from "react-redux";
import { addFilm } from "../features/filmsSlice";

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

        dispatch(addFilm(film));
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
            </form>
        </div>
    );
}

export default AddForm;