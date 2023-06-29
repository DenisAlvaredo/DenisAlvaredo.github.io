import { useEffect, useState } from "react";
import Pagination from "../pagination";
import Locations from "../locations";

function IndexLocations() {
    const [locations, setLocations] = useState([]);
    const [info, setInfo] = useState([]);

    const locationurl = "https://rickandmortyapi.com/api/location";

    const fetchLocations = (url) => {
        fetch(url)
        .then(response => {
        if (!response.ok) {
            throw new Error("ERROR HTTP: " + response.status)
        }
        return response.json();
        })
        .then(data => {
        setLocations(data.results);
        setInfo(data.info);
        })
        .catch(error => console.log(error))
    };

    const onPrevious = () => {
        fetchLocations(info.prev);
    }

    const onNext = () => {
        fetchLocations(info.next);
    }

    useEffect(() => {
        fetchLocations(locationurl);
    }, []);

    return (
    <div className="container mt-5">
        <Pagination prev={info.prev} next={info.next} onPrevious={onPrevious} onNext={onNext} />
        <Locations locations={locations} />
        <Pagination prev={info.prev} next={info.next} onPrevious={onPrevious} onNext={onNext} />
    </div>
    )
}

export default IndexLocations;