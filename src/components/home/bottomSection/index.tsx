import aboutDrak from "../../../assets/img/image-about-dark.jpg";
import aboutLight from "../../../assets/img/image-about-light.jpg";

const BottomSectionComponents = () => {
  return (
    <div className="grid xl:grid-cols-3">
      <img className="bg-cover h-full" src={aboutDrak} alt="dark" />
      <div>
        <div className="flex flex-col h-full  justify-center xl:col-span-4 bg-[#FFFFFF] p-8 font-League relative">
          <h1 className="xl:text-4xl text-xl font-bold">About our furniture</h1>
          <p className="text-lg font-thin">
            Our multifunctional collection blends design and function to suit
            your individual taste. Make each room unique, or pick a cohesive
            theme that best express your interests and what inspires you. Find
            the furniture pieces you need, from traditional to contemporary
            styles or anything in between. Product specialists are available to
            help you create your dream space.
          </p>
        </div>
      </div>
      <div>
        <img className="bg-cover h-full" src={aboutLight} alt="light" />
      </div>
    </div>
  );
};

export default BottomSectionComponents;
