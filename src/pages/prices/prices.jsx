import React from "react"
import ParticularPriceCard from "../../components/priceCards/particularPrinceCard"
import HttpClient from "../../services/axios"

import "./prices.css"


const Prices = () =>{



    return (
        <div className="prices-page">
            <ParticularPriceCard 
            category = "premium"
            price = "40$"
            description = "The favorite course to every students because we have 20% off for this week"
            paypalLink = "google.com"/>
            <ParticularPriceCard 
            category = "Standard"
            price = "10$"
            description = "If you wan know the fist steps to beging in this Industry this course is for you"
            paypalLink = "facebook.com"/>
            <ParticularPriceCard 
            category = "Diamond"
            price = "30$"
            description = "If you have been done a course you have a 50% off here"
            paypalLink = "protobot.dev"/>
        </div>
    )
}

export default Prices;