import {Link, useLocation} from "react-router-dom";
import '../styles/Navbar.css';
import Reorder from '@mui/icons-material/Reorder';
import { useEffect, useState } from "react";

function Navbar() {

    const [expandNavBar, setExpandNavBar] = useState(false); // Using State to control the navbar on mobile device. Allows to chose a page

    const location = useLocation();

    useEffect(()=>{
        setExpandNavBar(false);
    },[location])

    return(
        <div className="navbar"id={expandNavBar ? "open" : "close"}>
            <div className="toggleButton">
                <button onClick={()=>{setExpandNavBar((prev)=> !prev)}}> <Reorder/> </button>
            </div>
            <div className="links">
                <Link to={'/my-portfolio'}> Home </Link>
                <Link to={'/projects'}> Projects </Link>
                <Link to={'/experience'}> Experience </Link>
            </div>
        </div>
    )
}

export default Navbar