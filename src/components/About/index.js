import React from 'react'; //Imports the use of react
import Image from '../../assets/Church_Kyle_Headshot.jpg';
function About() {
    return (
        <section className="my-5">
            <h1 id="about">About Me</h1>
            <image src={Image} className="my-2" style={{ width: "100%" }} alt="cover image" />
            <div className="my-2">
                <p>
                    Hello, my name is Kyle Church. I currently work in the Information Technology space 
                    as an Assistant Instructor for Computer and Information Technology at Ball State University. 
                    I teach courses focused around buidling, configuring, and maintaining networks, computer repair
                    and troubleshooting, Windows Server, and Linux. I have always loved working with technology, and 
                    I decided to pursue a Full Stack Development bootcamp to learn new skills, as programming is becoming
                    increasingly important in the IT space. It has been a hard but worthwhile experience, as I have learned 
                    more about website development and how complex it can be. I am looking forward to gaining more experience 
                    and learning all I can about technology. 
                </p>
            </div>
        </section>
    );
}

export default About;