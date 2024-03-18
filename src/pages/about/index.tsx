import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="h-screen w-full flex flex-col container mx-auto  p-4 item-center justify-center space-y-10 bg-[#FFFFFF] font-League">
      <p className="xl:text-4xl text-xl font-bold">About our furniture</p>
      <p className="text-lg font-thin">
        Our multifunctional collection blends design and function to suit your
        individual taste. Make each room unique, or pick a cohesive theme that
        best express your interests and what inspires you. Find the furniture
        pieces you need, from traditional to contemporary styles or anything in
        between. Product specialists are available to help you create your dream
        space.
      </p>
      <Link to={"/"}>
        <button className="font-thin flex items-center justify-center space-x-4">
          <span className="material-symbols-outlined">west</span>
          <p>Back to homepage</p>
        </button>
      </Link>
    </div>
  );
};

export default About;
