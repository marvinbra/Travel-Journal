import React from "react"

export default function Travel(props) {
    console.log(props.item)
    return (
        <main>
            
            <div>
                <img className="img" src={`${props.item.imageUrl}`} />
            </div>
            
            <div id="card-info">
                <div className="top-card">
                    <i className="fa-solid fa-location-dot"></i>
                    <h4>{props.item.location}</h4>
                    <a href={`${props.item.googleMapsUrl}`}>View on Google Maps</a>
                </div>
                <div>
                    <h2>{props.item.title}</h2>
                    <p>{props.item.startDate} - {props.item.startDate}</p>
                    <p>{props.item.description}</p>
                </div>
            </div>
            
        <hr />
        </main>
    )
}