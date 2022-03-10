import { Link } from "react-router-dom";

import pdf from '../pdf/Kinzy Valcourt - RESUME .docx.pdf'

function About() {
    return (
        <div>
            <div class="about">
                <h1>Hello<span>!</span></h1>
                <h2>Here's who I am ... what I do</h2>
                <div class="about-btns">
                    <a href= {pdf} class="btn btn-secondary btn-lg" role="button" aria-disabled="true" target="_blank">Resume</a>
                    <a href="https://github.com/youngking509" class="btn btn-secondary btn-lg" role="button" aria-disabled="true" target="_blank">Git hub</a>
                </div>

                <div class="about-para">
                    <p>
                    A young software enthusiast who is eager to learn and go above and beyond to solve any problems, with my technical and soft skills, I am well capable of facing any challenges.

                    I can say I have the ability to be adaptable, compassionate and open-minded. From my experience with owning my own business I have gained the ability to be disciplined, reliable and patient, which are skills that are vital to be successful in the tech industry.

                    </p>
                </div>
                {/* <div class="credit">Made with <span style="color:tomato">❤</span> by <a href="https://www.learningrobo.com/">Learning Robo</a></div> */}
            </div>
        </div>


    );
}

export default About;