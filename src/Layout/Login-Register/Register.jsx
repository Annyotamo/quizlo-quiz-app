import { useState } from "react";
import { getDocs, query, where, addDoc, collection, } from "firebase/firestore";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { db } from "../../config/firebase";


export default function Register() {
    const [inputData, setInputData] = useState({ username: "", email: "", password: "" });
    const [error, setError] = useState("");

    function inputHandler(event) {
        setInputData(prev => ({
            ...prev, [event.target.name]: event.target.value,
        }));
        setError(""); // Clear error message when user types
    }

    async function registerInDatabase(event) {
        event.preventDefault();
        // Check if any field is empty
        if (!inputData.username || !inputData.email || !inputData.password) {
            setError("* All fields are required.");
            return;
        }

        try {
            const usersCollectionRef = collection(db, "users");

            // Check if the username already exists
            const q = query(usersCollectionRef, where("username", "==", inputData.username));
            const querySnapshot = await getDocs(q);

            if (!querySnapshot.empty) {
                // Username already exists
                setError("User is already present, please try logging in.");
            } else {
                // Username does not exist, add the new user
                const auth = getAuth();
                await createUserWithEmailAndPassword(auth, inputData.email, inputData.password);
                await addDoc(usersCollectionRef, { username: inputData.username, email: inputData.email });
                setError(""); // Clear error message after successful registration
            }
        } catch (error) {
            console.error("Error adding document: ", error);
            setError("Error adding document. Please try again.");
        }
    }

    return (
        <div>
            <h1 className="text-[1.75rem] text-blue-500 z-20 mb-8">Welcome, <span className="text-blue-800 block">Register yourself</span></h1>
            <form onSubmit={registerInDatabase}>
                <div>
                    <label className="block text-lg text-blue-800 mt-4">Username</label>
                    <input
                        type="text"
                        name="username"
                        className="text-blue-900 text-sm border-b-blue-300 bg-transparent border-b w-[100%]"
                        onChange={inputHandler}
                        value={inputData.username}
                    />
                </div>
                <div>
                    <label className="block text-lg text-blue-800 mt-4">Email</label>
                    <input
                        type="text"
                        name="email"
                        className="text-blue-900 text-sm border-b-blue-300 bg-transparent border-b w-[100%]"
                        onChange={inputHandler}
                        value={inputData.email}
                    />
                </div>
                <div>
                    <label className="block text-lg text-blue-800 mt-4">Password</label>
                    <input
                        type="text"
                        name="password"
                        className="text-blue-900 text-sm border-b-blue-300 bg-transparent border-b w-[100%]"
                        onChange={inputHandler}
                        value={inputData.password}
                    />
                </div>
                {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
                <button className="p-2 bg-blue-400 text-sm text-white rounded mt-5">Register</button>
            </form>
        </div>
    )
}
