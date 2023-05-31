import FilmBox from "./FilmBox";
import { useSelector } from "react-redux";

const FilmGrid = () => {
    const {films} = useSelector((state) => state.films);

    return (
        <div className="film-list">
            {films.map((film) => {
                return <FilmBox key={film.name} {...film} />;
            })}
        </div>
    );
}

export default FilmGrid;