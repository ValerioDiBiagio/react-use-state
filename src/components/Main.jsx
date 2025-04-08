// importare il bottone
import Button from "./Buttons";

// importare array linguaggi
import languages from '../data/languages'

// funzione main
export default function Main() {
    return (
        <main>
            <div>
                {languages.map(language => <Button key={language.id} title={language.title} description={language.description} />)}
            </div>
        </main>
    )
}
