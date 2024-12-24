import { useEffect } from "react";
import ImageSlider from "../components/ImageSlider";

const Home = () => {
  useEffect(() => {
    document.title = "Home || Volunteer Fest";
  }, []);
  return (
    <div>
      <div className="w-10/12 mx-auto">
        <ImageSlider />
      </div>
    </div>
  );
};

export default Home;
