import './footer.css'

function Footer() {
    return (
        <footer>
            <div className="container">
                <div>
                    <img src="/logo.png" className='logo' alt="Logo OlysWeb" />
                    <p>Agence de développement web spécialisée dans la création de solutions sur mesure pour professionnels</p>
                    <div className='social'>
                        <a href="tel:+33666430997" className='icon'><i className="bi bi-phone"></i></a>
                        <a href="mailto:contact@olysweb.com" className='icon'><i className="bi bi-envelope"></i></a>
                        <a target="_blank" href="https://linkedin.com/company/olysweb" className='icon'><i className="bi bi-linkedin"></i></a>
                        <a target='_blank' href="https://github.com/olysweb" className='icon'><i className="bi bi-github"></i></a>
                    </div>
                </div>

                <div>
                    <h4>Liens rapides</h4>
                    <ul>
                        <li><a href="/">Accueil</a></li>
                        <li><a href="/#services">Services</a></li>
                        <li><a href="/#portfolio">Réalisations</a></li>
                        <li><a href="/#about">À propos</a></li>
                        <li><a href="/#contact">Contact</a></li>
                    </ul>
                </div>

                <div>
                    <h4>Contact</h4>
                    <ul>
                        <li><i className="bi bi-envelope"></i><a href="mailto:contact@olysweb.com">contact@olysweb.com</a></li>
                        <li><i className="bi bi-phone"></i><a href="tel:+33666430997">06.66.43.09.97</a></li>
                        <li><i className="bi bi-geo-alt"></i>Tarascon & Full remote</li>

                    </ul>
                </div>
            </div>
            <div className="copyright">
                <p>©2026 - OlysWeb - Tous droits réservés.</p>
                <div className="legal">
                    <a href="/mentions-legales">Mentions légales</a>
                </div>
            </div>
        </footer>
    )
}

export default Footer
