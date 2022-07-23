import React from "react";
import { Link,useLocation } from "react-router-dom";
import "../styles/Navbar.css"
import { useState, useEffect} from "react";
import ReorderIcon from "@material-ui/icons/Reorder";

function Navbar() {
  const location=useLocation();
   useEffect(()=>{
    setExpandNavbar(false);
   },[location])
  const [expandNavbar,setExpandNavbar]=useState(false)
  
  return (
    <>
      <div className="navbar" id={expandNavbar ? "open":"close"}>
        <div className="toggleButton">
          <button
           onClick={()=>{
            setExpandNavbar((prev=>!prev));
          }}>
            <ReorderIcon/>
          </button>
        </div>
        <div className="links">
          <Link to="/">Home</Link>
          <Link to="/Projects">Projects</Link>
          <Link to="/Experience">Experience</Link>
        </div>
      </div>
    </>
  );
}

export default Navbar;
