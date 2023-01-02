import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";


const Banner = () => {
    return (
        <Carousel showArrows={true} autoPlay infiniteLoop showThumbs={false}>
            <div>
                <img src="https://i.ibb.co/jHvB7pc/01.jpg" alt="banner img"/>
                {/* <p className="legend">Legend 1</p> */}
            </div>
            <div>
                <img src="https://i.ibb.co/mDS502t/02.jpg" alt="banner img"/>
                {/* <p className="legend">Legend 2</p> */}
            </div>
            <div>
                <img src="https://i.ibb.co/MCqwZqZ/03.jpg" alt="banner img"/>
                {/* <p className="legend">Legend 3</p> */}
            </div>
            <div>
                <img src="https://i.ibb.co/JCv3s0f/04.jpg" alt="banner img"/>
                {/* <p className="legend">Legend 3</p> */}
            </div>
        </Carousel>
    );
};

export default Banner;