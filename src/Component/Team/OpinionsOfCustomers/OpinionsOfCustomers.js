import { Fragment } from "react";
import Intro from "../../Intro/Intro";
import img1 from "../../../assets/opinion1.jfif";
import img2 from "../../../assets/opinion2.jfif";
import img3 from "../../../assets/opinion3.jpg";
import "./OpinionsOfCustomers.css";


const OpinionsOfCustomers = () => {
    const introOfOpinion = [
        "WHAT THEY'VE SAID",
        "The Big Oxmox advised her not to do so, because there were thousands of bad Commas, wild Question Marks and devious Semikoli."
    ];
    const dataOfIntroOfOpinion = [
        {
            image: img1,
            opinion: "“Our task must be to free ourselves by widening our circle of compassion to embrace all living creatures and the whole of nature and its beauty.”",
            name1: "MICHAEL P. HOWLETT -",
            name2: "Worcester"
        },
        {
            image: img2,
            opinion: "“I've learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.”",
            name1: "THERESA D. SINCLAIR -",
            name2: "Lynchburg"
        },
        {
            image: img3,
            opinion: "“I feel confident imposing change on myself. It's a lot more fun progressing than looking back. That's why I need to throw curve balls.”",
            name1: "RUBEN REED - ",
            name2: "Charleston"
        }
    ]

    const opinions = dataOfIntroOfOpinion.map( (el , id) => {
        return (
            <div key={id} className="oneOpinion">
                <div className="rect">
                    <img className="imageCustomer" src={el.image}  alt="" />
                    <p className="opinion">{el.opinion}</p>
                </div>
                <div className="nameCustomer">{el.name1} <span>{el.name2}</span> </div>
            </div>
        )
    });

    return ( 
        <Fragment>
            <Intro titleIntro={introOfOpinion[0]} paragraphIntro={introOfOpinion[1]} />
            <div className="opinions"> {opinions} </div>
        </Fragment>
     );
}
 
export default OpinionsOfCustomers;