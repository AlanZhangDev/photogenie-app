import { useDispatch } from "react-redux";
import { deleteFilm } from "../features/filmsSlice";

const FilmInfo = ({ name, year, cost, description, onClose}) => {
    const dispatch = useDispatch();

    const removeFilm = () => {
        dispatch(deleteFilm(name));
    }

    return (
        <dialog className="film-info-modal" open={true}>
            <div className="film-info-modal-container">
                <button className="close-button" onClick={onClose}>✕</button>
                <h2 className="film-modal-title">{name} <span className="film-modal-year">({year})</span></h2>
                <p>{description}</p>
                <p>$ {cost}</p>
                <button onClick={removeFilm} className="delete-film-button">Delete</button>
            </div>
        </dialog>
    );
}

export default FilmInfo;