export default function Notification({ message, type, visible }) {
    return (
        <div
            className={`fixed top-5 left-1/2 transform -translate-x-1/2 p-4 rounded shadow-lg transition-opacity duration-500 ${visible ? "opacity-100" : "opacity-0"} ${type === "success" ? "bg-green-500 text-white" : "bg-red-500 text-white"}`}
        >
            {message}
        </div>
    );
}