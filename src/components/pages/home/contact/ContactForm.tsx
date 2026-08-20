function ContactForm() {
    return (
        <div id="contact-form">
            <h3>Formulaire de contact</h3>
            <form
                method="POST"
                autoComplete="off"
                action="https://formspree.io/f/mrenovvw"
            >
                <input type="text" placeholder='Nom et prénom' name="name" required />
                <input type="email" placeholder='Email' name="email" required />
                <input type="tel" placeholder='Téléphone' name="phone_number" required />
                <textarea placeholder="Décrivez votre projet..." name="message" rows={10} required></textarea>
                <button type="submit" className="btn btn-secondary">Envoyer</button>
            </form>
        </div>
    )
}

export default ContactForm
