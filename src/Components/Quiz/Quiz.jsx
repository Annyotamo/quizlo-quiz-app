import Navbar from "../../Layout/Navbar";
import InputFields from "./Inputs/InputFields";
import HeaderText from "../../Layout/Headers/HeaderText";



export default function Quiz() {
    return (
        <div className="bg-blue-beige-gradient min-h-screen p-10">
            <HeaderText title="Hi, Quizlo here" text="Please customize your quiz" />
            <Navbar />
            <InputFields />
        </div>
    );
}
