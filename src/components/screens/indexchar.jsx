import { useEffect, useState } from "react";
import Pagination from "../pagination";
import Characters from "../characters";

function IndexCharacters() {
  const [characters, setCharacters] = useState([]);
  const [info, setInfo] = useState([]);

  const characterurl = "https://rickandmortyapi.com/api/character";

  const fetchCharacters = (url) => {
    fetch(url)
      .then((response)=> {
      if (!response.ok) {
        throw new Error("ERROR HTTP: " + response.status)
      }
      return response.json();
      })
      .then(data => {
        setCharacters(data.results);
        setInfo(data.info);
      })
      .catch(error => console.log(error))
  };

  const onPrevious = () => {
    fetchCharacters(info.prev);
  }

  const onNext = () => {
    fetchCharacters(info.next);
  }

  useEffect(() => {
    fetchCharacters(characterurl);
  }, []);

  return (
    <div className="container mt-5">
      <Pagination prev={info.prev} next={info.next} onPrevious={onPrevious} onNext={onNext} />
      <Characters characters={characters} />
      <Pagination prev={info.prev} next={info.next} onPrevious={onPrevious} onNext={onNext} />
    </div>
  )
}

export default IndexCharacters;