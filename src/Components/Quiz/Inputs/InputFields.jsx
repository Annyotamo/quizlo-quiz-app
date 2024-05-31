import Level from "./Fields/Level";
import Type from "./Fields/Type";
import { useParams } from "react-router";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { submit } from "../../../Redux/Endpoint Params/endpointSlice";
import { Link } from "react-router-dom";

export default function InputFields() {
    const { qid } = useParams();
    const dispatch = useDispatch();

    const [params, setParams] = useState({ qid: qid, number: 5, level: "", type: "" });
    const [isSaved, setIsSaved] = useState(false);

    // handling the inputs
    function paramsHandler(e) {
        setParams((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
    }

    // Form submission handler
    function submissionHandler(event) {
        event.preventDefault();
        dispatch(submit(params));
    }

    return (
        <div className="flex justify-center p-4 mt-10">
            <form onSubmit={submissionHandler} className="bg-white shadow-lg rounded-lg p-6 w-full max-w-xl">
                <div className="flex flex-col md:flex-row gap-8">
                    <Level paramsHandler={paramsHandler} />
                    <Type paramsHandler={paramsHandler} />
                </div>
                <div className="flex justify-between mt-6">
                    <button type="submit" className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-200"
                        onClick={() => setIsSaved(true)}>
                        Save
                    </button>
                    {isSaved && <Link to={`/${qid}+questions`}>
                        <button type="button" className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-200">
                            Submit
                        </button>
                    </Link>}

                </div>
            </form>
        </div>
    );
}
