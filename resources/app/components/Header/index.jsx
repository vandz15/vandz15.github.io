export default function Index() {
    return (
        <header id="home" className="welcome-hero-area">
            <div className="header-top-area">
                <div className="container">
                    {/* <!-- START MAIN MENU --> */}
                    <nav className="navbar navbar-default">
                        {/* <!-- Brand and toggle get grouped for better mobile display --> */}
                        <div className="navbar-header">
                            <button
                                type="button"
                                className="navbar-toggle collapsed"
                                data-toggle="collapse"
                                data-target="#bs-example-navbar-collapse-1"
                                aria-expanded="false"
                            >
                                {" "}
                                <span className="sr-only">
                                    Toggle navigation
                                </span>{" "}
                                <span className="icon-bar"></span>{" "}
                                <span className="icon-bar"></span>{" "}
                                <span className="icon-bar"></span>{" "}
                            </button>
                            <a className="navbar-brand" href="#home">
                                <img src="assets/images/logo.png" alt="" />
                            </a>
                            {/* <!-- Logo --> */}
                        </div>
                        {/* <!-- Collect the nav links, forms, and other content for toggling --> */}
                        <div
                            className="collapse navbar-collapse"
                            id="bs-example-navbar-collapse-1"
                        >
                            <ul className="nav navbar-nav">
                                <li>
                                    <a className="smoth-scroll" href="#home">
                                        Beranda
                                    </a>
                                </li>
                                <li>
                                    <a className="smoth-scroll" href="#aboutus">
                                        Tentang Kami
                                    </a>
                                </li>
                                <li>
                                    <a className="smoth-scroll" href="#ourteam">
                                        Tim Kami
                                    </a>
                                </li>
                                <li>
                                    <a
                                        className="smoth-scroll"
                                        href="#services"
                                    >
                                        Layanan
                                    </a>
                                </li>
                                <li>
                                    <a
                                        className="smoth-scroll"
                                        href="#testimonials"
                                    >
                                        Testimonial
                                    </a>
                                </li>
                                <li>
                                    <a
                                        className="smoth-scroll"
                                        href="#ourgallery"
                                    >
                                        Galeri
                                    </a>
                                </li>
                                <li>
                                    <a
                                        className="smoth-scroll"
                                        href="#contactus"
                                    >
                                        Kontak Kami
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </nav>
                    {/* <!-- END MAIN MENU --> */}
                </div>
            </div>
            {/* <!-- Start Slider Area --> */}
            <div className="home-slider-area">
                <div
                    id="welcome-slide-carousel"
                    className="carousel slide carousel-fade"
                    data-ride="carousel"
                >
                    <ol className="carousel-indicators">
                        <li
                            data-target="#welcome-slide-carousel"
                            data-slide-to="0"
                            className="active"
                        ></li>
                        <li
                            data-target="#welcome-slide-carousel"
                            data-slide-to="1"
                        ></li>
                        <li
                            data-target="#welcome-slide-carousel"
                            data-slide-to="2"
                        ></li>
                    </ol>
                    <div className="carousel-inner" role="listbox">
                        {/* <!-- Start Single Slider Item --> */}
                        <div className="item active">
                            <div className="single-slide-item slide-1">
                                <div className="single-slide-item-table">
                                    <div className="single-slide-item-table-cell">
                                        <div className="container">
                                            <div className="row">
                                                <div className="col-md-12">
                                                    <h1>
                                                        Layanan{" "}
                                                        <span>Listrik</span>{" "}
                                                        Terbaik
                                                    </h1>
                                                    <p>
                                                        Kami Menyediakan Teknisi
                                                        Listrik Profesional
                                                        untuk daerah{" "}
                                                        <b className="text-theme">
                                                            JABODETABEK
                                                        </b>
                                                    </p>
                                                    <a
                                                        className="btn-one smoth-scroll"
                                                        href="https://wa.me/6281228883616/?text=Hi%2C%20Saya%20memerlukan%20bantuan%20untuk%20pemeliharaan%20listrik%20simetric.com"
                                                        target="_blank"
                                                    >
                                                        Whatsapp Kami
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <!-- End Single Slider Item--> */}
                        {/* <!-- Start Single Slider Item--> */}
                        <div className="item">
                            <div className="single-slide-item slide-2">
                                <div className="single-slide-item-table">
                                    <div className="single-slide-item-table-cell">
                                        <div className="container">
                                            <div className="row">
                                                <div className="col-md-12">
                                                    <h1>
                                                        Pasang{" "}
                                                        <span>Instalasi</span>{" "}
                                                        Baru
                                                    </h1>
                                                    <p>
                                                        Kami Menyediakan Teknisi
                                                        Listrik Profesional
                                                        untuk daerah{" "}
                                                        <b className="text-theme">
                                                            JABODETABEK
                                                        </b>
                                                    </p>
                                                    <a
                                                        className="btn-one smoth-scroll"
                                                        href="https://wa.me/6281228883616/?text=Hi%2C%20Saya%20memerlukan%20bantuan%20untuk%20pemeliharaan%20listrik%20simetric.com"
                                                        target="_blank"
                                                    >
                                                        Whatsapp Kami
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <!-- End Single Slider Item --> */}
                        {/* <!-- Start Single Slider Item--> */}
                        <div className="item">
                            <div className="single-slide-item slide-3">
                                <div className="single-slide-item-table">
                                    <div className="single-slide-item-table-cell">
                                        <div className="container">
                                            <div className="row">
                                                <div className="col-md-12">
                                                    <h1>
                                                        Instalasi{" "}
                                                        <span>Panel</span>
                                                    </h1>
                                                    <p>
                                                        Kami Menyediakan Teknisi
                                                        Listrik Profesional
                                                        untuk daerah{" "}
                                                        <b className="text-theme">
                                                            JABODETABEK
                                                        </b>
                                                    </p>
                                                    <a
                                                        className="btn-one smoth-scroll"
                                                        href="https://wa.me/6281228883616/?text=Hi%2C%20Saya%20memerlukan%20bantuan%20untuk%20pemeliharaan%20listrik%20simetric.com"
                                                        target="_blank"
                                                    >
                                                        Whatsapp Kami
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <!-- End Single Slider Item --> */}
                        <a
                            className="left welcome-control"
                            href="#welcome-slide-carousel"
                            role="button"
                            data-slide="prev"
                        >
                            <i className="fa fa-angle-left"></i>
                        </a>{" "}
                        <a
                            className="right welcome-control"
                            href="#welcome-slide-carousel"
                            role="button"
                            data-slide="next"
                        >
                            <i className="fa fa-angle-right"></i>
                        </a>
                    </div>
                </div>
            </div>
            {/* <!-- End Slider Area --> */}
        </header>
    );
}
