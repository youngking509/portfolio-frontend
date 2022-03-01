import React from "react";


function Contact() {
    return (
        <div>
            <div className="contact-form">
                <h1>Contact Me</h1>
                <fieldset className="contact-fieldset">
                    <legend className="contact-legend">Your Name</legend>
                    <input type="name" placeholder='"Jimmy John"' className="contact-input" />
                </fieldset>
                <fieldset className="contact-fieldset">
                    <legend className="contact-legend">Your Email</legend>
                    <input type="email" placeholder='"@email.com"' className="contact-input" /> <br />
                </fieldset>
                <fieldset className="contact-fieldset">
                <legend className="contact-legend">Your message</legend>
                <textarea name="" id="" cols="30" rows="10" placeholder="Say Hello!" className="contact-textarea"></textarea>
                </fieldset>
                <button type="submit" className="create-update-btn">Send</button>
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