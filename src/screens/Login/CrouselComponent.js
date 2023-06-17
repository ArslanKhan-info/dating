import React, { useState } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
} from 'reactstrap';

const items = [
  {
    id: 1,
    url:require('../../assets/img/loginBanner1.webp')
  },
  {
    id: 2,
    url:require('../../assets/img/loginBanner2.webp')
  },
  {
    id: 3,
    url:require('../../assets/img/loginBanner3.webp')
  },
];

function CarouselComponent(props) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  const slides = items.map((item) => {
    return (
      <CarouselItem
        
        tag="div"
        key={item.id}
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
      >
        {/* <CarouselCaption
          className="text-danger"
          captionText={item.caption}
          captionHeader={item.caption}
        /> */}
        <img width={'100%'} src={item.url}/>
      </CarouselItem>
    );
  });

  return (
    <div>
      <Carousel className="custome-login-crousel" activeIndex={activeIndex} next={next} previous={previous}>
        <CarouselIndicators
          items={items}
          activeIndex={activeIndex}
          onClickHandler={goToIndex}
        />
        {slides}
        {/* <CarouselControl
          direction="prev"
          directionText="Previous"
          onClickHandler={previous}
        /> */}
        {/* <CarouselControl
          direction="next"
          directionText="Next"
          onClickHandler={next}
        /> */}
      </Carousel>
    </div>
  );
}

export default CarouselComponent;