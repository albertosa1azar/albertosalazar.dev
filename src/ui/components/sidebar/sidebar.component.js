import { SIDEBAR } from "../../../utils/sidebar";
import "./sidebar.style.css";

export function Sidebar() {
    const sidebarList = SIDEBAR.map((option) => {
        return (
            <li>
                <img src={option.icon} alt="icone da sidebar" />
            </li>
        );
    });
    return (
        <nav className="sidebar">
            <ul className="sidebar--list">{sidebarList}</ul>
        </nav>
    );
}
