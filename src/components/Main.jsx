// importare il bottone
import Button from "./Buttons";

// importare array linguaggi
import languages from '../data/languages'
import { useState } from "react";

// funzione main
export default function Main() {

    const [activeLanguage, setActiveLanguage] = useState(null);

    return (
        <main>
            <div>
                {languages.map(language => <Button key={language.id}
                    title={language.title}
                    description={language.description}
                    active={activeLanguage === language.id}
                    toggle={() => setActiveLanguage(activeLanguage === language.id ? null : language.id)} />)}
            </div>
        </main>
    )
}
