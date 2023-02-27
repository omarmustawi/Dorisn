import Intro from "../Intro/Intro";
import "./Contact.css";

const introOfContact = [
    "GET IN TOUCH",
    "We thrive when coming up with innovative ideas but also understand that a smart concept should be supported with measurable results."
];
const Contact = () => {
    return ( 
        <div className="contact" style={{ transitionDelay: "3s" , scrollBehavior: "smooth"}} id="contact">
            <Intro titleIntro={introOfContact[0]} paragraphIntro={introOfContact[1]} />
            <div className="all" >
                <div className="adresses">
                    <div>Office Address 1:</div>
                    <p>4461 Cedar Street Moro, AR 72368</p>
                    <div>Office Address 2:</div>
                    <p>2467 Swick Hill Street <br /> New Orleans, LA 70171</p>
                    <div>Working Hours:</div>
                    <p>9:00AM To 6:00PM</p>
                </div>
                <div className="sending">
                    <input style={{marginRight: "calc(2%)" }} className="half" type="text" placeholder="Your name*" />
                    <input className="half" type="email" placeholder="Your email*" />
                    <input type="text" placeholder="Your subject..." />
                    <textarea style={{height: "100px" , padding: "10px "}} type="text" placeholder="Your message" />
                    <button className="submit" type="submit">Send Message</button>
                </div>
            </div>

        </div>
     );
}
 
export default Contact;