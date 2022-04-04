import "./perfil.style.css";
import perfil from "../../../assets/images/perfil.jpeg";

export function Perfil() {
    return (
        <>
            <div className="perfil--photo--info">
                <span className="perfil--info">!</span>
                <img src={perfil} className="perfil--photo" alt="foto de perfil" />
                <div className="perfil--card">
                    <h3>16/07/2001</h3>
                    <h3>Unisinos - Sistemas de Informação</h3>
                    <h3>Novo Hamburgo - RS</h3>
                </div>
            </div>
            <h1 className="perfil--title">Alberto Salazar Iense</h1>
            <h2 className="perfil--subtitle">Desenvolvedor Full Stack Web</h2>
        </>
    );
}
