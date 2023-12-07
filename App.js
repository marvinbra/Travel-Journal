import React from "react"
import Navbar from "./components/Navbar"
import Travel from "./components/Travel"
import data from "/data"

export default function App() {
    const TravelCard = data.map((item)=>{
        return (
            <Travel
                key={item.id}
                item={item} 
            />
        )
    })
    
    return (
        <div>
            <Navbar />
            <section>
                {TravelCard}
            </section>
        </div>
    )
}