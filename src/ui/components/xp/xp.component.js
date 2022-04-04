import "./xp.style.css";
import { XP } from "../../../utils/xp";

export function Experiences() {
    const xpList = XP.map((xp) => {
        return (
            <li className="xp--card">
                <img className="xp--icon" src={xp.icon} alt="icone da empresa" />
                <div>
                    <h3>{xp.name}</h3>
                    <p>{xp.date}</p>
                </div>
            </li>
        );
    });

    return <ul className="xp--list">{xpList}</ul>;
}
