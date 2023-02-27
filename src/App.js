// import React from "react";
import { Fragment } from "react";
import Home from "./Component/Home/Home";
import Services from "./Component/Services/Services";
import Header from "./Component/Home/Header";
import "./App.css";
import Pricing from"./Component/Pricing/Pricing";
import Team from "./Component/Team/Team";
import Blog from "./Component/Blog/Blog";
import Contact from "./Component/Contact/Contact";
import Footer from "./Component/Footer/Footer";

function App() {
    const sentence2 = "Build your dream website today";
    const paragraph2 = "But nothing the copy said could convince her and so it didn’t take long until \n a few insidious Copy Writers ambushed her."
    const wideButton = () => ( <button className="wideButton">View Plan & pricing</button>)
    const ClassName = "backgroundImage2";
    return (
        <Fragment>
            <Home />
            <Services />
            <div id="about-us" className="middle">
                <Header sentence={sentence2} paragraph={paragraph2} Element={wideButton()} ClassName={ClassName}/> 
            </div>
            {/* style this Header' wideButton in app.css */}
            <Pricing />
            <Team />
            <Blog className="blog" />
            <Contact />
            <br />
            <Footer />
        </Fragment>

    );
}

export default App;