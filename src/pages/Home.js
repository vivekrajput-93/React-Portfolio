import React from "react";
import LinkedInIcon from "@material-ui/icons/LinkedIn"
import GithubIcon from "@material-ui/icons/GitHub"
import EmailIcon from "@material-ui/icons/Email"
import "../styles/Home.css";

function Home() {
  return (
    <div className="home">
      <div className="about">
        <h2>Hey, I am Vivek Singh</h2>
        <div className="prompt">
          <p>A Reactjs Developer with a passion for learning and Coding</p>
          <LinkedInIcon />
          <GithubIcon />
          <EmailIcon />
        </div>
      </div>
      <div className="skills">
        <h1>Skills</h1>
        <ol className="list">
          <li className="item">
            <h2>Front-end</h2>
            <span>HTML5, CSS3, ReactJS, Bootstrap, Redux, NPM, MaterialUI</span>
          </li>
          <li className="item">
            <h2>Back-end</h2>
            <span>NodeJS, API's, MySQL, Firebase, MongoDB</span>
          </li>
          <li className="item">
            <h2>Languages</h2>
            <span>C++, JavaScript, Typescript, Java, Python</span>
          </li>
        </ol>
      </div>
    </div>
  );
}

export default Home;
