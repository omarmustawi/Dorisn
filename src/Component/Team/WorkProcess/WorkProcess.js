import Intro from "../../Intro/Intro";
import "../../Services/Box/Boxs.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {   faArrowRight, faAnglesRight, faEnvelopeOpenText, faPencilAlt  } from '@fortawesome/free-solid-svg-icons';
import { TbTarget } from "react-icons/tb";
import "./WorkProcess.css"


const WorkProcess = () => {
    const introWorkProcess = [
        "WORK PROCESS",
        "In an ideal world this website wouldn’t exist, a client would acknowledge the importance of having web copy before the design starts."
    ];
    const data = [
        "Tell us what you need",
        "The Big Oxmox advised her not to do so.",
        "Get free quotes",
        "Little Blind Text didn’t listen.",
        "Deliver high quality product",
        "When she reached the first hills."
    ];
    return ( 
        <div className="workProcess">
            <Intro titleIntro={introWorkProcess[0]} paragraphIntro={introWorkProcess[1]} />
            <span className="scheme">
                <section className="firstSec">
                    <FontAwesomeIcon icon={faPencilAlt} className="svg" />
                    <h5> {data[0]} </h5>
                    <p> {data[1]} </p>
                </section>
                <FontAwesomeIcon icon={faAnglesRight} className="svg cycle" />
                <section className="secondSec">
                    <FontAwesomeIcon icon={ faEnvelopeOpenText } className="svg" />
                    <h5> {data[2]} </h5>
                    <p> {data[3]} </p>
                </section>
                <FontAwesomeIcon icon={faAnglesRight} className="svg cycle" />
                <section>
                    <TbTarget   className="svg" />                
                    <h5> {data[4]} </h5>
                    <p> {data[5]} </p>
                </section>

            </span>
            <button className="Button" type="submit">Learn More  <FontAwesomeIcon icon={faArrowRight} /> </button>
        </div>
     );
}
 
export default WorkProcess;