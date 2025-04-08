// importare useState
import { useState } from "react"

// importare la card
import Card from "./Card"


// funzione bottone
export default function Button({ title }) {

    const [click, setClick] = useState(false)

    const toggle = () => {
        setClick(prev => !prev);
    }

    return (
        <div>
            <button onClick={toggle}>{title}</button>
            {click && <Card />}
        </div>
    )
}