import { useSelector } from "react-redux";

const ExploreHeader = () => {
    const {amount} = useSelector((state) => state.films);

    return (
        <h1 className="explore-header">Explore All <span className="total-films">{amount}</span> Titles</h1>
    );
}

export default ExploreHeader;