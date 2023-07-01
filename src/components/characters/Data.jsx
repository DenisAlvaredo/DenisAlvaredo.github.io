import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

const CharacterData = () => {
    const { id } = useParams();
    const [char, setChar] = useState(null);

    useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/${id}`)
        .then((response) => {
          if (!response.ok) {
            throw new Error("ERROR HTTP: " + response.status)
          }
          return response.json();
          })
          .then((data) => setChar(data))
        .catch((error) => console.log(error));
    }, [id]);

    if (!char) {
    return <div className="align-items-center" ><h1>Cargando...</h1></div>;
    }

    const originId = char.origin.url.split("/").pop();

    return (
    <>
        <div className="container card mt-3">
          <div className="row align-items-center">
            <img src={char.image} alt="" className="col"/>
            <div className="col">
              <h2>Name: "{char.name}"</h2>
              <h3>status: "{char.status}"</h3>
              <h3>Specie: "{char.species}"</h3>
              <h3>Type: "{char.type}"</h3>
              <h3>Gender: "{char.gender}"</h3>
              <Link to={`/locations/${originId}`} className="text-decoration-none text-reset">
                <h3>Origin: "{char.origin.name}"</h3>
              </Link>
            </div>
          </div>
        </div>
    </>
    );
};

export default CharacterData;