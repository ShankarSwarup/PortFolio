import React from 'react'

export const Footer = () => {
    return (
        <footer className="footer">
        <div className="row">
            <div className="col">
                <h3>Links <div className="underline"><span></span></div></h3>
                <ul className="foot">
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#skills">Skills</a></li>
                    <li><a href="#services">Services</a></li>
                    <li><a href="#portfolio">Portfolio</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </div>
            <div className="col">
                <h3>Mail <div className="underline"><span></span></div></h3>
                <form action="">
                    <i className="uil uil-envelope"></i>
                    <input type="email"  id="em" required />
                    <button type="submit"><i className="uil uil-arrow-right"></i></button>
                </form>
                <h3>Social-icons <div className="underline"><span></span></div></h3>
                <div className="social-icons">
                    <i className="uil uil-facebook-f"></i>
                    <i className="uil uil-twitter"></i>
                    <i className="uil uil-whatsapp"></i>
                    <i className="uil uil-instagram"></i>
                </div>
            </div>
        </div>
        <hr/> 
            <p className="copyright">ShankarSwarup 2021 - All Rights Reserved</p>
    </footer>
    )
}
