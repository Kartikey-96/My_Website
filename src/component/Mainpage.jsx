import React from "react";
import Data from "../component/Data";
import "../Style/Mainpage.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

function Mainpage() {
  return (
    <Carousel
      className="mainpage"
      showStatus={false}
      showThumbs={false}
      infiniteLoop={true}
      transitionTime={2900}
      autoPlay={true}
    >
      {Data.map((item, index) => (
        <div key={index}>
          <div className="bannerImg">
            <img src={item.product} alt={item.name} className="image" />
          </div>
          <div className="text">  
            <h3 className="heading ">{item.name}</h3>
            <p className="paragraph">{item.Description}</p>
          </div>
        </div>
      ))}
    </Carousel>
  );
}

export default Mainpage;
