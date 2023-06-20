const About = () => {
    return (
        <div className="content">
            <h1 className="explore-header">About</h1>
            <p className="about-paragraph">
                Photogénie is a film inventory manager created by Alan Zhang, a computer science student at the University of British Columbia. Photogénie is created exclusively with HTML, CSS, JavaScript, React.js, and Redux. CSS Grid is used to display the cards.
            </p>
            <p className="about-paragraph">
                In Photogénie, you can add and remove films as they wish, which will be displayed as cards. Clicking each card will give you the full title (if previously obscured), as well as a description of the film. Additional features include the ability to see the total number of all cards, which is dynamically updated.
            </p>
        </div>
    );
}

export default About;