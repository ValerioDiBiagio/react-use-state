// importare useState
import { useState } from "react"

// importare la card
import Card from "./Card"


// funzione bottone
export default function Button({ title, description, active, toggle }) {

    return (
        <div className="container-bt">
            <button className="btn" onClick={toggle}>{title}</button>
            {active && <Card description={description} />}
        </div>
    )
}