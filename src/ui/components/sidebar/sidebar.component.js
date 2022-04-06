import { SIDEBAR } from "../../../utils/sidebar";
import "./sidebar.style.css";
import logo from "../../../assets/logos/alberto.png";

export function Sidebar() {
    return (
        <nav className="sidebar">
            <img src={logo} className="sidebar--logo" alt="logo do site" />
            <SidebarOption option={SIDEBAR.PERFIL} />
            <SidebarOption option={SIDEBAR.EXPERIENCE} />
            <SidebarOption option={SIDEBAR.SKILLS} />
            <SidebarOption option={SIDEBAR.CONTACT} />
            {/*<div className="sidebar--especial--options">
                <SidebarOption option={SIDEBAR.MODE} />
                <SidebarOption option={SIDEBAR.LANGUAGE} />
            </div>*/}
        </nav>
    );
}

function SidebarOption({ option }) {
    return (
        <a className="sidebar--link" href={option?.id}>
            <div className="sidebar--option">
                <SidebarIcon svg={option.icon} />
                <p className="sidebar--option--title">{option.name}</p>
            </div>
        </a>
    );
}

function SidebarIcon({ svg }) {
    return <div className="sidebaricon">{svg}</div>;
}
