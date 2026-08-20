import { useState } from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    return (
        <>
            {/* Button for responsive nav */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="btn-icon"
                aria-label={isOpen ? "Fermer le menu" : "Ouvrir le menu"}
            >
                <i className={`bi ${isOpen ? "bi-x-circle" : "bi-list"}`}></i>
            </button>

            <nav className={isOpen ? "open" : ""}>
                <NavLink
                    to="/"
                    onClick={() => setIsOpen(false)}
                    end
                >
                    Accueil
                </NavLink>

                <a
                    href="/#services"
                    onClick={() => setIsOpen(false)}
                >
                    Services
                </a>

                <a
                    href="/#portfolio"
                    onClick={() => setIsOpen(false)}
                >
                    Réalisations
                </a>

                <a
                    href="/#about"
                    onClick={() => setIsOpen(false)}
                >
                    À propos
                </a>

                <a
                    href="/#contact"
                    onClick={() => setIsOpen(false)}
                >
                    Contact
                </a>

                <a
                    href="tel:+33666430997"
                    className="btn btn-primary"
                    onClick={() => setIsOpen(false)}
                >
                    Appelez-nous
                </a>
            </nav>
        </>
    );
}

export default Navbar;