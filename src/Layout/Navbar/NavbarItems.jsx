import { useEffect } from "react";
import { Link } from "react-router-dom"
import { useLocation } from "react-router-dom";


export default function NavbarItems({ isScrolled, setIsScrolled, setGetStartedHandler }) {
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
        <>
            <div className={`font-poppins bg-beige text-s py-4 rounded-3xl flex justify-evenly md:w-[350px] md:text-base ${isScrolled ? "md:flex-col md:items-center md:w-[6.5rem] relative z-10 gap-8 py-10" : "md:flex"} `}>
                <Link to="/">
                    <button className={location.pathname === "/" ? "text-blue-500" : ""}>Home</button>
                </Link>
                <Link to="/about">
                    <button className={location.pathname === "/about" ? "text-blue-500" : ""}>About</button>
                </Link>
                <Link to="/contact">
                    <button className={location.pathname === "/contact" ? "text-blue-500" : ""}>Contact</button>
                </Link>
            </div>
            <div className={`bg-brown-beige block py-4 md:text-base font-poppins rounded-3xl text-center w-1/2 my-10 md:my-0 md:w-[150px] ${isScrolled && "hidden"}`}>
                <button className={location.pathname === "/get-started" ? "text-blue-400" : ""} onClick={() => setGetStartedHandler(true)}>Get started</button>
            </div>
        </>

    )
}