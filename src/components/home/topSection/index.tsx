import { useState } from "react";
import { Link } from "react-router-dom";

import desktopHero1 from "../../../assets/img/desktop-hero-1.jpg";
import desktopImageHero2 from "../../../assets/img/desktop-image-hero-2.jpg";
import desktopImageHero3 from "../../../assets/img/desktop-image-hero-3.jpg";

const description = [
  {
    title: "Discover innovative ways to decorate",
    body: "We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.",
    img: desktopHero1,
  },
  {
    title: "We are available all across the globe",
    body: "With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we’re in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today.",
    img: desktopImageHero2,
  },
  {
    title: " Manufactured with the best materials",
    body: "Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office.",
    img: desktopImageHero3,
  },
];

const TopComponentsSection: React.FC<any> = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((prevIndex: any) =>
      prevIndex === description.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prev = () => {
    setCurrentIndex((prevIndex: any) =>
      prevIndex === 0 ? description.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="grid xl:grid-cols-10 grid-cols-1 h-full">
      <div
        style={{ backgroundImage: `url(${description[currentIndex].img})` }}
        className={`xl:col-span-6  bg-cover xl:h-full h-96 ease-in duration-500`}
      ></div>
      <div className="flex flex-col items-center justify-center xl:col-span-4 bg-[#FFFFFF] px-10 py-14  font-League relative ">
        <div className="flex flex-col space-y-2">
          <p className="xl:text-5xl text-xl font-bold ease-in duration-500">
            {description[currentIndex].title}
          </p>
          <p className="xl:text-xl font-thin text-lg">
            {description[currentIndex].body}
          </p>
          <Link to={"/shop"}>
            <div className="flex items-center space-x-4 hover:scale-95 transition cursor-pointer">
              <p className="text-sm font-bold font-League tracking-[10px]">
                SHOP NOW
              </p>
              <span className="material-symbols-outlined">trending_flat</span>
            </div>
          </Link>
        </div>

        <div className="absolute bottom-0 xl:left-0 right-0  flex">
          <div
            onClick={() => prev()}
            className="py-2.5 px-[17px] bg-[#0A0A0A] cursor-pointer transform transition-transform hover:bg-[#1F1F1F]"
          >
            <svg width="14" height="24" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M13 0L1 12l12 12"
                stroke="#FFF"
                fill="none"
                fillRule="evenodd"
              />
            </svg>
          </div>
          <div
            onClick={() => next()}
            className="py-2.5 px-[17px] bg-[#0A0A0A] cursor-pointer transform transition-transform hover:bg-[#1F1F1F]"
          >
            <svg width="14" height="24" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M1 0l12 12L1 24"
                stroke="#FFF"
                fill="none"
                fillRule="evenodd"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopComponentsSection;
