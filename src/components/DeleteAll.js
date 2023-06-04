import { useDispatch } from "react-redux";
import { deleteAll } from "../features/filmsSlice";

const DeleteAll = () => {
    const dispatch = useDispatch();

    const deleteFilms = () => {
        dispatch(deleteAll());
    }

    return (
        <button onClick={deleteFilms} type="button" className="delete-all-button">Delete All</button>
    );
}

export default DeleteAll;