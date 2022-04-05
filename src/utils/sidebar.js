import { ReactComponent as Perfil } from "../assets/icons/sidebar/perfil.svg";
import { ReactComponent as XP } from "../assets/icons/sidebar/xp.svg";
import { ReactComponent as Skills } from "../assets/icons/sidebar/skills.svg";
import { ReactComponent as Contact } from "../assets/icons/sidebar/contact.svg";
import { ReactComponent as Language } from "../assets/icons/sidebar/language.svg";
import { ReactComponent as Lightdark } from "../assets/icons/sidebar/lightdark.svg";

export const SIDEBAR = {
    PERFIL: {
        name: "Perfil",
        icon: <Perfil />,
        id: "#perfil",
    },
    EXPERIENCE: {
        name: "Experiências",
        icon: <XP />,
        id: "#xp",
    },
    SKILLS: {
        name: "Skills",
        icon: <Skills />,
        id: "#skills",
    },
    CONTACT: {
        name: "Contato",
        icon: <Contact />,
        id: "#contact",
    },
    LANGUAGE: {
        name: "Linguagem",
        icon: <Language />,
    },
    MODE: {
        name: "Modo",
        icon: <Lightdark />,
    },
};
