import About from "./about/About"
import Contact from "./contact/Contact"
import Hero from "./hero/Hero"
import Portfolio from "./portfolio/Portfolio"
import Services from "./services/Services"

function Home() {
    return (
        <main>
            <Hero />
            <Services />
            <Portfolio />
            <About />
            <Contact />
        </main>
    )
}

export default Home
