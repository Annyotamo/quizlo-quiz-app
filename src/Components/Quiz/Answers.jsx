import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { generate } from "../../Redux/Endpoint Params/outcomeSlice";
import QuestionButtons from "../../Utils/QuestionButtons";
import { parseString } from "../../Helper/parseString";

export default function Answers({ answers, correctAns, question, questionNumber }) {
    const result = useSelector((state) => state.outcome);
    let choice = result[`Q-${questionNumber}`];
    if (result[`Q-${questionNumber}`] !== undefined) choice = result[`Q-${questionNumber}`].choice.number;

    const [selected, setSelected] = useState({ number: -1, answer: "" });

    function selectHandler(ans, index) {
        setSelected({ number: index, answer: ans });
    }

    const dispatch = useDispatch();
    function saveHandler() {
        const data = {
            questionTag: `Q-${questionNumber}`,
            question: question,
            correct: correctAns,
            choice: selected,
            isCorrect: correctAns === selected.answer,
        };
        dispatch(generate(data));
    }

    // Decoding the question string to make it readable
    const str = parseString(question);


    return (
        <div className="flex flex-col items-center p-4justify-center font-poppins p-10">
            <h2 className="text-3xl font-bold text-blue-200 mb-4">Question {questionNumber + 1}</h2>
            <p className="text-xl mb-6 text-alice-white">{str}</p>
            <ol className="w-full md:w-3/4 lg:w-1/2">
                {answers.map((ans, index) => {
                    const ansValue = parseString(ans);
                    return (<li
                        key={index}
                        className={`flex items-center justify-center m-2 h-16 border-2 rounded-md text-center cursor-pointer
                                    ${index === selected.number || choice === index
                                ? "bg-beige border-4 border-brown-beige"
                                : "bg-white border-gray-300 hover:bg-beige"}`
                        }
                        onClick={() => selectHandler(ans, index)}
                    >
                        {ansValue}
                    </li>)
                })}
            </ol>
            <button
                className="mt-4 px-4 py-2 w-28  bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
                onClick={saveHandler}
            >
                Save
            </button>
        </div>
    );
}
