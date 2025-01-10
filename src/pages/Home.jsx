import { useEffect, useState } from "react";
import ImageSlider from "../components/ImageSlider";
import useSecureAxios from "../hooks/useSecureAxios";
import HomeVolunteerCard from "../components/HomeVolunteerCard";
import { Link } from "react-router-dom";
import AboutSection from "../components/AboutSection";
import ContactSection from "../components/ContactSection";

const Home = () => {
  const [sortedVolunteers, setSortedVolunteers] = useState([]);
  const secureAxios = useSecureAxios();

  useEffect(() => {
    document.title = "Home || Volunteer Fest";
  }, []);

  // Getting Sorted Data to HomePage...
  useEffect(() => {
    const fetchSortedVolunteers = async () => {
      try {
        const { data } = await secureAxios.get(`/volunteer/sort`);
        setSortedVolunteers(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchSortedVolunteers();
  }, []);

  return (
    <div>
      <div className="w-10/12 mx-auto">
        <ImageSlider />
      </div>
      <section>
        <AboutSection />
      </section>
      <div className="divider"></div>
      <section className="w-10/12 mx-auto">
        <h2 className="text-center text-3xl font-bold my-6 underline">
          Volunteers Needs Now
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {sortedVolunteers.map((volunteer) => (
            <HomeVolunteerCard key={volunteer._id} volunteer={volunteer} />
          ))}
        </div>
        <div className="text-center mt-5">
          <Link
            to={"/all-volunteers"}
            className="btn bg-gradient-to-br from-pink-500 to-cyan-500 text-white"
          >
            See All Posts
          </Link>
        </div>
      </section>
      <div className="divider"></div>
      <section>
        <ContactSection />
      </section>
    </div>
  );
};

export default Home;
