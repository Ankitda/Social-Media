import React from 'react'
import { FaFacebook, FaLinkedin } from "react-icons/fa";
import { ImGithub } from "react-icons/im";

const Footer = () => {
    return (
        <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
            <div className="col-md-4 d-flex align-items-center" style={{marginLeft : "30px"}}>
                <span className="mb-3 mb-md-0 text-body-secondary">© 2023 SocialMedia, Inc</span>
            </div>

            <ul className="nav col-md-4 list-unstyled d-flex footer-logo-list">
                <li className="ms-3 logo"><a href="https://www.facebook.com/profile.php?id=100003037427029" target='_blank'><FaFacebook /></a></li>
                <li className="ms-3 logo"><a href="https://www.linkedin.com/in/ankit-das-358a96247/" target='_blank'><FaLinkedin /></a></li>
                <li className="ms-3 logo"><a href="https://github.com/Ankitda" target='_blank'><ImGithub /></a></li>
            </ul>
        </footer>
    )
}

export default Footer