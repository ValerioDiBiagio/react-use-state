// importare il bottone
import Button from "./Button";

// importare array linguaggi
import languages from '../data/languages'

// funzione main
export default function Main() {
    return (
        <Button title={languages} />
    )
}
