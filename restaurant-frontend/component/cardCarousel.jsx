"use client";
import { useState, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";

const CardCarousel = ({ cardItem }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const carouselRef = useRef(null);

  const handleDotClick = (index) => {
    setActiveIndex(index);
    // Scroll to the center of the clicked card
    carouselRef.current.scrollLeft = index * carouselRef.current.offsetWidth;
  };

  const handleCardClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <div className="card-carousel mx-2 my-5">
      <div className="card-wrapper flex-gap" ref={carouselRef}>
        {cardItem.map((item, index) => {
          return (
            <div
              key={index}
              className={`card flex-col-gap p-2 ${
                index === activeIndex ? "active" : ""
              }`}
              onClick={() => handleCardClick(index)}
            >
              <FontAwesomeIcon icon={faQuoteLeft} className="icon" />
              <p className="desc">{item.desc}</p>
              <div className="content flex-gap">
                <div className="avatar relative">
                  <Image src={item.thumbnail} alt="" fill className="img" />
                </div>
                <div className="name-and-prof">
                  <h5 className="name">{item.title}</h5>
                  <p className="profession">{item.profession}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="dots flex-gap">
        {cardItem.map((_, index) => (
          <div
            key={index}
            className={`dot ${index === activeIndex ? "active" : ""}`}
            onClick={() => handleDotClick(index)}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default CardCarousel;
