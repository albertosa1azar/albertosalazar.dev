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
        <a className="sidebar--link" href={option?.id}>
            <div className="sidebar--option">
                <SidebarIcon svg={option.icon} />
                <h3 className="sidebar--option--title">{option.name}</h3>
            </div>
        </a>
    );
}

function SidebarIcon({ svg }) {
    return <span className="sidebaricon">{svg}</span>;
}
