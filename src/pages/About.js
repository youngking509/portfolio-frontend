import { Link } from "react-router-dom";


function About() {
    return (
        <div>
            <div class="about">
                <h1>Hello<span>!</span></h1>
                <h2>Here's who I am ... what I do</h2>
                <div class="about-btns">
                    <button type="button" class="btn btn-pink">resume / CV</button>
                    <button type="button" class="btn btn-white">Git hub</button>
                </div>

                <div class="about-para">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, aspernatur possimus ullam quaerat, laboriosam ex voluptate aliquid laborum, obcaecati ratione accusamus! Ea nisi modi dolor nam numquam? Temporibus, molestias amet.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus iure tempora alias laudantium sapiente impedit!</p>
                </div>
                {/* <div class="credit">Made with <span style="color:tomato">❤</span> by <a href="https://www.learningrobo.com/">Learning Robo</a></div> */}
            </div>
        </div>


    );
}

export default About;