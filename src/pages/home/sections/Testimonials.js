import React, { useState } from "react";
import { testimonials } from "../../../datas/Home";

function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Calculate how many items to show based on screen size
  const itemsToShow = window.innerWidth >= 768 ? 2 : 1;

  const nextSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex + itemsToShow) % testimonials.length
    );
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) =>
        (prevIndex - itemsToShow + testimonials.length) % testimonials.length
    );
  };

  const visibleTestimonials = testimonials.slice(
    currentIndex,
    currentIndex + itemsToShow
  );

  return (
    <div className="bg-steelgrey">
      <div className="container mt-[4rem] py-5">
        <h2 className="font-bold text-[2rem] mb-8 text-center leading-9">
          Our customers say the nicest things about our service
        </h2>
        <div className="flex flex-col items-center space-y-6">
          {/* Display testimonials dynamically */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {visibleTestimonials.map((testimonial, index) => (
              <div
                key={index}
                className="p-6 rounded-lg shadow-md transition-all duration-300 bg-white"
              >
                <div className="flex items-center space-x-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full"
                  />
                  <div>
                    <h3 className="font-semibold">{testimonial.name}</h3>
                    <p className="text-sm text-gray-500">
                      {testimonial.location}
                    </p>
                  </div>
                </div>
                <p className="mt-4 text-gray-700">{testimonial.text}</p>
              </div>
            ))}
          </div>

          {/* Navigation buttons */}
          <div className="flex items-center space-x-4">
            <button
              onClick={prevSlide}
              className="p-2 bg-gray-200 rounded-full hover:bg-gray-300"
            >
              ◀
            </button>
            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <div
                  key={index}
                  className={`w-2 h-2 rounded-full ${
                    index === currentIndex ? "bg-red-500" : "bg-gray-300"
                  }`}
                />
              ))}
            </div>
            <button
              onClick={nextSlide}
              className="p-2 bg-gray-200 rounded-full hover:bg-gray-300"
            >
              ▶
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
