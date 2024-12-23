import axios from "axios";
import React, { useEffect, useState } from "react";
import AllVolunteersCard from "../components/AllVolunteersCard";

const AllVolunteers = () => {
  const [volunteers, setVolunteers] = useState([]);

  useEffect(() => {
    const fetchAllVolunteers = async () => {
      try {
        const { data } = await axios.get("http://localhost:5000/volunteers");
        setVolunteers(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchAllVolunteers();
  }, []);


  return (
    <div className="w-10/12 mx-auto my-5 flex flex-col items-center">
      <div>
        <div className="flex p-1 overflow-hidden border rounded-lg    focus-within:ring focus-within:ring-opacity-40 focus-within:border-blue-400 focus-within:ring-blue-300">
          <input
            className="px-6 py-2 text-gray-700 placeholder-gray-500 bg-white outline-none focus:placeholder-transparent"
            type="text"
            name="search"
            placeholder="Enter Job Title"
            aria-label="Enter Job Title"
          />

          <button className="px-1 md:px-4 py-3 text-sm font-medium tracking-wider text-gray-100 uppercase transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:bg-gray-600 focus:outline-none">
            Search
          </button>
        </div>
      </div>
      <section className="grid grid-cols-1 gap-6 p-4 mt-4 md:grid-cols-2 lg:grid-cols-3">
        {volunteers.map((volunteer) => (
          <AllVolunteersCard key={volunteer._id} volunteer={volunteer} />
        ))}
      </section>
    </div>
  );
};

export default AllVolunteers;
