import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

const CustomPrevArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="absolute top-1/2 left-4 z-10 transform -translate-y-1/2 bg-black text-white p-2 rounded-full"
  >
    <FaArrowLeft size={24} />
  </button>
);

const CustomNextArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="absolute top-1/2 right-4 z-10 transform -translate-y-1/2 bg-black text-white p-2 rounded-full"
  >
    <FaArrowRight size={24} />
  </button>
);

const ImageSlider = () => {
  const slides = [
    {
      image: "https://i.ibb.co.com/gJtsY9T/06-social.jpg",
      title: "Help the People for Mankind",
      description:
        "Help the people who are in need and make the world a better place.",
    },
    {
      image: "https://i.ibb.co.com/7bcSV7M/04-edu.jpg",
      title: "Educate the Future Generation",
      description:
        "Educate the future generation and help them achieve their dreams",
    },
    {
      image: "https://i.ibb.co.com/ZBFb0zq/07-animal.jpg  ",
      title: "Animals Need Your Help",
      description: "Help the animals who are in need and make them happy.",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
  };

  return (
    <div className="w-full py-16 px-4">
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div key={index} className="relative">
            <div className="overflow-hidden rounded-lg shadow-lg">
              <img
                src={slide.image}
                alt={`Slide ${index + 1}`}
                className="w-full h-full object-cover transition-all duration-300 ease-in-out hover:scale-110"
              />
              <div className="absolute inset-0 hidden bg-black bg-opacity-50 md:flex flex-col justify-center items-center text-white p-6">
                <h2 className="text-3xl font-semibold mb-4">{slide.title}</h2>
                <p className="text-lg">{slide.description}</p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ImageSlider;
