import './contact.css'
import ContactForm from './ContactForm'
import ContactInfos from './ContactInfos'

function Contact() {
    return (
        <section id="contact">
            <h2>Prêt à donner vie à votre projet ?</h2>
            <div className="border"></div>
            <p>Discutons de vos besoins et construisons ensemble une solution sur mesure pour atteindre vos objectifs.</p>
            <div className="container">
                <ContactInfos />
                <ContactForm />
            </div>
        </section >
    )
}

export default Contact
