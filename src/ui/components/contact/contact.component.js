import "./contact.style.css";
import { CONTACT } from "../../../utils/contact";

export function Contact() {
    const contact = CONTACT.map((type) => {
        const contactList = type.contacts.map((contact) => {
            return (
                <li>
                    <img src={contact.icon} className="contact--icon" alt="icone de contato" />
                    <h3>{contact.name}</h3>
                </li>
            );
        });

        return (
            <li>
                <h2>{type.title}</h2>
                <ul>{contactList}</ul>
            </li>
        );
    });

    return <ul className="contact--list">{contact}</ul>;
}
