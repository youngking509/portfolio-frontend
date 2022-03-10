import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faYoutube,
    faFacebook,
    faTwitter,
    faInstagram,
    faLinkedin,
    faGithub,
    faGoogle,
} from "@fortawesome/free-brands-svg-icons";

import pdf from '../pdf/Kinzy Valcourt - RESUME .docx.pdf'


function Contact() {
    return (
        <div>
            <div className="contact-form">
                <h1 className="connect">Let's Connect</h1>
                <fieldset className="contact-fieldset">
                    {/* <h3>@LearnBuildTeach</h3> */}
                    <a
                        href="https://www.linkedin.com/in/kingzy-valcourt/"
                        className="linkedin"
                    >
                        <FontAwesomeIcon icon={faLinkedin} size="4x" />
                    </a>
                    <a
                        href="https://github.com/youngking509"
                        className="github"
                    >
                        <FontAwesomeIcon icon={faGithub} size="4x" />
                    </a>

                    <a href= {pdf} class="btn btn-secondary btn-lg" role="button" aria-disabled="true" target="_blank">Resume</a>
                </fieldset>
            </div>


            {/* <div className="socials">
                <h3>Linkedin</h3>
                <h3>Github</h3>
                <h3>Resume</h3>
            </div> */}
            {/* <h3>My Info</h3>
            <div>
                <p>kingzyv14@gmail.com</p>
                <p>253-652-8279</p>
            </div> */}
        </div>

    );
}

export default Contact;