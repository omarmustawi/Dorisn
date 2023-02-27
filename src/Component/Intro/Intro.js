import "./Intro.css";
const Intro = (props) => {
    return (
        <div className="intro">
            <h5>{props.titleIntro}</h5>
            <div className="line"></div>
            <p>{props.paragraphIntro}</p>
        </div> 
    
     );
}
 
export default Intro;