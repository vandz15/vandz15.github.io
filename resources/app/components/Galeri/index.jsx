import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getListGaleri } from "@/redux/action/galeri/creator";

import LightGallery from "lightgallery/react";

// import styles
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-video.css";

// If you want you can use SCSS instead of css
import "lightgallery/scss/lightgallery.scss";
import "lightgallery/scss/lg-zoom.scss";

// import plugins if you need
import lgZoom from "lightgallery/plugins/zoom";
import lgVideo from "lightgallery/plugins/video";

export default function Index() {
    const galeriList = useSelector((state) => state.galeri.galeriList);
    const dispatch = useDispatch();

    const fetchGaleri = async () => {
        dispatch(getListGaleri());
    };

    const onInit = () => {
        console.log("lightGallery has been initialized");
    };

    useEffect(() => {
        fetchGaleri();
    }, []);

    return (
        <section id="ourgallery" className="ourteam">
            <div className="container">
                <div className="section-title">
                    <h2>
                        Galleri <span className="title-border-white"></span>
                    </h2>
                </div>
            </div>
            <div className="container">
                <LightGallery
                    onInit={onInit}
                    speed={500}
                    plugins={[lgZoom, lgVideo]}
                    elementClassNames="d-flex"
                >
                    {galeriList?.map((item, x) => (
                        <a
                            key={item?.id || x}
                            data-aos="flip-right"
                            data-aos-delay={x + 1 + "00"}
                            data-lg-size="1600-2400"
                            data-src={item?.image}
                            data-sub-html={`<h4 class="text-theme">${item?.title}</h4> <p>${item?.description}</p>`}
                        >
                            <img
                                alt={item?.alt}
                                src={item?.image}
                                className="img-responsive"
                            />
                        </a>
                    ))}
                </LightGallery>
            </div>
        </section>
    );
}
