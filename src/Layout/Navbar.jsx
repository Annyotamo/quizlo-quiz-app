import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const location = useLocation();

    useEffect(() => {
        function scrollHandler() {
            const position = window.scrollY;
            if (position > 300) setIsScrolled(true);
            else setIsScrolled(false);
        }

        window.addEventListener("scroll", scrollHandler);

        return () => window.removeEventListener("scroll", scrollHandler);
    }, []);

    return (
        <div className={`fixed top-10 right-5 w-[90%] md:w-auto z-20 text-sm md:flex md:gap-3 ${isScrolled ? "md:flex-col" : "md:flex"}`}>
            <div className={`font-poppins bg-beige text-s py-4 rounded-3xl flex justify-evenly md:w-[350px] md:text-base ${isScrolled ? "md:flex-col md:items-center md:w-[6.5rem] relative z-10 gap-8 py-10" : "md:flex"} `}>
                <Link to="/">
                    <button className={location.pathname === "/" ? "text-blue-500" : ""}>Home</button>
                </Link>
                <Link to="/about">
                    <button className={location.pathname === "/about" ? "text-blue-500" : ""}>About</button>
                </Link>
                <Link to="">
                    <button className={location.pathname === "/contact" ? "text-blue-500" : ""}>Contact</button>
                </Link>
            </div>
            <div className={`bg-brown-beige invisible md:visible block py-4 md:text-base font-poppins rounded-3xl text-center md:w-[150px] ${isScrolled && "hidden"}`}>
                <button className={location.pathname === "/get-started" ? "text-blue-400" : ""}>Get started</button>
            </div>
        </div>
    );
}
