import React from 'react'

export const Qualify = () => {
    return (
        <section className="qualification section">
            <h2 className="section__title">Qualification</h2>
            <span className="section__subtitle">My personal journey</span>

            <div className="qualification__container container">
                <div className="qualification__tabs">
                    <div className="qualification__button button--flex qualification__active" data-target='#education'>
                        <i className="uil uil-graduation-cap  qualification__icon"></i>
                        Education
                    </div>

                    <div className="qualification__button button--flex" data-target='#work'>
                        <i className="uil uil-briefcase-alt qualification__icon"></i>
                        Work
                    </div>
                </div>
                <div className="qualification__sections">
                    <div className="qualification__content qualification__active" data-content id="education">
                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">Computer Engineer</h3>
                                <span className="qualification__subtitle">Vignan's institute of information and
                                    technology</span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt"></i>
                                    2019 - 2023
                                </div>
                            </div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div></div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>


                            <div>
                                <h3 className="qualification__title">Intermediate</h3>
                                <span className="qualification__subtitle">Sri Chaitanya Junior College</span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt"></i>
                                    2017 - 2019
                                </div>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">10th Standard</h3>
                                <span className="qualification__subtitle">Bhashyam Public School</span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt"></i>
                                    2017
                                </div>
                            </div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div></div>

                            <div>
                                <span className="qualification__rounder"></span>
                                {/* <!-- <span className="qualification__line"></span> --> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    )
}
