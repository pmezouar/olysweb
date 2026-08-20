// import Button from '../../../layout/button/Button'
import './portfolio.css'
import PortfolioCard from './PortfolioCard'

function Portfolio() {
    return (
        <section id="portfolio">
            <h2>Nos <span>réalisations</span></h2>
            <div className="border"></div>
            <p>Découvrez une sélection de projets sur lesquels nous avons accompagné des professionnels comme vous.</p>

            <PortfolioCard />

            {/* <Button link='/portfolio' target='' icon_left='' icon_right='' content="Voir toutes nos réalisations" class_name="btn btn-primary" /> */}

        </section>
    )
}

export default Portfolio
