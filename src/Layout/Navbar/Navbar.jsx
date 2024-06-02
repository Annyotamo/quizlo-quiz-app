import { useState } from "react";
import LoginRegister from "../Login-Register/LoginRegister"
import NavbarItems from "./NavbarItems";

export default function Navbar() {
    const [getStartedHandler, setGetStartedHandler] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false)

    return (
        <>
            <div className={`relative md:fixed md:top-10 md:right-5 md:w-auto mx-auto w-[90%] z-20 text-sm md:flex md:gap-3 ${isScrolled ? "md:flex-col" : "md:flex"}`}>
                <NavbarItems isScrolled={isScrolled} setIsScrolled={setIsScrolled} setGetStartedHandler={setGetStartedHandler} />
            </div>
            {getStartedHandler && <LoginRegister setGetStartedHandler={setGetStartedHandler} />}
        </>
    );
}
