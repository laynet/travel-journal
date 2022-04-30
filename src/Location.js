import React from 'react'
import mapIcon from './images/map-icon.png'


const Location = (props) => {
  return (
    <div className="location">
        <img className="location-image"src={props.imageUrl} alt="" />
        <div className="info">
            <div className="eyebrow">
                <img src={mapIcon} alt="" />
                <h4>{props.location}</h4>
                <a href={props.mapUrl} target="blank">View on Google Maps</a>
            </div>
            <h1>{props.title}</h1>
            <p className="date">{props.startDate}- {props.endDate}</p>
            <p>{props.description}</p>   
        </div>
    </div>
  )
}

export default Location