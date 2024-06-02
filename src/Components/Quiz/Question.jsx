import QuestionButtons from "../../Utils/QuestionButtons"
import Answers from "./Answers";
import { shuffleArray } from "../../Helper/shuffleFunction";
import AnsNav from "../../Layout/AnsNav";
import Spinner from "../../Layout/display/Spinner"

export default function Question({ nextHandler, prevHandler, questions, questionNumber }) {
    const currentQuestion = questions[questionNumber];

    if (currentQuestion) {
        var correctAns = questions[questionNumber].correct_answer;
        const incorrectAns = [...questions[questionNumber].incorrect_answers];
        var answers = [correctAns, ...incorrectAns];
        shuffleArray(answers);
    }

    if (!currentQuestion) return <Spinner />
    return (
        <div className="bg-blue-400 min-h-screen justify-center flex-col items-center p-10">
            <AnsNav />
            <Answers
                answers={answers}
                correctAns={correctAns}
                question={currentQuestion.question}
                questionNumber={questionNumber}

            />
            <QuestionButtons questionNumber={questionNumber} nextHandler={nextHandler} prevHandler={prevHandler} />
        </div>
    );
}
