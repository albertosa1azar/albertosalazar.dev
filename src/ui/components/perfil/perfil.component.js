import "./perfil.style.css";
import perfil from "../../../assets/images/perfil.jpeg";
import ReactCardFlip from "react-card-flip";
import { useState } from "react";
import info from "../../../assets/icons/info.png";
export function Perfil() {
    const [flip, setFlip] = useState(false);

    function handleFlip() {
        setFlip(!flip);
    }

    return (
        <>
            <div className="perfil--photo--info">
                <ReactCardFlip
                    isFlipped={flip}
                    flipDirection="horizontal"
                    flipSpeedBackToFront={1.5}
                    flipSpeedFrontToBack={1.5}
                    containerClassName="perfil--flip--container"
                >
                    <div>
                        <InfoButton handleFlip={handleFlip} />
                        <img src={perfil} className="perfil--photo" alt="foto de perfil" />
                    </div>
                    <div className="perfil--card">
                        <InfoButton handleFlip={handleFlip} invert={"invert"} />
                        <div className="photo--overflow">
                            <img
                                src={perfil}
                                className="perfil--card--photo"
                                alt="foto de perfil traseira"
                            />
                        </div>

                        <h3>16/07/2001</h3>
                        <h3>Unisinos - Sistemas de Informação</h3>
                        <h3>Novo Hamburgo - RS</h3>
                    </div>
                </ReactCardFlip>
            </div>
            <h1 className="perfil--title">Alberto Salazar Iense</h1>
            <h2 className="perfil--subtitle">Desenvolvedor Full Stack Web</h2>
        </>
    );
}

function InfoButton({ handleFlip, invert }) {
    return (
        <button
            type="button"
            className={`perfil--info ${`perfil--info--${invert}`}`}
            onClick={handleFlip}
        >
            <img src={info} alt="botão de informação" />
        </button>
    );
}
