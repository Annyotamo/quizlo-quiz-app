import React, { useEffect, useRef } from "react";
import Navbar from "../../Layout/Navbar";
import { useSelector } from "react-redux";
import HeaderText from "../../Layout/Headers/HeaderText";
import { parseString } from "../../Helper/parseString.js";
import Chart from "chart.js/auto";

export default function QuizResult() {
    const total = useSelector((state) => state.endpoint);
    let count = 0;
    const parityArray = [];
    const outcome = useSelector((state) => state.outcome);
    const outcomeArray = Object.values(outcome);

    for (const i of outcomeArray) {
        if (i.isCorrect === true) count++;
        const parityObj = { question: i.question, correct: i.correct, choice: i.choice.answer, isCorrect: i.isCorrect };
        parityArray.push(parityObj);
    }

    const chartRef = useRef(null);

    useEffect(() => {
        const correctCount = outcomeArray.filter((item) => item.isCorrect).length;
        const incorrectCount = outcomeArray.length - correctCount;

        const chart = new Chart(chartRef.current, {
            type: "pie",
            data: {
                labels: ["Correct", "Incorrect"],
                datasets: [
                    {
                        data: [correctCount, incorrectCount],
                        backgroundColor: ["green", "red"],
                    },
                ],
            },
            options: {
                radius: '70%', // Adjust the size of the circle here, e.g., '70%',
                plugins: {
                    legend: {
                        position: 'top', // Change the legend position to top
                    }
                }
            },
        });

        return () => {
            chart.destroy();
        };
    }, [outcomeArray]);

    return (
        <div className="bg-blue-400">
            <Navbar />
            <HeaderText title="Great Job" text="You completed the test" />
            <div className="font-poppins p-4 w-1/2 mx-auto bg-alice-white rounded-3xl mt-10">
                <div className="flex justify-center gap-10 items-center pt-10">
                    <div className="h-[20rem]"><canvas ref={chartRef}></canvas></div>
                    <div><h1 className="text-[3rem] text-center mb-1 text-gray-700  pb-2">Your Results</h1>
                        <h2 className="text-xl text-center mb-6 text-gray-500 border-b border-gray-300 pb-8">
                            You scored <span className="text-3xl">{count}</span> out of <span className="text-3xl">{total.number}</span>
                        </h2></div>
                </div>

                {parityArray.map((item, index) => {
                    const question = parseString(item.question);
                    const correct = parseString(item.correct);
                    const choice = parseString(item.choice);
                    return (
                        <div key={index} className="mb-4 p-4 border-b border-gray-200">
                            <h3 className="text-lg mb-2 flex justify-between items-center">
                                <span>{question}</span>
                                <span className={`text-sm border px-2 rounded ${item.isCorrect ? "bg-green-400 text-alice-white" : "bg-red-400 text-alice-white"
                                    }`}>
                                    {item.isCorrect ? "Correct" : "Wrong"}
                                </span>
                            </h3>
                            <p className="text-gray-600 mb-1">Correct Answer: <span className="text-green-500">{correct}</span></p>
                            <p className={`mb-2 ${item.correct === item.choice ? "text-green-500" : "text-red-600"}`}>
                                Your Choice: {choice}
                            </p>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
