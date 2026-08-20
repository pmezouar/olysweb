import Button from '../../../layout/button/Button'


const projects = [
    {
        "id": 1,
        img_path: "/herbierdeprovence.png",
        title: "Herbier de Provence",
        description: "Un site vitrine pour un grossiste en herbes aromatiques sauvages de Provence",
        project_url: "https://herbier-provence.com",
    },
    // {
    //     "id": 2,
    //     img_path: "/allotaxi.png",
    //     title: "Allo Taxi Sud",
    //     description: "Un site vitrine pour un groupe de taxis",
    //     project_url: "https://allo-taxi-sud.com",
    // },
    {
        "id": 3,
        img_path: "/beautystar.png",
        title: "Beauty Star",
        description: "Une application web pour un institut de beauté",
        project_url: "https://beautystar.onrender.com",
    }
]
function PortfolioCard() {
    const projectsList = projects.map(project => (
        <li key={project.id} className="project">
            <img src={project.img_path} alt={project.title} />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <Button link={project.project_url} target='_blank' icon_left='' icon_right='bi bi-arrow-right' content="Voir le projet" class_name="btn btn-fourth" />
        </li>
    ))

    return (
        <ul className="container">
            {projectsList}
        </ul>
    )
}

export default PortfolioCard
