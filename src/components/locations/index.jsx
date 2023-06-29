import React from "react";
import { Link } from "react-router-dom";

const Locations = ({locations = []}) => {
    return (
        <div className="row">
            {
                locations.map((item, index) => (
                    <div key={index} className="col mb-4">
                        <Link to={`/locations/${item.name}`} className="text-decoration-none text-reset" >
                        <div className="card" style={{minWidth: "200px"}}>
                            <div className="card-body">
                                <h5 className="card-title">{item.name}</h5>
                                <p>{item.type}</p>
                                <p>{item.dimension}</p>
                            </div>
                        </div>
                        </Link>
                    </div>
                ))
            }
        </div>
    );
}

export default Locations;