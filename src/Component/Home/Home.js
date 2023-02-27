import Header from "./Header"
// import Navs from "../Nav/Navs";
import Navbar from "../Navbar/Navbar";
import { Fragment } from "react";
function Home() {
    // props for home in component "header"
    const sentence1 = "We help startups launch their \n products";
    const paragraph1 = "Etiam sed.Interdum consequat proin vestibulum class at."
    const Email = () => {
        return (
            <form>
                <input type="email" placeholder="Email" />
                <button type="submit">subscribe</button>
            </form>
        )
    }
    const ClassName =  "backgroundImage1";

    // --------------------the end of props---------------------------------//
    // const sentence2 = "Etiam sed.Interdum consequat proin vestibulum class at.";
    return (
        <Fragment>
            {/* <Navs /> */}
            <Navbar />
            <Header sentence={sentence1} paragraph={paragraph1} Element={Email()} ClassName={ClassName}/>
        </Fragment>
    )
}

export default Home;