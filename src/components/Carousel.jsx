import React, { useState, useRef, useEffect } from "react";

const Carousel = ({ children }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [previewIndex, setPreviewIndex] = useState(1);
    const carouselRef = useRef(null);
    const [childHeight, setChildHeight] = useState(0);
    const [initialTouchX, setInitialTouchX] = useState(null);
    const [touchDiffX, setTouchDiffX] = useState(0);

    const handleNext = () => {
        const nextIndex = currentIndex === children.length - 1 ? 0 : currentIndex + 1;
        setCurrentIndex(nextIndex);
        setPreviewIndex(nextIndex === children.length - 1 ? 0 : nextIndex + 1);
    };

    const handlePrev = () => {
        const prevIndex = currentIndex === 0 ? children.length - 1 : currentIndex - 1;
        setCurrentIndex(prevIndex);
        setPreviewIndex(prevIndex === 0 ? children.length - 1 : prevIndex - 1);
    };

    const handleTouchStart = (e) => {
        setInitialTouchX(e.touches[0].clientX);
    };

    const handleTouchMove = (e) => {
        if (initialTouchX !== null) {
            setTouchDiffX(e.touches[0].clientX - initialTouchX);
        }
    };

    const handleTouchEnd = () => {
        if (touchDiffX > 50) {
            handlePrev();
        } else if (touchDiffX < -50) {
            handleNext();
        }
        setInitialTouchX(null);
        setTouchDiffX(0);
    };

    useEffect(() => {
        const intervalId = setInterval(() => {
            handleNext();
        }, 5000);

      return () => clearInterval(intervalId);
  }, [currentIndex]);

    useEffect(() => {
        if (carouselRef.current) {
            const child = carouselRef.current.children[currentIndex];
            setChildHeight(child.offsetHeight);
        }
    }, [currentIndex]);

    const parentHeight = childHeight;

    return (
      <div
          className="relative"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
      >
          <button
              className="hidden lg:block absolute inset-y-0 -left-20 rounded z-10 p-3 px-5 h-20 my-auto bg-gray-800 text-white hover:bg-gray-900 opacity-100 hover:opacity-80 duration-300 ease-in-out"
              onClick={handlePrev}
          >
              &larr;
          </button>
          <button
              className="hidden lg:block absolute inset-y-0 -right-20 p-3 rounded h-20 px-5 my-auto bg-gray-800 text-white hover:bg-gray-900 opacity-100 hover:opacity-80 duration-300 ease-in-out"
              onClick={handleNext}
          >
              &rarr;
          </button>
          <div
              className="flex flex-col relative overflow-x-hidden overflow-y-hidden"
              style={{ height: parentHeight }}
          >
              <div
                  className="absolute w-full flex flex-grow"
                  ref={carouselRef}
                  style={{
                      display: "flex",
                      transition: "transform 0.6s ease-in-out",
                      transform: `translateX(-${currentIndex * 100}%)`,
                  }}
              >
                  {children.map((child, index) => (
                      <div
                          key={index}
                          className="w-full bg-black"
                          style={{ flex: "0 0 100%" }}
                      >
                          {child}
                      </div>
                  ))}
              </div>
          </div>
      </div>
  );
};

export default Carousel;
