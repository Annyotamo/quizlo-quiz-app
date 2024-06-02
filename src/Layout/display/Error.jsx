import { ExclamationCircleIcon } from '@heroicons/react/solid';

const ErrorComponent = ({ message }) => {
    return (
        <div className="flex items-center justify-center min-h-screen bg-red-50">
            <div className="text-center">
                <ExclamationCircleIcon className="w-24 h-24 text-red-600 animate-bounce mx-auto" />
                <h1 className="text-4xl font-bold text-red-600 mt-4">Oops! Something went wrong.</h1>
                <p className="text-lg text-red-500 mt-2">{message}</p>
                <button className="mt-6 px-6 py-3 bg-red-600 text-white rounded-lg shadow-lg hover:bg-red-700 transition duration-300 ease-in-out">
                    Try Again
                </button>
            </div>
        </div>
    );
};

export default ErrorComponent;
