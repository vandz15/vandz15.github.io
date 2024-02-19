export default function Index() {
    return (
        <section id="contactus" className="contactus">
            <div className="container">
                <div className="section-title">
                    <h2>
                        Contact Us<span className="title-border-white"></span>
                    </h2>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-md-6 col-sm-12">
                        <div className="contact-form">
                            <form method="post" id="contact-form">
                                <div className="row">
                                    <div className="col-sm-6">
                                        <input
                                            className="con-field"
                                            name="name"
                                            id="name"
                                            required
                                            placeholder="Name"
                                            type="text"
                                        />
                                    </div>
                                    <div className="col-sm-6">
                                        <input
                                            className="con-field"
                                            name="messageForm"
                                            required
                                            id="messageForm"
                                            placeholder="Subject"
                                            type="text"
                                        />
                                    </div>
                                    <div className="col-sm-6">
                                        <input
                                            className="con-field"
                                            name="phone"
                                            required
                                            id="phone"
                                            placeholder="Phone"
                                            type="text"
                                        />
                                    </div>
                                    <div className="col-sm-6">
                                        <input
                                            className="con-field"
                                            name="email"
                                            required
                                            id="email"
                                            placeholder="Email"
                                            type="text"
                                        />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-sm-12">
                                        <textarea
                                            className="con-field"
                                            name="message"
                                            id="message"
                                            rows="6"
                                            placeholder="Your Message"
                                        ></textarea>
                                        <div className="submit-area">
                                            <button className="btn-one">
                                                Send Message
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="col-md-6 col-sm-12">
                        <div className="google-map">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.3281688500397!2d106.67744197446777!3d-6.220385293767611!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f980969e7c77%3A0xab0ca9146cb71ed1!2sZM%20Futsal!5e0!3m2!1sid!2sid!4v1708329630759!5m2!1sid!2sid"
                                allowFullScreen
                                loading="lazy"
                            ></iframe>
                            <div className="map-content">
                                <ul>
                                    <li>
                                        <i className="fa fa-home"></i>3567 New
                                        Alaska, United States
                                    </li>
                                    <li>
                                        <i className="fa fa-clock-o"></i>9.00 am
                                        - 5.00 pm
                                    </li>
                                    <li>
                                        <i className="fa fa-phone"></i>Phone :
                                        +012 345 6789{" "}
                                    </li>
                                    <li>
                                        <i className="fa fa-envelope"></i>Email
                                        : info@sbtechnosoft.com,
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
