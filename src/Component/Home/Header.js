import React from "react";
import "./Header.css";
import Waves from "../../Waves/Waves";

const Header = (props) => {
    return ( 
        <header id="home" className={props.ClassName}>
            <div className="header-overlay">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <h2 style={{whiteSpace: "pre-wrap"}}>{props.sentence}</h2>
                            <p style={{whiteSpace: "pre-wrap"}}>{props.paragraph}</p>
                            <div>{props.Element} </div>
                        </div>
                    </div>
                </div>
                <Waves />
            </div>
        </header>
     );
}
 
export default Header;