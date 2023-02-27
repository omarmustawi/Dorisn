import Boxs from "./Box/Boxs";
import Data from "./Box/Data";
import "./Services.css";
import X from "../../assets/phone.svg";
import Intro from "../Intro/Intro";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight  } from "@fortawesome/free-solid-svg-icons";


const Services = () => {
    const data =  Data.map( (el , id) => <Boxs key={id} title={el.title} text={el.text} icon={el.icon} />  )
    const dataOfIntro = [ "OUR SERVICES",
    "We craft digital, graphic and dimensional thinking,to create category leading brand experiences that have meaning and add a value for our clients"
    ];
    
    return ( 
        <div id="services" className="services">
            <Intro titleIntro={dataOfIntro[0]} paragraphIntro={dataOfIntro[1]} />
            <div className="Boxs">{data}</div>
            <div className="parent">
                <div className="col">
                    <h6>A digital web design studio creating modern & engaging online experiences</h6>
                    <p>Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
                    <ul>
                        <li>We put a lot of effort in design.</li>
                        <li>The most important ingredient of successful website.</li>
                        <li>Sed ut perspiciatis unde omnis iste natus error sit.</li>
                        <li>Submit Your Orgnization.</li>
                    </ul>
                    <button className="Button" type="submit">Learn More  <FontAwesomeIcon icon={faArrowRight} /> </button>
                </div>    
                <div className="col">
                    <img src={X} id="phone" alt="" />
                </div>
            </div> 

        </div>
     );
}
 
export default Services;