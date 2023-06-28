import { useEffect, useState } from "react";
import Pagination from "../pagination";
import Episodes from "../episodes";

function IndexEpisodes() {
  const [episodes, setEpisodes] = useState([]);
  const [info, setInfo] = useState([]);

  const episodeurl = "https://rickandmortyapi.com/api/episode";

  const fetchEpisodes = (url) => {
    fetch(url)
      .then(response => response.json())
      .then(data => {
        setEpisodes(data.results);
        setInfo(data.info);
      })
      .catch(error => console.log(error))
  }

  const onPrevious = () => {
    fetchEpisodes(info.prev);
  }

  const onNext = () => {
    fetchEpisodes(info.next);
  }

  useEffect(() => {
    fetchEpisodes(episodeurl);
  }, []);

  return (
    <div className="container mt-5">
      <Pagination prev={info.prev} next={info.next} onPrevious={onPrevious} onNext={onNext} />
      <Episodes episodes={episodes} />
      <Pagination prev={info.prev} next={info.next} onPrevious={onPrevious} onNext={onNext} />
    </div>
  )
}

export default IndexEpisodes;