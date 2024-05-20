// import React from "react";
// import "../../style/eventPage.css";
// import Branding from "../../Images/Astrix Branding.png";
// import Logo from "../../Images/Logo.png";
// import EventBg from "../../Images/ASTRIX EVENTS.png";
// import Slider from "react-slick";

// const EventMainPage = () => {
  
//   var settings = {
//     dots: false,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1
//   };

//   return (
//     <div className="eventMainPage">
//       {/* header */}
//       <div className="header-logo">
//         <img src={Branding} alt="Branding" className="branding" />
//         <h1 className="logo">Astrix.</h1>
//       </div>
//       {/* inner banner */}
//       <div className="inner-banner">
//         <h1 className='header-one'>ASTR<br />IX</h1>
//         <h1 className='header-two'>EVE<br />NTS</h1>
//         {/* <img src={EventBg} alt="event bg" className="eventBg" /> */}
//       </div>

//       {/* event image carousel */}
//       <div>
//         <img src="https://unsplash.com/photos/group-of-people-attending-to-concert-9tZhyQskezA" alt="" />
//         <img src="https://unsplash.com/photos/group-of-people-attending-to-concert-9tZhyQskezA" alt="" />
//         <img src="https://unsplash.com/photos/group-of-people-attending-to-concert-9tZhyQskezA" alt="" />
//       </div>


//     </div>
//   );
// };

// export default EventMainPage;


import React from "react";
import "../../style/eventPage.css";
import Branding from "../../Images/Astrix Branding.png";
import Slider from "react-slick";

const EventMainPage = () => {

  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <div className="eventMainPage">
      {/* header */}
      <div className="headerLogo">
        <img src={Branding} alt="Branding" className="branding" />
        <h1 className="logo">Astrix.</h1>
      </div>

      {/* inner banner */}
      <div className="innerBanner">
        <h1 className='headerOne'>ASTR<br />IX</h1>
        <h1 className='headerTwo'>EVE<br />NTS</h1>
      </div>

      {/* event image carousel */}
      <div className="imageCarousel">
        <Slider {...settings}>
          <div>
            <img src="https://images.unsplash.com/photo-1593642532973-d31b6557fa68" alt="Event 1" />
          </div>
          <div>
            <img src="https://images.unsplash.com/photo-1581349484269-baa01df3e073" alt="Event 2" />
          </div>
          <div>
            <img src="https://images.unsplash.com/photo-1573497491208-6b1acb260507" alt="Event 3" />
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default EventMainPage;

