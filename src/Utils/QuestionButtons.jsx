import { useSelector } from "react-redux";
import leftArrow from "../assets/l-arrow.png"
import rightArrow from "../assets/r-arrow.png"



export default function QuestionButtons({ questionNumber, prevHandler, nextHandler }) {
    const total = useSelector((state) => state.endpoint.number);


    return (
        <div className="px-10 flex justify-between">
            <button
                disabled={questionNumber == 0}
                className={`${questionNumber == 0 && "cursor-not-allowed"
                    } w-20 lg:absolute lg:left-52 lg:top-[50%] rounded-full bg-blue-200 p-3`}
                onClick={prevHandler}>
                <img src={leftArrow} />
            </button>
            <button
                disabled={questionNumber == total - 1}
                className={`${questionNumber == total - 1 && "cursor-not-allowed"
                    } w-20 lg:absolute lg:right-52 lg:top-[50%] rounded-full bg-blue-200 p-3`}
                onClick={nextHandler}>
                <img src={rightArrow} />
            </button>
        </div>
    );
}
