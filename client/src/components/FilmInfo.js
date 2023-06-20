import { useDispatch } from "react-redux";
import { deleteFilmAsync, patchFilmPriceAsync } from "../features/filmsThunk";

const FilmInfo = ({ id, name, year, cost, description, onClose}) => {
    const dispatch = useDispatch();

    const removeFilm = () => {
        dispatch(deleteFilmAsync(id));
    }

    const editFilm = () => {
        dispatch(patchFilmPriceAsync(id));
    }

    return (
        <dialog className="film-info-modal" open={true}>
            <div className="film-info-modal-container">
                <button className="close-button" onClick={onClose}>✕</button>
                <h2 className="film-modal-title">{name} <span className="film-modal-year">({year})</span></h2>
                <p>{description}</p>
                <p>$ {cost}</p>
                <div className="add-film-form-buttons">
                <button onClick={removeFilm} className="delete-film-button">Delete</button>
                <button onClick={editFilm} className="edit-film-button">Set Price FREE</button>
                </div>
            </div>
        </dialog>
    );
}

export default FilmInfo;