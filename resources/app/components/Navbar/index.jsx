import { useContext } from "react";
import { Link } from "react-router-dom";
import logo from "../../images/vandz15.png";

export default function Index() {
    return (
        <header>
            <div className="container">
                <nav className="navbar">
                    <a href="/" className="brand">
                        <img src={logo} alt="Logo" className="brand-img" />
                    </a>
                    <ul className="nav-list">
                        <li className="nav-item">
                            <Link
                                target="_blank"
                                className="nav-link"
                                to="https://wa.me/6281228883616?text=Halo,pesan cemilan vandz15.github.io. Ini alamat kirim saya`"
                            >
                                Whatsapp kami
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}
