import { useNavigate } from "react-router-dom";
import Searchbar from "./Searchbar";


const NavBar = ({ Inputgain }) => {
    const navigate = useNavigate()

    return (
        <nav className="navbar navbar-expand-sm bg-danger">
            <div className="navbar-brand"></div>
            <button className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarCollapse">
                <ul className="navbar-nav">
                    <li className="navbar-item" onClick={() => navigate("/Pokemon-Website/")}>Home</li>
                    <li className="navbar-item" onClick={() => navigate("/form")}>Form</li>
                    <li className="navbar-item" onClick={() => navigate("/about")}>About</li>
                    <li className="navbar-item">Contact</li>
                    <li className="navbar-item"><Searchbar Inputgain={Inputgain} /></li>
                </ul>
            </div>
        </nav>
    )
}

export default NavBar;