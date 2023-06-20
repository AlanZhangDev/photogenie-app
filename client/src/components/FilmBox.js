import FilmInfo from "./FilmInfo";
import { useState } from "react";
import { createPortal } from "react-dom";

const FilmBox = ({ id, name, image, cost, year, description }) => {
    const [showModal, setShowModal] = useState(false);

    return (
        <>
            <div className="card-box" onClick={() => setShowModal(true)}>
                <div className="film-item">
                    <img src={image} alt={`Poster of "${name}" (${year})`} className="poster-image"/>
                    <div className="film-info">
                        <h2 className="film-title">{name}</h2>
                        <p className="film-cost">${cost}</p>
                    </div>
                    <span className="info-span">{year}</span>
                </div>
            </div>
            {showModal && createPortal(
                <FilmInfo id={id} name={name} year={year} cost={cost} description={description} onClose={() => setShowModal(false)} />,
                document.body
            )}
        </>
    );
}

export default FilmBox;