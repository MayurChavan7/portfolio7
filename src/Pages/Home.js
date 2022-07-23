import React from "react";
import "../styles/Home.css";
import Mayur from "../assets/Mayur.jpeg";
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
                  src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg"
                  alt="html5"
                  width="40"
                  height="40"
                />
                <img
                  className="photo"
                  src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg"
                  alt="css3"
                  width="40"
                  height="40"
                />
                <img
                  className="photo"
                  src="https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-plain-wordmark.svg"
                  alt="bootstrap"
                  width="40"
                  height="40"
                />
                <img
                  className="photo"
                  src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg"
                  alt="react"
                  width="40"
                  height="40"
                />
              </li>
              <li className="item">
                <h3 className="heading">Back-End</h3>
                <img
                  className="photo"
                  src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg"
                  alt="nodejs"
                  width="40"
                  height="40"
                />
                <img
                  className="photo"
                  src="https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original-wordmark.svg"
                  alt="express"
                  width="40"
                  height="40"
                />
              </li>
              <li className="item">
                <h3 className="heading">DataBase</h3>

                <img
                  className="photo"
                  src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg"
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
                  src="https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg"
                  alt="java"
                  width="40"
                  height="40"
                />
                <img
                  className="photo"
                  src="https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg"
                  alt="python"
                  width="40"
                  height="40"
                />

                <img
                  className="photo"
                  src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg"
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
              <li className="item">
            
                <h3 className="heading">Others</h3>
                <img 
                  className="photo"
                  src="https://previews.123rf.com/images/essaphear/essaphear1709/essaphear170900001/86808937-data-science-logo-icon-design-vector.jpg"
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
