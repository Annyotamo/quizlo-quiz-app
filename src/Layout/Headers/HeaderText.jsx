export default function HeaderText({ title, text }) {
    return (
        <div className="font-poppins mt-20 lg:m-0 lg:ml-10">
            <h1 className="text-[5rem] text-blue-800 opacity-90">{title}</h1>
            <p className="text-[3rem] text-[#F5FEFD]">{text}</p>
        </div>
    )
}