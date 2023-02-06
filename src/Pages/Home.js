import React from "react";
import "../styles/Home.css";
import Mayur from "../assets/mayur77.png";
import html from "../assets/html.png"
import css from "../assets/css.png"
import bootstrap from "../assets/Bootstrap.png"
import react from "../assets/react.png"
import java from "../assets/java.png"
import node from "../assets/node.png"
import express from "../assets/express.png"
import mongo from "../assets/mongo.jpeg"
import python from "../assets/python.jpeg"
import js from "../assets/js.png"
function Home() {
  return (
    <>
      <div className="home">
        <div className="about">
          <h2>
            Hello, I am <span className="m">Mayur</span>{" "}
          </h2>
          <div className="promt">
            <p>
              A <span className="m1">Web Developer</span> with a passion for
              learning and creating.
            </p>
          </div>
          <div className="mayur">
            <img src={Mayur} alt="mayur" />
            <span className="text">
              I am a final year Electronics Engineering student at{" "}
              <span className="m1">VJTI</span>,Mumbai.I have experience in Web
              Development.Currently, I am improving my MERN Developement skills.
            </span>
          </div>
        </div>
        <section className="divide">
          <div className="skills">
            <h1 className="sk">Skills</h1>
            <ol className="list">
              <li className="item">
                <h3 className="heading">Front-End</h3>
                <img 
                  className="photo"
                  src={html}
                  alt="html5"
                  width="40"
                  height="40"
                />
                <img
                  className="photo"
                  src={css}
                  alt="css3"
                  width="40"
                  height="40"
                />
                <img
                  className="photo"
                  src={bootstrap}
                  alt="bootstrap"
                  width="40"
                  height="40"
                />
                <img
                  className="photo"
                  src={react}
                  alt="react"
                  width="40"
                  height="40"
                />
              </li>
              <li className="item">
                <h3 className="heading">Back-End</h3>
                <img
                  className="photo"
                  src={node}
                  alt="nodejs"
                  width="40"
                  height="40"
                />
                <img
                  className="photo"
                  src={express}
                  alt="express"
                  width="40"
                  height="40"
                />
              </li>
              <li className="item">
                <h3 className="heading">DataBase</h3>

                <img
                  className="photo"
                  src={mongo}
                  alt="mongodb"
                  width="40"
                  height="40"
                />
              </li>
            </ol>
          </div>
          <div className=" skills">
            <ol className="list">
              <li className="item">
                <h3 className="heading">Languages</h3>
                <img
                  className="photo"
                  src={java}
                  alt="java"
                  width="40"
                  height="40"
                />
                <img
                  className="photo"
                  src={python}
                  alt="python"
                  width="40"
                  height="40"
                />

                <img
                  className="photo"
                  src={js}
                  alt="javascript"
                  width="40"
                  height="40"
                />
              </li>
              <li className="item">
             
                <h3 className="heading">Development Tools</h3>
                <img 
                  className="photo"
                  src="https://static.cdnlogo.com/logos/v/82/visual-studio-code.svg"
                  alt="html5"
                  width="40"
                  height="40"
                />
                  <img 
                  className="photo"
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/PyCharm_Icon.svg/512px-PyCharm_Icon.svg.png"
                  alt="html5"
                  width="40"
                  height="40"
                />
               
              </li>
              
            </ol>
          </div>
        </section>
      </div>
    </>
  );
}

export default Home;
