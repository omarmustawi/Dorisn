import Intro from "../Intro/Intro";
import dataOfBlog from "./dataOfBlog";
import "../Services/Services";
import "./Blog.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  faArrowRight } from "@fortawesome/free-solid-svg-icons";

const Blog = () => {
    const introOfBlog = [
        "BLOG",
        "Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean class at a euismod mus luctus quam."
    ] ;

    const dataBlog = dataOfBlog.map( (el , id ) => (
        <div className="oneDataBlog" key={id}>
             <img src={el.image} alt="" />
             <div className="job"> {el.job} </div>
             <div className="title"> {el.title} </div>
             <p> {el.description} </p>
             <button className="Button" type="submit">Read More <FontAwesomeIcon icon={faArrowRight} /> </button>   </div>
        ) );

    return ( 
        <div className="blog">
            <Intro titleIntro={introOfBlog[0]} paragraphIntro={introOfBlog[1]} />
            {/* <Intro 
            titleIntro={"BLOG"} 
            paragraphIntro={"Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean class at a euismod mus luctus quam."} 
            /> */}
            <div className="allBlogs">{dataBlog}</div>

        </div>
     );
}
 
export default Blog;