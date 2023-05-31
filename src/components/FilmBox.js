const FilmBox = ({ name, image, cost, year}) => {
    return (
        <div className="card-box">
            <div className="film-item">
                <img src={image} />
                <div className="film-info">
                    <h2 className="film-title">{name}</h2>
                    <p className="film-cost">${cost}</p>
                </div>
                <span className="info-span">{year}</span>
            </div>
        </div>
    );
}

export default FilmBox;