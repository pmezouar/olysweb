import Button from '../../layout/button/Button'
import './error404.css'

function Error404() {
    return (
        <main id="error404">
            <h1>Erreur 404 - Page non trouvée</h1>
            <p>La page demandée n'existe pas.</p>
            <Button link="/" target='' icon_left='' icon_right='' content="Retour à l'accueil" class_name="btn btn-primary" />
        </main>
    )
}

export default Error404
