import React from "react";

import CarouselItem from "./CarouselItem";

export default function AutoplayCarousel({iconDetails}) {
  return (
    <div className="carousel-container">
      <div className="carousel-track">
        {iconDetails.map((item) => {
          return (
            <CarouselItem
              key={
                item.title +
                "" +
                item.imgUrl
              }
              imgUrl={item.imgUrl}
              imgTitle={item.title}
            ></CarouselItem>
          );
        })}
         {iconDetails.map((item) => {
          return (
            <CarouselItem
              key={
                item.title +
                "" +
                item.imgUrl
              }
              imgUrl={item.imgUrl}
              imgTitle={item.title}
            ></CarouselItem>
          );
        })}
         
       
      </div>
    </div>
  );
}
