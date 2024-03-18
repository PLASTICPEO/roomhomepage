import TopComponentsSection from "../../components/home/topSection";
import BottomSectionComponents from "../../components/home/bottomSection";

const Home = () => {
  return (
    <div className="h-screen w-full grid xl:grid-rows-10">
      <div className="xl:row-span-6">
        <TopComponentsSection />
      </div>
      <div className="xl:row-span-4">
        <BottomSectionComponents />
      </div>
    </div>
  );
};

export default Home;
