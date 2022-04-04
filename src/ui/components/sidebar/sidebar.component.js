import { SIDEBAR } from "../../../utils/sidebar";
import "./sidebar.style.css";

export function Sidebar() {
    return (
        <nav className="sidebar">
            <SidebarOption option={SIDEBAR.PERFIL} />
            <SidebarOption option={SIDEBAR.EXPERIENCE} />
            <SidebarOption option={SIDEBAR.SKILLS} />
            <SidebarOption option={SIDEBAR.CONTACT} />
            <div className="sidebar--especial--options">
                <SidebarOption option={SIDEBAR.MODE} />
                <SidebarOption option={SIDEBAR.LANGUAGE} />
            </div>
        </nav>
    );
}

function SidebarOption({ option }) {
    return (
        <a href={option?.id}>
            <div className="sidebar--option">
                <img src={option.icon} alt="icone da sidebar" />
            </div>
        </a>
    );
}
