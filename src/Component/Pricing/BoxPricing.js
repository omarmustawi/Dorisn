import "./BoxPricing.css";
const BoxPricing = (props) => {
    return ( 
        <div className="boxPrice" >
            <div className="BorderBottom">
                <h6>{props.title}</h6>
                <h3>{props.price}</h3>
                <p>{props.time}</p>
            </div>
            <div>
                <div>Bandwidth: <span> {props.Bandwidth} </span> </div>
                <div>Onlinespace: <span> {props.Onlinespace} </span>  </div>
                <div>Support: <span> {props.Support} </span> </div>
                <div>Domain: <span> {props.Domain} </span> </div>
                <div>Hidden Fees: <span> {props.HiddenFees} </span> </div>
                <button className="Button" >Join Now</button>
            </div>
        </div>
     );
}

 
export default BoxPricing;