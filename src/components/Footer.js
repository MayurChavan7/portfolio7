import React from "react";
import InstagramIcon from "@material-ui/icons/Instagram";
import EmailIcon from "@material-ui/icons/Email";
import GitHub from "@material-ui/icons/GitHub";
import {  Link } from '@mui/material';
import "../styles/Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
          <Link
            href="https://www.instagram.com/_mayur._.25/"
            color="inherit"
            target="_blank"
          >
            <InstagramIcon />
          </Link>
          <Link
            href="https://github.com/MayurChavan7"
            color="inherit"
            target="_blank"
          >
              <GitHub/>
          </Link>

      
          <Link
            href="mailto:msrcp07@gmail.com?Subject=This is a subject"
            color="inherit"
            target="_blank"
          >
              <EmailIcon />
          </Link>
      </div>
      <p>&copy;Copyright,2022|Mayur Chavan</p>
    </div>
  );
}

export default Footer;
