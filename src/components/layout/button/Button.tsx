// import { NavLink } from "react-router-dom"
import './button.css'

interface ButtonProps {
    link: string;
    class_name: string;
    icon_left: string;
    content: string;
    icon_right: string;
    target: string;
}

function Button({ link, target, class_name, icon_left, content, icon_right }: ButtonProps) {
    return (
        <a href={link} target={target} className={class_name}>
            <i className={icon_left}></i> {content} <i className={icon_right}></i>
        </a>
    )
}

export default Button
