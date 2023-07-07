import { useEffect } from "react";
import FilmBox from "./FilmBox";
import { useSelector, useDispatch } from "react-redux";
import { getFilmsAsync } from "../features/filmsThunk";

const FilmGrid = () => {
    const {films} = useSelector((state) => state.films);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getFilmsAsync())
    }, [dispatch])

    return (
        <div className="film-list">
            {films.map((film) => {
                return <FilmBox key={film._id} {...film} />;
            })}
        </div>
    );
}

export default FilmGrid;