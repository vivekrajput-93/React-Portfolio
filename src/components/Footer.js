import React from 'react'
import LinkedInIcon from "@material-ui/icons/LinkedIn"
import GithubIcon from "@material-ui/icons/GitHub"
import FacebookIcon from "@material-ui/icons/Facebook"
import InstagramIcon from "@material-ui/icons/Instagram"
import "../styles/Footer.css";

function Footer() {
  return (
    <div className='footer'>
        <div className='socialMedia'>
            <LinkedInIcon />
            <GithubIcon />
            <FacebookIcon />
            <InstagramIcon />
        </div>
        <p> &copy; 2023 Viveksingh.com</p>
    </div>
  )
}

export default Footer