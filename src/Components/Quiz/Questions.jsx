import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Question from "./Question";

export default function Questions() {
    // Retrieving all the state changes from the store
    const state = useSelector((state) => state.endpoint);
    const qid = state.qid;
    const number = state.number;
    const level = state.level;
    const type = state.type;

    const [questions, setQuestions] = useState([]); // useState to receive the new state changes
    const [questionNumber, setQuestionNumber] = useState(0); // useState to track question number

    useEffect(() => {
        async function dataCall() {
            let endpoint = "";
            if (!level && !type)
                endpoint = `https://opentdb.com/api.php?amount=${number}&category=${qid}`;
            else if (!level)
                endpoint = `https://opentdb.com/api.php?amount=${number}&category=${qid}&type=${type}`;
            else if (!type)
                endpoint = `https://opentdb.com/api.php?amount=${number}&category=${qid}&difficulty=${level}`;
            else
                endpoint = `https://opentdb.com/api.php?amount=${number}&category=${qid}&difficulty=${level}&type=${type}`;

            console.log(endpoint);

            const res = await fetch(endpoint);
            const data = await res.json();
            setQuestions(data.results);
        }
        dataCall();
    }, [qid, number, level, type]);

    // handling next and previous questions
    function nextHandler() {
        setQuestionNumber((prev) => prev + 1);
    }
    function prevHandler() {
        setQuestionNumber((prev) => prev - 1);
    }

    return (
        <Question
            key={questionNumber}
            nextHandler={nextHandler}
            prevHandler={prevHandler}
            questions={questions}
            questionNumber={questionNumber}
        />
    );
}
