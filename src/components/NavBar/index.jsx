import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "./style.css";

const NavBar = () => {
    const [open, setOpen] = useState(false);
    const [screenWidth, setScreenWidth] = useState(0);
    const location = useLocation();

    const img1 = `${process.env.PUBLIC_URL}/MattMcKayLogoWhite.png`;

    const trackScreenWidth = () => {
        const width = window.innerWidth;
        setScreenWidth(width);
        if (width > 600) {
            setOpen(true);
        }
    };

    const handleClose = () => {
        if (screenWidth < 600) {
          setOpen(false);
        }
      };

    useEffect(() => {
        trackScreenWidth();
        window.addEventListener("resize", trackScreenWidth);
        return () => window.removeEventListener("resize", trackScreenWidth);
    }, []);

    return (
        <nav className="navbar">
        <div className="nav-wrapper">
            <div className="logo">
            <Link to="/">
                <img
                src={img1}
                alt="brand"
                />
            </Link>
            </div>
            <div className="list-wrapper">
            <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHqAYabGKEs9AKbgT1dQr6DNhDQkfCb-RhXkK0xSSgYbEbUnqOW6JDNYiD8dsKV8mluEc&usqp=CAU"
                alt="Menu bars"
                style={{ opacity: !open ? 1 : 0 }}
                onClick={() => {
                    setOpen(!open);
                }}
            />
            <img
                src="https://cdn-icons-png.flaticon.com/512/507/507222.png"
                alt="Menu cross"
                style={{ opacity: open ? 1 : 0 }}
                onClick={() => {
                    setOpen(!open);
                }}
            />

            <ul style={{ left: open ? "0" : "-100vw" }}>
                <li>
                <Link
                    to="/"
                    style={{ color: location.pathname === "/" && "#4071f4" }}
                    onClick={handleClose}
                >
                    Home
                </Link>
                </li>
                <li>
                <Link
                    to="/about"
                    style={{ color: location.pathname === "/about" && "#4071f4" }}
                    onClick={handleClose}
                >
                    About
                </Link>
                </li>
                <li>
                <Link
                    to="/skills"
                    style={{ color: location.pathname === "/skills" && "#4071f4" }}
                    onClick={handleClose}
                >
                    Skills
                </Link>
                </li>
                <li>
                <Link
                    to="/works"
                    style={{ color: location.pathname === "/works" && "#4071f4" }}
                    onClick={handleClose}
                >
                    Works
                </Link>
                </li>
                <li>
                <Link
                    to="/contact"
                    style={{ color: location.pathname === "/contact" && "#4071f4" }}
                    onClick={handleClose}
                >
                    Contact
                </Link>
                </li>
            </ul>
            </div>
        </div>
        </nav>
    );
};

export default NavBar;