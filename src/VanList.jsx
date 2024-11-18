import { Link } from "react-router-dom";

const vans = [
    { id: 1, name: "Luxury Van", price: 100 },
    { id: 2, name: "Simple Van", price: 80 },
    { id: 3, name: "Rugged Van", price: 120 }
];

function VanList() {
    return (
        <div className="van-list-container">
            <h1>Available Vans</h1>
            <div className="van-list">
                {vans.map(van => (
                    <Link key={van.id} to={`/vans/${van.id}`} className="van-tile">
                        <div>
                            <h2>{van.name}</h2>
                            <p>${van.price}/day</p>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}

export default VanList;
