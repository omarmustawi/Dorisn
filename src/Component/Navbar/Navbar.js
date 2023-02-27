import { useState, useEffect } from "react";
import { FaBars } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";
import "./Navbar.css";


export default function Navbar() {
    const [navbar, setNavbar] = useState( false );
    const [toggleUl ,setToggleUl ] = useState("hideUl");
    const [toggleIcon ,setToggleIcon ] = useState( "showIcon" );
    const [toggleIconRemove ,setToggleIconRemove ] = useState( "hideIcon" );

    const changeBackground = () => {
        // console.log(window.scrollY)
        if (window.scrollY >= 66) {
            setNavbar(true);
        } else {
            setNavbar(false);
        }
    }

    useEffect(() => {
        // changeBackground()
        // adding the event when scroll change background
        window.addEventListener("scroll", changeBackground)
    })

   const toggle = () => {
    if( toggleUl === "showUl" ) setToggleUl("hideUl");
    else setToggleUl("showUl");
    // console.log( toggleUl );
    if( toggleIcon === "showIcon" ) setToggleIcon("hideIcon");
    else setToggleIcon("showIcon")
    if( toggleIconRemove === "showIcon" ) setToggleIconRemove("hideIcon");
    else setToggleIconRemove( "showIcon" );
    console.log( toggleIconRemove );

}

    return (
    <nav className={ navbar? "navbar active" : "navbar"} >
        <div className="sections">
        <div className="logo">DORSIN</div>
        <ul className={toggleUl}>
            <li><a href="#home"  onClick={ () => toggle() }>Home</a></li>
            <li><a href="#services" onClick={ () => toggle() }>Services</a></li>
            <li><a href="#about-us" onClick={ () => toggle() }>About us</a></li>
            <li><a href="#blog" onClick={ () => toggle() }>Blog</a></li>
            <li><a href="#contact" onClick={ () => toggle() }>Contact us</a></li> 
            <button onClick={ () => toggle() } className="TryItFree" type="submit">Try it Free</button>
        </ul>
        <FaBars className={`iconBar ${toggleIcon}`} onClick={ () => toggle() } />
        <FaTimes className={`iconBar ${toggleIconRemove}`} onClick={ () => toggle() } />
        </div>
    </nav>

    );
} 