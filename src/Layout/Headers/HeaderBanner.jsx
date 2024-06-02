export default function HeaderBanner() {
    return (
        <div>
            <h1 className="text-[6rem] md:text-[10rem] p-2 text-blue-800 opacity-90 font-poppins ml-5 relative z-10">I'm Quizlo</h1>
            <h3 className=" text-[3rem] font-poppins text-[#F5FEFD] mr-10 relative z-10 text-right">Your quiz buddy to improve your general knowledge</h3>
            <div className="w-[400px] h-[400px] bg-beige opacity-[0.75] animate-fluid absolute -z-1 -left-[50px] -top-[50px] md:-left-[100px] md:-top-[230px] md:w-[600px] md:h-[600px] "></div>
            <p className=" text-[2.5rem] font-poppins text-blue-200 w-[90vw] text-right hidden lg:block">Whether you're looking to boost your general knowledge or challenge your friends in a trivia showdown, I've got you covered. </p>
        </div>


    );
}
