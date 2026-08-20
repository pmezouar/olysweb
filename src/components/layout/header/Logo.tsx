import { Link } from "react-router-dom"
import LogoUrl from "/logo.png"

function Logo() {
    return (
        <Link to="/">
            <img src={LogoUrl} className="logo" alt="Logo OlysWeb" />
        </Link>
    )
}

export default Logo
