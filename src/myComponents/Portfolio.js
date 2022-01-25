import React from 'react'

export const Portfolio = () => {
    return (
        <section className="portfolio section" id="portfolio">
        <h2 className="section__title">Portfolio</h2>
        <span className="section__subtitle">Most recent Work</span>

        <div className="portfolio__container container swiper-container">
            <div className="swiper-wrapper">
                <div className="portfolio__container grid swiper-slide">
                    <img src="assets/img/blog.png" alt="" className="portfolio__img"/>

                    <div className="portfolio__data">
                        <h3 className="portfolio__title">Shan Blog</h3>
                        <p className="portfolio__description">This is a simple Blog Application using django.</p>
                        <a href="http://shankarswarup.pythonanywhere.com/" className="button button--flex button--small portfolio__button">
                            Demo
                            <i className="uil uil-arrow-right button__icon"></i>
                        </a>
                    </div>
                </div>

                <div className="portfolio__container grid swiper-slide">
                    <img src="assets/img/medical.png" alt="" className="portfolio__img"/>

                    <div className="portfolio__data">
                        <h3 className="portfolio__title">Medical Website</h3>
                        <p className="portfolio__description">This website helps us to book an online appointment to doctor.</p>
                        <a href="https://shankarswarup.github.io/Medical_Website/" className="button button--flex button--small portfolio__button">
                            Demo
                            <i className="uil uil-arrow-right button__icon"></i>
                        </a>
                    </div>
                </div>

                <div className="portfolio__container grid swiper-slide">
                    <img src="assets/img/hotel.png" alt="" className="portfolio__img"/>

                    <div className="portfolio__data">
                        <h3 className="portfolio__title">Hotel Website</h3>
                        <p className="portfolio__description">This Website is a simple hotel static website.</p>
                        <a href="https://shankarswarup.github.io/Sample_hotel_website/" className="button button--flex button--small portfolio__button">
                            Demo
                            <i className="uil uil-arrow-right button__icon"></i>
                        </a>
                    </div>
                </div>
            </div>

            <div className="swiper-button-next">
                <i className="uil uil-angle-right swiper-portfolio-icon"></i>
            </div>
            <div className="swiper-button-prev">
                <i className="uil uil-angle-left swiper-portfolio-icon"></i>
            </div>


            <div className="swiper-pagination">

            </div>
        </div>
    </section>
    )
}
