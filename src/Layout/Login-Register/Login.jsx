import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../config/firebase";
import { useState, useEffect } from "react";
import LoadingSpinner from "../display/LoadingSpinner";
import Notification from "../display/Notification";

export default function Login({ setRegister }) {
    const [inputData, setInputData] = useState({ username: "", password: "" });
    const [notification, setNotification] = useState({ message: "", type: "" });
    const [visible, setVisible] = useState(false);
    const [loading, setLoading] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        if (notification.message) {
            setVisible(true);
            const timer = setTimeout(() => {
                setVisible(false);
                setTimeout(() => {
                    setNotification({ message: "", type: "" });
                }, 500); // Wait for the fade-out transition to complete before clearing the notification
            }, 3000); // Notification will disappear after 3 seconds
            return () => clearTimeout(timer); // Cleanup the timer
        }
    }, [notification]);

    function inputHandler(event) {
        setInputData(prev => ({
            ...prev, [event.target.name]: event.target.value,
        }));
    }

    async function initiateLogin(e) {
        e.preventDefault();
        setLoading(true);
        setNotification({ message: "", type: "" });
        try {

            // retrieving email from database
            const usersCollection = collection(db, "users");
            const q = query(usersCollection, where("username", "==", inputData.username));
            const qSnap = await getDocs(q);
            let email = "";
            qSnap.forEach((doc) => email = doc.data().email);

            // signing in with email
            const auth = getAuth();
            await signInWithEmailAndPassword(auth, email, inputData.password);

            // setting display messages
            setNotification({ message: "Login successful!", type: "success" });
            setIsLoggedIn(true);
        } catch (error) {
            setNotification({ message: `Error: ${error.message}`, type: "error" });
        } finally {
            setLoading(false);
            setInputData({ username: "", password: "" });
        }
    }

    return (
        <>
            {notification.message && (
                <Notification message={notification.message} type={notification.type} visible={visible} />
            )}
            {loading && <LoadingSpinner />}
            <div className="container mx-auto p-4">
                {!isLoggedIn ? (
                    <>
                        <h1 className="text-[1.75rem] text-blue-500">Welcome back, <span className="text-blue-800">Login</span></h1>
                        <form onSubmit={initiateLogin}>
                            <div className="my-3">
                                <label className="block text-base text-blue-800">Username</label>
                                <input
                                    name="username"
                                    type="text"
                                    className="text-blue-500 text-sm border-b-blue-300 bg-transparent border-b w-[100%]"
                                    value={inputData.username}
                                    onChange={inputHandler}
                                />
                            </div>
                            <div>
                                <label className="block text-base text-blue-800">Password</label>
                                <input
                                    name="password"
                                    type="password"
                                    className="text-blue-500 text-sm border-b-blue-300 bg-transparent border-b w-[100%]"
                                    value={inputData.password}
                                    onChange={inputHandler}
                                />
                            </div>
                            <button className="text-blue-800 text-sm my-5 mt-2 bg-blue-200 p-[4px] px-[10px] rounded" type="submit">
                                Submit
                            </button>
                        </form>
                        <h1 className="text-[1.75rem] text-blue-500">Not yet registered?</h1>
                        <button className="p-2 bg-blue-400 text-sm text-white rounded mt-5" onClick={() => setRegister(false)}>Register yourself</button>
                    </>
                ) : (
                    <div>
                        <h1 className="text-[2rem] text-green-500">Welcome! 🎉</h1>
                        <p className="text-[1.25rem] text-green-700">You are now logged in. Enjoy your stay!</p>
                    </div>
                )}
            </div>
        </>
    );
}
