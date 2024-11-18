import { Link } from "react-router-dom";

function NotFound() {
    return (
        <div className="not-found-container">
            <h1>Page Not Found</h1>
            <Link to="/" className="link-button">Back to Home</Link>
        </div>
    );
}

export default NotFound;
