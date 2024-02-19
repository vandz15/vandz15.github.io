import React, { Fragment, useEffect } from "react";

import Header from "@/components/Header";
import NumberingSectionStart from "@/components/NumberingSectionStart";
import AboutUs from "@/components/AboutUs";
import OurTeam from "@/components/OurTeam";
import Services from "@/components/Services";
import CallToAction from "@/components/CallToAction";
import TestimonialsWrapper from "@/components/TestimonialsWrapper";
import ContactUs from "@/components/ContactUs";
import Footer from "@/components/Footer";

export default function Index() {
    useEffect(() => {
        const loadScripts = async () => {
            // Memuat jQuery secara asinkron
            const jqueryScript = document.createElement("script");
            jqueryScript.src = "assets/jquery/jquery-3.1.1.min.js";
            jqueryScript.async = true;

            // Menunggu jQuery dimuat
            await new Promise((resolve, reject) => {
                jqueryScript.onload = resolve;
                jqueryScript.onerror = reject;
                document.body.appendChild(jqueryScript);
            });

            // Memuat skrip Owl Carousel
            const owlCarouselScript = document.createElement("script");
            owlCarouselScript.src = "assets/owl-carousel/js/owl.carousel.js";
            owlCarouselScript.async = true;

            // Menunggu Owl Carousel dimuat
            await new Promise((resolve, reject) => {
                owlCarouselScript.onload = resolve;
                owlCarouselScript.onerror = reject;
                document.body.appendChild(owlCarouselScript);
            });

            // Setelah Owl Carousel dimuat, memuat skrip lainnya
            const otherScripts = [
                "assets/bootstrap/js/bootstrap.min.js",
                "assets/easing/jquery.easing.min.js",
                "assets/jquery/jquery.animateNumber.min.js",
                "assets/jquery/plugins.js",
                "assets/js/custom.js",
            ];

            otherScripts.forEach((src) => {
                const script = document.createElement("script");
                script.src = src;
                script.async = true;
                document.body.appendChild(script);
            });
        };

        loadScripts();

        // Membersihkan elemen script ketika komponen tidak lagi digunakan
        return () => {
            document.querySelectorAll("script").forEach((script) => {
                script.remove();
            });
        };
    }, []);

    return (
        <Fragment>
            <Header />
            <NumberingSectionStart />
            <AboutUs />
            <OurTeam />
            <Services />
            <CallToAction />
            <TestimonialsWrapper />
            <ContactUs />
            <Footer />
        </Fragment>
    );
}
