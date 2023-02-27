import Intro from "../Intro/Intro";
import img1 from "../../assets/imageMan1.jpg";
import img2 from "../../assets/imageMan2.jpg";
import img3 from "../../assets/imageMan3.jpg";
import img4 from "../../assets/imageWoman1.jpg";
import { Fragment } from "react";
import "./Team.css";
import WorkProcess from "./WorkProcess/WorkProcess";
import OpinionsOfCustomers from "./OpinionsOfCustomers/OpinionsOfCustomers";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Header from "../Home/Header";
import "../Home/Header.css"
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const Team = () => {
    const introTeam = [
        "BEHIND THE PEOPLE",
        "It is a long established fact that create category leading brand experiences a reader will be distracted by the readable content of a page when looking at its layout."
    ];
    const myTeam = [
        {
            image: img1,
            name: "Frank Johnson",
            job: "CEO"
        },
        {
            image: img2,
            name: "Elaine Stclair",
            job: "DESIGNER"
        },
        {
            image: img3,
            name: "Wanda Arthur",
            job: "DEVELOPER"
        },
        {
            image: img4,
            name: "Joshua Stemple",
            job: "MANAGER"
        },
    ];
    const dataOfTeam = myTeam.map( (el , id ) => {
        return (
            <div key={id} className="oneEmployee">
                <img src={el.image} alt="" className="imageOfEmployee" />
                <h6 className="nameOfEmployee">{el.name}</h6>
                <p className="jobOfemployee" >{el.job}</p>
            </div>
        );
        }
    );
    const dataOfBackgroundImage = [
        "Let's Get Started",
        "Far far away, behind the word mountains, far from the countries \n Vokalia and Consonantia, there live the blind texts.",
        "backgroundImage3"
    ];
    return ( 
        <Fragment>
            <Intro titleIntro={introTeam[0]} paragraphIntro={introTeam[1]} />
            <div  className="employees" >{dataOfTeam}</div>
            <WorkProcess />
            <OpinionsOfCustomers />
            <div id="blog"></div>
            <Header 
            sentence={ <Intro titleIntro={dataOfBackgroundImage[0]}
            paragraphIntro={""} /> }  
            Element={  <button className="Button centerButtton">
                                Get Started  
                                <span> 
                                    <FontAwesomeIcon icon={faArrowRight} />
                                </span>
                            </button>} 
            ClassName={dataOfBackgroundImage[2]}
            paragraph={dataOfBackgroundImage[1]}
            />

        </Fragment>
    );
}
 
export default Team;