import React, { Fragment } from "react";

export default function Index() {
    return (
        <section className="numbering-wrapper">
            <div className="container">
                <div className="row">
                    <div
                        className="col-sm-12 col-md-6"
                        data-aos="slide-right"
                        data-aos-delay="0"
                    >
                        <div className="number-services">
                            <h3>
                                <span className="size">6</span>
                                <span className="total-text">
                                    <span className="text">Tahun </span>
                                    <span className="big-text">Pengalaman</span>
                                </span>
                            </h3>
                            <p className="line">
                                Lorem ipsum ipsum ipsum dolor sit amet,
                                adipiscing. Lorem ipsum dolor sit amet,
                                consectetuer adipiscing. Lorem ipsum ipsum ipsum
                                dolor sit em amet, consectetuer adipiscing.
                            </p>
                            <div className="row">
                                <div className="col-sm-4">
                                    <div className="single-section">
                                        <i
                                            className="fa fa-lightbulb-o"
                                            aria-hidden="true"
                                        ></i>
                                        <h3>Certification</h3>
                                        <p>
                                            Lorem ipsum ipsuiscing. Lorem
                                            ipsuipsum adipiscing.
                                        </p>
                                    </div>
                                </div>
                                <div className="col-sm-4">
                                    <div className="single-section">
                                        <i
                                            className="fa fa-lightbulb-o"
                                            aria-hidden="true"
                                        ></i>
                                        <h3>24/7 Service</h3>
                                        <p>
                                            Lorem ipsum ipsuiscing. Lorem
                                            ipsuipsum adipiscing.
                                        </p>
                                    </div>
                                </div>
                                <div className="col-sm-4">
                                    <div className="single-section">
                                        <i
                                            className="fa fa-lightbulb-o"
                                            aria-hidden="true"
                                        ></i>
                                        <h3>Fair Price</h3>
                                        <p>
                                            Lorem ipsum ipsuiscing. Lorem
                                            ipsuipsum adipiscing.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div
                        className="col-sm-12 col-md-6"
                        data-aos="slide-left"
                        data-aos-delay="0"
                    >
                        <div className="row">
                            <div className="col-sm-12">
                                <div className="section-title">
                                    <h3>Area Layanan</h3>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-4">
                                <div className="counter">
                                    <div className="icon">
                                        <span className="lnr lnr-location"></span>
                                    </div>
                                    <div
                                        className="number animateNumber"
                                        data-num="999"
                                    >
                                        {" "}
                                        <span>Jakarta</span>
                                    </div>
                                    {/* <p>Workers Employed</p> */}
                                </div>
                            </div>
                            <div className="col-sm-4">
                                <div className="counter">
                                    <div className="icon">
                                        <span className="lnr lnr-location"></span>
                                    </div>
                                    <div
                                        className="number animateNumber"
                                        data-num="7200"
                                    >
                                        {" "}
                                        <span>Bogor</span>
                                    </div>
                                    {/* <p>Hours Worked</p> */}
                                </div>
                            </div>
                            <div className="col-sm-4">
                                <div className="counter">
                                    <div className="icon">
                                        <span className="lnr lnr-location"></span>
                                    </div>
                                    <div
                                        className="number animateNumber"
                                        data-num="7200"
                                    >
                                        {" "}
                                        <span>Depok</span>
                                    </div>
                                    {/* <p>Hours Worked</p> */}
                                </div>
                            </div>
                        </div>
                        <div className="d-flex justify-content-center row">
                            <div className="col-sm-4">
                                <div className="counter">
                                    <div className="icon">
                                        <span className="lnr lnr-location"></span>
                                    </div>
                                    <div
                                        className="number animateNumber"
                                        data-num="1057"
                                    >
                                        {" "}
                                        <span>Bekasi</span>
                                    </div>
                                    {/* <p>Awards Won</p> */}
                                </div>
                            </div>
                            <div className="col-sm-4">
                                <div className="counter">
                                    <div className="icon">
                                        <span className="lnr lnr-location"></span>
                                    </div>
                                    <div
                                        className="number animateNumber"
                                        data-num="9999"
                                    >
                                        {" "}
                                        <span>Tangerang</span>
                                    </div>
                                    {/* <p>Projects Completed</p> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
