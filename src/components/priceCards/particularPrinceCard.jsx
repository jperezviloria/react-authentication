import React from "react";
import "./particularPriceCard.css"


const ParticularPriceCard = (props) =>{

    return (
        <div className = "particular-price-card">
            <h3>{props.category}</h3>
            <h1>{props.price}</h1>
            <p>{props.description}</p>
            <a href={props.paypalLink}>Get it</a>
        </div>
    )
} 

export default ParticularPriceCard;