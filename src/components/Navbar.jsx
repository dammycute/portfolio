import React, {useState} from 'react'

const Navbar = () => {
    const logo = "<Ht-code />"

    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };
    return (
        <div>
            <nav>
                <div className="logo">
                    <h3>{logo}</h3>
                </div>

                <div className={`nav-link ${isOpen ? "open" : ""}`}>
                    <ul>
                        <li><a href="#about">About Me</a></li>
                        <li><a href="#port">Projects</a> </li>
                        <li><a href="#services">Services</a> </li>
                        <li><a href="#skills">Skills</a> </li>
                    </ul>
                </div>
                <div className="menu-icon" onClick={toggleMenu}>
                    <i className={`bi ${isOpen ? 'bi-x' : 'bi-list'}`}></i>
                </div>
            </nav>
        </div>
    )
}

export default Navbar