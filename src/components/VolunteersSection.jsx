import { FaHandsHelping } from "react-icons/fa";
import { MdVolunteerActivism } from "react-icons/md";

const VolunteersSection = () => {
  const volunteers = [
    {
      name: "Sarah Johnson",
      role: "Community Organizer",
      img: "https://i.ibb.co.com/f1Qz55P/01-sarah.jpg",
    },
    {
      name: "John Doe",
      role: "Event Coordinator",
      img: "https://i.ibb.co.com/MDFdRxG/alex.jpg",
    },
    {
      name: "Emma Brown",
      role: "Fundraising Expert",
      img: "https://i.ibb.co.com/5Lk0sgN/03-emma-1.jpg",
    },
  ];

  return (
    <section className="bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 py-16 px-8">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-extrabold text-gray-800 flex justify-center items-center gap-2">
          <MdVolunteerActivism className="text-pink-500" /> Meet Our Volunteers
        </h2>
        <p className="mt-4 text-gray-600">
          Dedicated individuals who are making a difference in the community
          every day.
        </p>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {volunteers.map((volunteer, index) => (
            <div
              key={index}
              className="card shadow-lg hover:shadow-2xl transition-transform transform hover:scale-105 bg-white rounded-lg overflow-hidden"
            >
              <img
                src={volunteer.img}
                alt={volunteer.name}
                className="h-48 w-full object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800">
                  {volunteer.name}
                </h3>
                <p className="text-gray-600">{volunteer.role}</p>
                <button className="mt-4 btn btn-outline btn-primary btn-sm flex items-center gap-2">
                  <FaHandsHelping />
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VolunteersSection;
