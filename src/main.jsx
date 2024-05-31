import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./Redux/Store.js";
import "./index.css";
import App from "./App.jsx";
import Quiz from "./Components/Quiz/Quiz.jsx";
import Questions from "./Components/Quiz/Questions.jsx"
import QuizResult from "./Components/Results/QuizResult.jsx";
import About from "./Layout/Sections/About.jsx";
const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
    },
    {
        path: "/:qid",
        element: <Quiz />,
    },
    {
        path: "/:qid+questions",
        element: <Questions />,
    },
    {
        path: "/quiz-result",
        element: <QuizResult />,
    },
    {
        path: "/about",
        element: <About />
    }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <Provider store={store}>
        <RouterProvider router={router} />
    </Provider>
);
