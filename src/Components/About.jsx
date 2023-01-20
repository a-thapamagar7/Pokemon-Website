import { useNavigate } from "react-router-dom";
import aboutpoke from "../images/aboutpoke.png";
import aboutblog from "../images/blog.png";

const About = () => {

    return (
        <div className="bg bg1">
            <div className="aboutbg">
                <div className="aboutheading"><img className="aboutpoke" src={aboutpoke} />About Website</div>
                <div className="author">
                    <div className="authorname">Ayush Thapa Magar</div>
                    <div className="authordate">12th October 2022</div>
                </div>
                <img className="aboutblog" src={aboutblog} />
                <div className="aboutdescription">
                    The website is like a pokedex for First generation of Pokemons. There is information about 151 pokemon
                    which are fully extracted from the different APIs
                    <div className="apis">
                        <h4>API</h4>
                        "https://pokeapi.co/api/v2/pokemon?limit=151"<br/>
                        "https://courses.cs.washington.edu/courses/cse154/webservices/pokedex/pokedex.php?pokemon="
                        <br/>
                        <span>
                            Note - The name of the pokemon was added after the "pokemon=" to get the details about the pokemon
                        </span>
                        <h4>For Images</h4>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;