import React from "react"

export default function Main(){
    return (
        <div className="main-container">
            <h1 className="name">Niran Amalore</h1>
            <h3 className="description">Frontend Developer</h3>
            <div className="button-container">
                <a className="email-link" href="https://mail.google.com/mail/u/0/#inbox" target="_blank">
                    <button className="email-btn">
                        <i class="fa-solid fa-envelope"></i>
                        <p>Email</p>
                    </button>
                </a>
                <a className="linkedIn-link" href="https://www.linkedin.com/in/niran-amalore-b7b306160/" target="_blank">
                    <button className="linkedIn-btn">
                        <i class="fa-brands fa-linkedin"></i>
                        <p>LinkedIn</p>
                    </button>
                </a>
            </div>
            <div className="about-section">
                <h2 className="about">About</h2>
                <p className="about-description">I'm an autodidact diving into the world of full-stack development. I've built a solid foundation in HTML, CSS, and JavaScript, and I'm currently expanding my skills by learning React.</p>
                <h2 className="interests">Interests</h2>
                <p className="interests-description">Cycling. Reader. Versatile Gamer. Knowledge seeker</p>
            </div>
        </div>
    )
}   