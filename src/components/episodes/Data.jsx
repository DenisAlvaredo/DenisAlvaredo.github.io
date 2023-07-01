import { useEffect, useState } from "react";
import { useParams, Link  } from "react-router-dom";

const EpisodeData = () => {
    const { id } = useParams();
    const [episode, setEpisode] = useState(null);

    useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/episode/${id}`)
    .then((response) => {
        if (!response.ok) {
            throw new Error("ERROR HTTP: " + response.status)
        }
        return response.json();
        })
        .then((data) => {const characterUrls = data.characters;
            const characterPromises = characterUrls.map((url) => fetch(url).then((response) => response.json()));
            
            Promise.all(characterPromises)
                .then((characters) => {
                    setEpisode({ ...data, characters });
                })
                .catch((error) => console.log(error));
            })
            .catch((error) => console.log(error));
    }, [id]);

    if (!episode) {
        return <div className="align-items-center" ><h1>Cargando...</h1></div>;
    }

    return (
    <>
        <div className="container-sm card mt-5">
            <h2>Name of the episode: "{episode.name}"</h2>
            <h3>Episode and Season: "{episode.episode}"</h3>
        </div>
        <div className="row m-5">
            <h2>Characters appearing in this episode:</h2>
            {episode.characters.map((character) => (
                <div key={character.id} className="col">
                    <Link to={`/characters/${character.id}`} className="text-decoration-none text-reset" >
                        <div className="card" style={{ minWidth: "200px" }}>
                            <img src={character.image} alt={character.name} />
                            <div className="card-body">
                                <h5 className="card-title">{character.name}</h5>
                                <p>Specie: {character.species}</p>
                            </div>
                        </div>
                    </Link>
                </div>
            ))}
        </div>
    </>
    );
};

export default EpisodeData;