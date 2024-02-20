import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getListKontakKami } from "@/redux/action/kontakKami/creator";

import Swal from "sweetalert2";

export default function Index() {
    const kontakKamiList = useSelector(
        (state) => state.kontakKami.kontakKamiList
    );
    const dispatch = useDispatch();

    const fetchKontakKami = async () => {
        dispatch(getListKontakKami());
    };

    const showSwal = () => {
        Swal.fire({
            title: "Terima kasih atas pesan Anda. Pesan sudah terkirim.",
            text: "",
            icon: "success",
            confirmButtonColor: "#f47629", // Button background color
            iconColor: "#f47629", // Icon color
        });
    };

    useEffect(() => {
        fetchKontakKami();
    }, []);

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
                                        <button
                                            className="btn-one"
                                            onClick={showSwal}
                                        >
                                            Kirim Pesan
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div
                        className="col-md-6 col-sm-12"
                        data-aos="slide-left"
                        data-aos-delay="0"
                    >
                        <div className="google-map">
                            <iframe
                                src={kontakKamiList?.embed_google_map}
                                allowFullScreen
                                loading="lazy"
                            ></iframe>
                            <div className="map-content">
                                <ul>
                                    <li>
                                        <i className="fa fa-home"></i>
                                        {kontakKamiList?.alamat}
                                    </li>
                                    <li>
                                        <i className="fa fa-clock-o"></i>
                                        {kontakKamiList?.jam_kerja}
                                    </li>
                                    <li>
                                        <i className="fa fa-phone"></i>
                                        <a
                                            href={`tel:${kontakKamiList?.no_telp}`}
                                        >
                                            {kontakKamiList?.no_telp}
                                        </a>{" "}
                                    </li>
                                    <li>
                                        <i className="fa fa-whatsapp"></i>
                                        <a
                                            href={`https://wa.me/${kontakKamiList?.link_no_wa}/?text=Hi%2C%20Saya%20memerlukan%20bantuan%20untuk%20pemeliharaan%20listrik%20simetric.com`}
                                            target="_blank"
                                        >
                                            {kontakKamiList?.no_wa}
                                        </a>{" "}
                                    </li>
                                    <li>
                                        <i className="fa fa-envelope"></i>
                                        <a
                                            href={`mailto:${kontakKamiList?.email}`}
                                        >
                                            {kontakKamiList?.email}
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
