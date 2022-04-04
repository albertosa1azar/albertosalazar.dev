import "./skills.style.css";
import { SKILLS } from "../../../utils/skills";

export function Skills() {
    const skillRollBar = SKILLS.map((skill) => {
        const skillRollBarIcons = skill.icons.map((icon) => {
            return (
                <li className="skill--card">
                    <img src={icon.icon} alt="skill icon" className="skill--icon" />
                    <h3>{icon.name}</h3>
                </li>
            );
        });

        return (
            <>
                <h2>{skill.title}</h2>
                <ul>{skillRollBarIcons}</ul>
            </>
        );
    });

    return skillRollBar;
}
