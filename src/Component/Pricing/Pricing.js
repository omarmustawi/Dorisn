import Intro from "../Intro/Intro";
import BoxPricing from "./BoxPricing";
import infoPrice from "./infoPrice";
import {motion} from "framer-motion";
import { useRef, useState , useEffect } from "react";

const Pricing = () => {
    const [width , setWidth] = useState(0);
    const carouselRef = useRef();
    useEffect(() => {
        console.log(carouselRef.current.scrollWidth);
        console.log(carouselRef.current.offsetWidth);
        setWidth(carouselRef.current.scrollWidth - carouselRef.current.offsetWidth);

    }, []);
    const boxPrice = infoPrice.map( (el , index) => (
        <BoxPricing 
            key={index}
            title={el.title}
            price={el.price} 
            time={el.time} 
            Bandwidth={el.Bandwidth} 
            Onlinespace={el.Onlinespace} 
            Support={el.Support} 
            Domain={el.Domain} 
            HiddenFees={el.HiddenFees} />
            )
    )

    const dataIntroOfPricing = [
        "OUR PRICING",
        "Call to action pricing table is really crucial to your for your business website. Make your bids stand-out with amazing options."
    ];
    return (
        <div className="pricing">
            <Intro titleIntro={dataIntroOfPricing[0]} paragraphIntro={dataIntroOfPricing[1]} />
            {/* <h5>OUR SERVICES</h5>
            <div className="line"></div>
            <p>We craft digital, graphic and dimensional thinking, to create category leading brand experiences that have meaning and add a value for our clients.</p> */}
            {/* <div className="parent"> {boxPrice} </div> */}
            <motion.div ref={carouselRef} className="carousel">
                <motion.div drag="x" dragConstraints={{right: 550 , left: -(width+50)}} className="inner-carousel parent">
                {boxPrice}
                </motion.div>
            </motion.div>
        </div>
    );
}

export default Pricing;