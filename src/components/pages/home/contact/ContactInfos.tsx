import { NavLink } from "react-router-dom"

const infos = [
    {
        id: 1,
        icon: "bi bi-envelope-at",
        title: "Email",
        link: "mailto:contact@olysweb.com",
        content_link: "contact@olysweb.com",
    },
    {
        id: 2,
        icon: "bi bi-phone",
        title: "Téléphone",
        link: "tel:+33666430997",
        content_link: "06.66.43.09.97",
    }
]

function ContactInfos() {
    const infosList = infos.map(info => (
        <li key={info.id} className="info">
            <i className={info.icon}></i>
            <h3>{info.title}</h3>
            <div className="border"></div>
            <NavLink to={info.link}>{info.content_link}</NavLink>
        </li>
    ))
    return (
        <ul>
            {infosList}
        </ul>
    )
}

export default ContactInfos
