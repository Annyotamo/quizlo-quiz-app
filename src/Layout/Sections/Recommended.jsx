import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { recommendedItems } from '../../Helper/recommendedItems';
import { Link } from 'react-router-dom';

const Recommended = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        adaptiveHeight: true,
        appendDots: dots => (
            <div>
                <ul style={{ margin: '10px' }}>{dots}</ul>
            </div>
        ),
        arrows: true, // Add this line to show arrows
        prevArrow: <div className="slick-prev"><span>&lt;</span></div>, // Customize left arrow
        nextArrow: <div className="slick-next"><span>&gt;</span></div>, // Customize right arrow
    };

    return (
        <div className="bg-custom-gradient bg-opacity-35 font-poppins mt-8 pt-[10rem] pb-[2rem]">
            <h1 className='text-[3.5rem] text-[#F5EFE8] bg-blue-gray mb-20 p-2 pl-10 w-1/2 rounded-r-md'>Our Handpicked Quizes</h1>
            <div className="max-w-screen-xl mx-auto my-24 mt-10">
                <Slider {...settings} className="custom-slider">
                    {Array.from({ length: Math.ceil(recommendedItems.length / 3) }).map((_, index) => (
                        <div key={index}>
                            <div className="flex justify-around">
                                {recommendedItems.slice(index * 3, index * 3 + 3).map((item, i) => (
                                    <Link to={`/${item.id}`} key={i} >
                                        <div className="w-[300px] h-[300px] p-4 bg-blue-200 rounded-lg"> {/* Increased height */}
                                            <img src={item.src} width={300} className='rounded' />
                                            <h3 className="text-xl font-semibold mt-7">{item.name}</h3>
                                            <p>{item.quote}</p>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
};

export default Recommended;
