import React from "react";

const Episodes = ({episodes = []}) => {
    return (
        <div className="row">
            {
                episodes.map((item, index) => (
                    <div key={index} className="col mb-4">
                        <div className="card" style={{minWidth: "200px"}}>
                            <div className="card-body">
                                <h5 className="card-title">{item.name}</h5>
                                <p>{item.episode}</p>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    );
}

export default Episodes;