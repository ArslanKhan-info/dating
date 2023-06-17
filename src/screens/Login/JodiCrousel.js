import React, { useState } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
  Row,
  Col,
} from 'reactstrap';

const items = [
  {
    id: 1,
    url:require('../../assets/img/jodi1.webp'),
    title:'Uttara & Rajat',
    des:'Some people are destined to be together, ours is one such story. I matched with Rajat. Right after a month of dating, he surprised me with a marriage proposal. My family & Rajat pulled a prank on me, he took me to Goa after telling me we were going to Jaipur. He proposed to me on a yacht with a ring he had made all by himself. I believe, God chose TrulyMadly to bring us together!'
  },
  {
    id: 2,
    url:require('../../assets/img/jodi2.webp'),
    title:'Pooja & Vishal',
    des:'People might have seen the movie, 2 States. For us, the movie became a reality! We are from different states and come from different religions, and this was quite worrisome for our parents. After a year of convincing, they agreed and we finally tied the knot. Thanks to TrulyMadly for helping me find the love of my life!'
  },
  {
    id: 3,
    url:require('../../assets/img/jodi3.webp'),
    title:'Uttara & Rajat',
    des:'Some people are destined to be together, ours is one such story. I matched with Rajat. Right after a month of dating, he surprised me with a marriage proposal. My family & Rajat pulled a prank on me, he took me to Goa after telling me we were going to Jaipur. He proposed to me on a yacht with a ring he had made all by himself. I believe, God chose TrulyMadly to bring us together!'
  },
  {
    id: 4,
    url:require('../../assets/img/jodi4.webp'),
    title:'Uttara & Rajat',
    des:'Some people are destined to be together, ours is one such story. I matched with Rajat. Right after a month of dating, he surprised me with a marriage proposal. My family & Rajat pulled a prank on me, he took me to Goa after telling me we were going to Jaipur. He proposed to me on a yacht with a ring he had made all by himself. I believe, God chose TrulyMadly to bring us together!'
  },
  {
    id: 5,
    url:require('../../assets/img/jodi5.webp'),
    title:'Uttara & Rajat',
    des:'Some people are destined to be together, ours is one such story. I matched with Rajat. Right after a month of dating, he surprised me with a marriage proposal. My family & Rajat pulled a prank on me, he took me to Goa after telling me we were going to Jaipur. He proposed to me on a yacht with a ring he had made all by himself. I believe, God chose TrulyMadly to bring us together!'
  },
];

function JodiCrousel(props) {
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
                <Row>
                    <Col md={6} className=' align-self-center'>
                        <img width={'100%'} src={item.url}/>
                    </Col>
                    <Col md={6}>
                        <p className='text-big text-pink '> {item.title}</p>
                        <p className='text-12'>Forever Jodi</p>
                        <p className=' font-weight-600 mt-3 text-line15'>{item.des}</p>
                    </Col>
                </Row>
            </CarouselItem>
        );  
    });

  return (
    <div>
      <Carousel className="custome-jodi-crousel" activeIndex={activeIndex} next={next} previous={previous}>
        <CarouselIndicators
          items={items}
          activeIndex={activeIndex}
          onClickHandler={goToIndex}
          style={{position:'absolute',bottom:-35}}
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

export default JodiCrousel;