import { Link } from "react-router-dom";

export default function ConfirmSubmit({ text, url, setRedirectParams }) {
    return (
        <div className="min-h-screen bg-beige-blue-gradient absolute w-screen top-0 left-0 z-10 flex items-center justify-center">
            <div className="absolute w-96 md:w-[25vw] bg-blue-gray z-10 rounded-lg p-10 shadow-xl">
                <h1 className="text-[1.5rem] text-blue-900 border-b pb-8 border-b-blue-200">{text}</h1>
                <div className="mt-10 flex justify-evenly">
                    <Link to={url}><button className="p-3 rounded bg-green-500 text-alice-white w-[100px]">Sure</button></Link>
                    <button className="p-3 rounded bg-red-500 text-alice-white w-[100px]" onClick={() => setRedirectParams({ status: false, text: "", url: "" })}>Cancel</button>
                </div>
            </div>
        </div>
    )
}