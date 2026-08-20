import './services.css'
import ServicesCard from './ServicesCard'

function Services() {
    return (
        <section id="services">
            <h2>Nous transformons vos idées en <span>solutions digitales</span> performantes</h2>
            <div className="border"></div>

            <ServicesCard />
        </section>
    )
}

export default Services
