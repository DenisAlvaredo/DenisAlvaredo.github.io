import React from "react";
import { Link } from "react-router-dom";

const Characters = ({ characters = [] }) => {
    return (
        <div className="row">
            {
                characters.map((item, index) => (
                    <div key={index} className="col mb-4">
                        <Link to={`/characters/${item.name}`} >
                        <div className="card" style={{ minWidth: "200px" }}>
                            <img src={item.image} alt={item.name} />
                            <div className="card-body">
                                <h5 className="card-title">{item.name}</h5>
                                <p>Specie: {item.species}</p>
                            </div>
                        </div>
                        </Link>
                    </div>
                ))
            }
        </div>
    );
}

export default Characters;