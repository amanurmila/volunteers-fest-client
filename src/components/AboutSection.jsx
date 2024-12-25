import { FaHandsHelping, FaGlobe, FaUsers } from "react-icons/fa";

const AboutSection = () => {
  return (
    <section className="py-12 bg-base-100">
      <div className="w-10/12 mx-auto text-center">
        <h2 className="text-4xl font-bold text-primary">About Us</h2>
        <p className="mt-4 text-purple-600 text-lg">
          At <span className="font-bold text-primary">Volunteers Fest</span>, we are dedicated to connecting passionate individuals with impactful opportunities to make a difference in their communities.
        </p>
      </div>

      <div className="mt-8 w-10/12 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Card 1: Mission */}
        <div className="flex flex-col items-center bg-base-100 shadow-lg rounded-lg p-6 border hover:shadow-xl transition-shadow duration-300">
          <FaHandsHelping className="text-4xl text-primary mb-4" />
          <h3 className="text-xl font-bold text-primary">Our Mission</h3>
          <p className="text-blue-600 mt-2 text-center">
            To empower individuals to contribute to causes they care about and create meaningful change in society.
          </p>
        </div>

        {/* Card 2: Global Impact */}
        <div className="flex flex-col items-center bg-base-100 shadow-lg rounded-lg p-6 border hover:shadow-xl transition-shadow duration-300">
          <FaGlobe className="text-4xl text-primary mb-4" />
          <h3 className="text-xl font-bold text-primary">Global Impact</h3>
          <p className="text-blue-600 mt-2 text-center">
            With a network of opportunities worldwide, we aim to inspire global citizenship and community development.
          </p>
        </div>

        {/* Card 3: Community */}
        <div className="flex flex-col items-center bg-base-100 shadow-lg rounded-lg p-6 border hover:shadow-xl transition-shadow duration-300">
          <FaUsers className="text-4xl text-primary mb-4" />
          <h3 className="text-xl font-bold text-primary">Join Our Community</h3>
          <p className="text-blue-600 mt-2 text-center">
            Become part of a community of changemakers dedicated to making the world a better place for all.
          </p>
        </div>
      </div>

      <div className="mt-12 text-center">
        <button className="btn btn-primary btn-lg">
          Learn More About Us
        </button>
      </div>
    </section>
  );
};

export default AboutSection;
