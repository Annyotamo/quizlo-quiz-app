import { useState } from "react";
import deleteIcon from "../../assets/delete.png"
import Login from "./Login";
import Register from "./Register";
export default function LoginRegister({ setGetStartedHandler }) {
    const [register, setRegister] = useState(true);
    return (
        <div className="min-h-screen bg-beige-blue-gradient fixed w-[98.9vw] top-0 left-0 z-20 flex items-center justify-center overflow-hidden">
            <div className="absolute w-96 md:w-[25vw] bg-blue-50 z-10 rounded-lg p-10 shadow-xl">
                {register ? <Login setRegister={setRegister} /> : <Register />}
                <button><img src={deleteIcon} width={16} className="absolute top-2 right-2 opacity-50" onClick={() => setGetStartedHandler(false)} /></button>
            </div>
        </div>
    )
}