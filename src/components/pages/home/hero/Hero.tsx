import Button from '../../../layout/button/Button'
import './hero.css'

function Hero() {
    return (
        <section id="hero">
            <div className="container">
                <h1>Des solutions web sur mesure pour <span>faire grandir</span> votre business.</h1>
                <div className="border"></div>
                <p>Nous concevons et développons des applications web performantes, sécurisées et évolutives, pensées pour répondre à vos besoins métiers.</p>
                <div className="links">
                    <Button link="/#services" target='' icon_left='' icon_right='' content="Découvrir nos services" class_name="btn btn-secondary" />
                    <Button link="/#contact" target='' icon_left='' icon_right='' content="Débuter votre projet" class_name="btn btn-tertiary" />
                </div>
            </div>
        </section>
    )
}

export default Hero
