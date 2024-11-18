import { Link } from "react-router-dom";

function Home() {
    return (
        <div className="home-container">
            <h1>Welcome to VanLife!</h1>
            <p>Discover your perfect van for your next adventure.</p>
            <Link to="/vans" className="link-button">Explore Vans</Link>
        </div>
    );
}

export default Home;
