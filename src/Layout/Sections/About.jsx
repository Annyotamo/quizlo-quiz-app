import { Link } from "react-router-dom";

export default function About() {
    return (
        <div className="flex items-center justify-center min-h-screen bg-blue-300">
            <div className="max-w-3xl w-full mx-6 p-6 bg-white shadow-md rounded-lg">
                <h1 className="text-3xl font-bold text-center text-blue-800 mb-4">About Quizlo</h1>
                <p className="text-lg text-gray-700 mb-6">
                    Quizlo is your ultimate quiz buddy designed to boost your general knowledge while having fun.
                    Whether solo or with friends, Quizlo has got you covered.
                </p>
                <p className="text-lg text-gray-700 mb-6">
                    Narrating the development journey of Quizlo:
                </p>
                <ul className="list-disc list-inside mb-6">
                    <li className="text-lg text-gray-700">
                        I first chose <span className="font-bold">React</span> for its component-based architecture, which allows
                        for building reusable and interactive UI elements.
                    </li>
                    <li className="text-lg text-gray-700">
                        To manage application state, I implemented <span className="font-bold">Redux</span>, a predictable state
                        container that simplifies data management across the app.
                    </li>
                    <li className="text-lg text-gray-700">
                        For rapid UI development and consistent design, I utilized <span className="font-bold">Tailwind CSS</span>.
                    </li>
                    <li className="text-lg text-gray-700">
                        Integrating <span className="font-bold">Slider JS</span> allowed for dynamic slideshows of quiz content,
                        enhancing the user experience.
                    </li>
                    <li className="text-lg text-gray-700">
                        To enable pagination and improve navigation, I incorporated <span className="font-bold">React Pagination</span>.
                    </li>
                    <li className="text-lg text-gray-700">
                        Finally, <span className="font-bold">Chart.js</span> was employed to visualize quiz statistics and results
                        through interactive pie charts.
                    </li>
                </ul>
                <p className="text-lg text-gray-700 mb-6">
                    With these technologies, Quizlo offers an engaging learning experience for users of all levels. Dive into
                    the world of knowledge with Quizlo today and elevate your trivia game!
                </p>
                <Link to="/">
                    <div className=" bg-blue-600 text-center p-3 rounded text-alice-white"><button>Go back</button></div>
                </Link>
            </div>
        </div>
    );

};
