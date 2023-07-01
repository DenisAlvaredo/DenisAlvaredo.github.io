import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const LocationData = () => {
    const { id } = useParams();
    const [location, setLocation] = useState(null);

    useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/location/${id}`)
    .then((response) => {
        if (!response.ok) {
            throw new Error("ERROR HTTP: " + response.status)
        }
        return response.json();
        })
        .then((data) => setLocation(data))
        .catch((error) => console.log(error));
    }, [id]);

    if (!location) {
        return <div className="align-items-center" ><h1>Cargando...</h1></div>;
    }

    return (
    <>
        <div className="container-sm card mt-5">
            <h2>Name: "{location.name}"</h2>
            <h3>Type: "{location.type}"</h3>
            <h3>Dimension: "{location.dimension}"</h3>
            <h3>Creaton: "{location.created}"</h3>
        </div>
    </>
    );
};

export default LocationData;