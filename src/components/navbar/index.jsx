import { useEffect, useRef, useState, memo } from "react"
import { Link } from "react-router-dom"
import { MenuItems } from "./MenuItem"
import "./navbar.css"
const Navbar = (props) => {
    const [fix,setFix] = useState(false)
    const [activeInput,setActiveInput] = useState(false)
    const check = props.id
    console.log('123')

    useEffect(() => {
        const setFixed = () => {
            if(window.scrollY >= 100) {
                setFix(true)
            } else {
                setFix(false)
            }
        }
        window.addEventListener("scroll",setFixed)

        return () => {
            // console.log('mouting')
            window.removeEventListener("scroll",setFixed)
        }
    },[])


    const handleInputBlur = () => {
        setActiveInput(false)
    }
    return (
        <>
            <div className="header-container">
                <nav className={fix ? "navbarItems fix"  : "navbarItems"}>
                    <h1>
                        <Link to={"/"} className="header-logo">Moviez</Link>
                    </h1>
                    <ul className="navbar">
                        {MenuItems.map((item,index) =>(
                            <li key={index} 
                                className={`navbar-item  ${check === index ? "active" : ""}`}
                            >
                                <Link to={item.url} className={item.cName}>{item.title}</Link>
                            </li>
                        ))}
                    </ul>
                    <div className="secondary-navbar">
                        <div className="secondary-navbar-item">
                            <i 
                                onClick={() => setActiveInput(!activeInput)}
                                className = {`fa-solid fa-magnifying-glass search-logo ${activeInput ? "active" : ""}`}>
                            </i>
                            {activeInput && (
                                <input
                                className="search-input"
                                type="text"
                                name="keyword"
                                placeholder="Phim, thể loại..."
                                autoFocus
                                onBlur={handleInputBlur}
                                />
                            )}
                        </div>
                        <div className="secondary-navbar-item">
                            <i className="fa-regular fa-bell"></i>
                        </div>
                        <div className="secondary-navbar-item">
                            <a className="register-btn" href="">Register</a>
                        </div>
                        <div className="secondary-navbar-item">
                            <a className="login-btn" href="">Login</a>
                        </div>
                    </div>
                </nav>
            </div>
        </>
    )
}

export default memo(Navbar)