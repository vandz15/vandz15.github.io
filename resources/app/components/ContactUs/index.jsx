export default function Index() {
    return (
        <section id="contactus" className="contactus">
            <div className="container">
                <div className="section-title">
                    <h2>
                        Kontak Kami<span className="title-border-white"></span>
                    </h2>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div
                        className="col-md-6 col-sm-12"
                        data-aos="slide-right"
                        data-aos-delay="0"
                    >
                        <div className="contact-form">
                            <form method="post" id="contact-form">
                                <div className="row">
                                    <div className="col-sm-6">
                                        <input
                                            className="con-field"
                                            name="name"
                                            id="name"
                                            required
                                            placeholder="Nama"
                                            type="text"
                                            autoComplete="off"
                                        />
                                    </div>
                                    <div className="col-sm-6">
                                        <input
                                            className="con-field"
                                            name="messageForm"
                                            required
                                            id="messageForm"
                                            placeholder="Subjek"
                                            type="text"
                                            autoComplete="off"
                                        />
                                    </div>
                                    <div className="col-sm-6">
                                        <input
                                            className="con-field"
                                            name="phone"
                                            required
                                            id="phone"
                                            placeholder="No Hp"
                                            type="tel"
                                            autoComplete="off"
                                        />
                                    </div>
                                    <div className="col-sm-6">
                                        <input
                                            className="con-field"
                                            name="email"
                                            required
                                            id="email"
                                            placeholder="Email"
                                            type="email"
                                            autoComplete="off"
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
                                            placeholder="Pesan Anda"
                                            required
                                            autoComplete="off"
                                        ></textarea>
                                        <div className="submit-area">
                                            <button className="btn-one">
                                                Kirim Pesan
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div
                        className="col-md-6 col-sm-12"
                        data-aos="slide-left"
                        data-aos-delay="0"
                    >
                        <div className="google-map">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.3281688500397!2d106.67744197446777!3d-6.220385293767611!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f980969e7c77%3A0xab0ca9146cb71ed1!2sZM%20Futsal!5e0!3m2!1sid!2sid!4v1708329630759!5m2!1sid!2sid"
                                allowFullScreen
                                loading="lazy"
                            ></iframe>
                            <div className="map-content">
                                <ul>
                                    <li>
                                        <i className="fa fa-home"></i>12345
                                        Graha Raya, Tangerang
                                    </li>
                                    <li>
                                        <i className="fa fa-clock-o"></i>24/7
                                        Layanan
                                    </li>
                                    <li>
                                        <i className="fa fa-phone"></i>Telepon :{" "}
                                        <a href="tel:+6281228883616">
                                            081228883616
                                        </a>{" "}
                                    </li>
                                    <li>
                                        <i className="fa fa-whatsapp"></i>
                                        Whatsapp :{" "}
                                        <a
                                            href="https://wa.me/6281228883616/?text=Hi%2C%20Saya%20memerlukan%20bantuan%20untuk%20pemeliharaan%20listrik%20simetric.com"
                                            target="_blank"
                                        >
                                            081228883616
                                        </a>{" "}
                                    </li>
                                    <li>
                                        <i className="fa fa-envelope"></i>Email
                                        :{" "}
                                        <a href="mailto:sales@simetric.com">
                                            sales@simetric.com
                                        </a>
                                        ,
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
