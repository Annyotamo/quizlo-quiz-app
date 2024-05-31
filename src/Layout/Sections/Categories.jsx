import { useState } from "react";
import { Link } from "react-router-dom";
import { categories } from "../../Helper/categories";

export default function Categories() {

    const [currentPage, setCurrentPage] = useState(1);
    const [isAnimating, setIsAnimating] = useState(false);
    const itemsPerPage = 6;
    const totalPages = Math.ceil(categories.length / itemsPerPage);

    const handleClick = (pageNumber) => {
        setIsAnimating(true);
        setTimeout(() => {
            setCurrentPage(pageNumber);
            setIsAnimating(false);
        }, 500); // Match this duration with the fade-out duration
    };

    const paginatedCategories = categories.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );

    return (
        <div >
            <h2 className="text-[4rem] font-poppins ml-10 mt-10 text-blue-200">Our Categories</h2>
            <div className="bg-blue-100 p-8 rounded-lg shadow-lg max-w-4xl mx-auto my-10">
                <div className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 transition-opacity duration-500 ${isAnimating ? 'opacity-0' : 'opacity-100'}`}>
                    {paginatedCategories.map((category) => (
                        <Link key={category.id} to={`/${category.id}`}>
                            <div className="bg-blue-200 p-4 rounded-lg text-center hover:bg-blue-300 transition duration-300 h-48 w-full flex flex-col justify-center">
                                <button className="bg-blue-600 py-2 px-4 w-full rounded-md text-white text-lg font-medium font-poppins hover:bg-blue-700 transition duration-300">
                                    {category.name}
                                </button>
                                <p className="mt-2 text-blue-700 italic">{category.quote}</p>
                            </div>
                        </Link>
                    ))}
                </div>
                <div className="flex justify-center mt-6">
                    {Array.from({ length: totalPages }, (_, index) => (
                        <button
                            key={index + 1}
                            onClick={() => handleClick(index + 1)}
                            className={`mx-1 px-3 py-1 rounded-md ${currentPage === index + 1
                                ? "bg-blue-600 text-white"
                                : "bg-blue-200 text-blue-600 hover:bg-blue-300"
                                }`}
                        >
                            {index + 1}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
}
