import React from 'react';
import { Link } from 'react-router-dom';

export default function Spinner() {

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-blue-50">
            <div className="w-16 h-16 border-4 border-blue-200 border-t-blue-500 rounded-full animate-spin mb-4"></div>
            <p className="text-center text-blue-600 text-lg">Loading...</p>
            <Link to="/">
                <button
                    className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-lg shadow-lg hover:bg-blue-700 transition duration-300 ease-in-out"
                >
                    Taking too long? Let's go back home
                </button>
            </Link>
        </div>
    );
};

