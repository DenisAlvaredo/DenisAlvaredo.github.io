import React from "react";
import { Link } from "react-router-dom";

const Episodes = ({episodes = []}) => {
    return (
        <div className="row">
            {
                episodes.map((item, index) => (
                    <div key={index} className="col mb-4">
                        <Link to={`/episodes/${item.id}`} className="text-decoration-none text-reset">
                        <div className="card" style={{minWidth: "200px"}}>
                            <div className="card-body">
                                <h5 className="card-title">{item.name}</h5>
                                <p>{item.episode}</p>
                            </div>
                        </div>
                        </Link>
                    </div>
                ))
            }
        </div>
    );
}

export default Episodes;