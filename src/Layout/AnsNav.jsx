import { useState } from "react";
import ConfirmSubmit from "./Overflow Content/ConfirmSubmit";

export default function AnsNav() {

    const [redirect, setRedirect] = useState({ status: false, text: "", url: "" });

    function setRedirectParams({ status, text, url }) {
        setRedirect({ status, text, url });
    }

    return (
        <div className="bg-[#fff0db] rounded-3xl font-poppins justify-between items-center p-8 px-12 text-center md:p-3 md:flex md:text-left">
            <h2 className="text-blue-600 text-xl">
                Submit here after you've completed the test
            </h2>
            <div className="mt-5 md:m-0">
                <button className="bg-green-400 px-4 py-2 rounded text-white disabled:cursor-not-allowed disabled:bg-gray-400"
                    onClick={() => setRedirectParams({ status: true, text: "Have you checked correctly, Are you sure you want to submit?", url: "/quiz-result" })}>Submit</button>
                <button className="bg-red-400 px-4 py-2 rounded ml-2 text-white"
                    onClick={() => setRedirectParams({ status: true, text: "Do you want to quit taking the test?", url: "/" })}>Quit</button>
            </div>
            {redirect.status && <ConfirmSubmit text={redirect.text} url={redirect.url} setRedirectParams={setRedirectParams} />}
        </div>
    );
};
