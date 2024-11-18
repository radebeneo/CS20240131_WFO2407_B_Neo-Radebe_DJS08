import { useParams } from "react-router-dom";

const vans = [
    { id: 1, name: "Luxury Van", price: 100, description: "A luxurious van for your adventures." },
    { id: 2, name: "Simple Van", price: 80, description: "A simple yet reliable van." },
    { id: 3, name: "Rugged Van", price: 120, description: "A rugged van for tough terrains." }
];

function VanDetail() {
    const { id } = useParams();
    const van = vans.find(v => v.id === parseInt(id));

    if (!van) {
        return <p>Van not found!</p>;
    }

    return (
        <div className="van-detail">
            <h2>{van.name}</h2>
            <p>${van.price}/day</p>
            <p>{van.description}</p>
        </div>
    );
}

export default VanDetail;
