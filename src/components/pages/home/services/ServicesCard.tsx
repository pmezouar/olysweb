const services = [
    {
        id: 1,
        icon: "bi bi-code-slash",
        title: "Développement sur mesure",
        description: "Des applications web spécifiquement conçues pour vos besoins."
    },
    {
        id: 2,
        icon: "bi bi-aspect-ratio",
        title: "Design & Expérience utilisateur",
        description: "Des interfaces modernes, intuitives et centrées sur vos utilisateurs."
    },
    {
        id: 3,
        icon: "bi bi-rocket-takeoff",
        title: "Performance & Sécurité",
        description: "Des solutions rapides, sécurisées et prêtes à évoluer avec votre activité."
    },
    {
        id: 4,
        icon: "bi bi-gear-wide-connected",
        title: "Accompagnement & Support",
        description: "Un suivi personnalisé à chaque étape de votre projet."
    },
]

function ServicesCard() {

    const servicesList = services.map(service => (
        <li key={service.id} className="card">
            <i className={service.icon}></i>
            <h3>{service.title}</h3>
            {/* <div className="border"></div> */}
            <p>{service.description}</p>
        </li>
    ))

    return (
        <>
            <ul className="container">
                {servicesList}
            </ul>
        </>
    )
}

export default ServicesCard
