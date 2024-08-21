import { memo } from "react"
import "./footer.css"
import { MenuFooter } from "./MenuFooter"

const Footer = () => {
    return (
        <div className="footer">
            <ul className="socials-list">
                <li className="socials-list-icon">
                    <a href="">
                        <i className="fa-brands fa-facebook-f"></i>
                    </a>
                </li>
                <li className="socials-list-icon">
                    <a href="">
                        <i className="fa-brands fa-instagram"></i>
                    </a>
                </li>
                <li className="socials-list-icon">
                    <a href="">
                        <i className="fa-brands fa-youtube"></i>
                    </a>
                </li>
            </ul>
            <div className="footer-list">
                <ul className="footer-list-content">
                    {MenuFooter.map((item,index) => (
                        <li key={index} className={item.cName}><a href={item.url}>{item.title}</a></li>
                    ))}
                </ul>
            </div>
            <span className="copyright">© Copyright by HuynhQuyn</span>
        </div>
    )
}

export default memo(Footer)