import img1 from "../../assets/images/banner/5.jpg";
import img2 from "../../assets/images/banner/2.jpg";
import img3 from "../../assets/images/banner/3.jpg";
import img4 from "../../assets/images/banner/4.jpg";
import img5 from "../../assets/images/banner/1.jpg";
import img6 from "../../assets/images/banner/6.jpg";
import SlideIcon from "../SlideIcon/SlideIcon";
import BannerInfo from "../BannerInfo/BannerInfo";
const Banner = () => {
  return (
    <>
      <div className="w-full my-6 rounded-lg carousel">
        <div id="slide1" className="relative w-full carousel-item">
          <img src={img1} className="w-full" />
          <BannerInfo
            title="Affordable Price For Car Servicing"
            description="There are many variations of passages of available, but the
          majority have suffered alteration in some form"
            buttonLeft="Discover More"
            buttonRight="Latest Project"
          />
          <SlideIcon leftIconPath="#slide4" rightIconPath="#slide2" />
        </div>
        <div id="slide2" className="relative w-full carousel-item">
          <img src={img2} className="w-full" />
          <BannerInfo
            title="Affordable Price For Car Servicing"
            description="There are many variations of passages of available, but the
          majority have suffered alteration in some form"
            buttonLeft="Discover More"
            buttonRight="Latest Project"
          />
          <SlideIcon leftIconPath="#slide1" rightIconPath="#slide3" />
        </div>
        <div id="slide3" className="relative w-full carousel-item">
          <img src={img3} className="w-full" />
          <BannerInfo
            title="Affordable Price For Car Servicing"
            description="There are many variations of passages of available, but the
          majority have suffered alteration in some form"
            buttonLeft="Discover More"
            buttonRight="Latest Project"
          />
          <SlideIcon leftIconPath="#slide2" rightIconPath="#slide4" />
        </div>
        <div id="slide4" className="relative w-full carousel-item">
          <img src={img4} className="w-full" />
          <BannerInfo
            title="Affordable Price For Car Servicing"
            description="There are many variations of passages of available, but the
          majority have suffered alteration in some form"
            buttonLeft="Discover More"
            buttonRight="Latest Project"
          />
          <SlideIcon leftIconPath="#slide3" rightIconPath="#slide5" />
        </div>
        <div id="slide5" className="relative w-full carousel-item">
          <img src={img5} className="w-full" />
          <BannerInfo
            title="Affordable Price For Car Servicing"
            description="There are many variations of passages of available, but the
          majority have suffered alteration in some form"
            buttonLeft="Discover More"
            buttonRight="Latest Project"
          />
          <SlideIcon leftIconPath="#slide4" rightIconPath="#slide6" />
        </div>
        <div id="slide6" className="relative w-full carousel-item">
          <img src={img6} className="w-full" />
          <BannerInfo
            title="Affordable Price For Car Servicing"
            description="There are many variations of passages of available, but the
          majority have suffered alteration in some form"
            buttonLeft="Discover More"
            buttonRight="Latest Project"
          />
          <SlideIcon leftIconPath="#slide5" rightIconPath="#slide1" />
        </div>
      </div>
    </>
  );
};

export default Banner;
