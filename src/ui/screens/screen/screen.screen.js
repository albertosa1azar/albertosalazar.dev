import "./screen.style.css";
import { Skills, Experiences, Perfil, Contact, Sidebar } from "../../components";

export function Screen() {
    return (
        <div className="container">
            <Sidebar />
            <section id="perfil" className="perfil">
                <Perfil />
            </section>
            <section id="xp">
                {/*<h1>Experiências</h1>
                <Experiences />*/}
            </section>
            <section id="skills">
                {/*<h1>Skills</h1>
                <Skills />*/}
            </section>
            <section id="contact">
                {/*<h1>Contato</h1>
                <Contact />*/}
                <h1></h1>
            </section>
        </div>
    );
}
