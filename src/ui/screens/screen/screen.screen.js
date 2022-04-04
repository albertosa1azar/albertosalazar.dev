import "./screen.style.css";
import { Skills, Experiences, Perfil, Contact, Sidebar } from "../../components";

export function Screen() {
    return (
        <div className="container">
            <Sidebar />

            <section className="perfil">
                <Perfil />
            </section>
            <section>
                <h1>Experiências</h1>
                <Experiences />
            </section>
            <section>
                <h1>Skills</h1>
                <Skills />
            </section>
            <section>
                <h1>Contato</h1>
                <Contact />
            </section>
        </div>
    );
}
