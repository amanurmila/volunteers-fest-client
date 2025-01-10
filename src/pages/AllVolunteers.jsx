import React, { useEffect, useState } from "react";
import AllVolunteersCard from "../components/AllVolunteersCard";
import { FaThLarge, FaTable } from "react-icons/fa"; // Importing icons
import useSecureAxios from "../hooks/useSecureAxios";
import { Link } from "react-router-dom";

const AllVolunteers = () => {
  const [volunteers, setVolunteers] = useState([]);
  const [search, setSearch] = useState("");
  const [isTableView, setIsTableView] = useState(false); // State to toggle layout
  const secureAxios = useSecureAxios();

  useEffect(() => {
    document.title = "All Volunteers || Volunteer Fest";
  }, []);

  useEffect(() => {
    const fetchAllVolunteers = async () => {
      try {
        const { data } = await secureAxios.get(`/volunteers?search=${search}`);
        setVolunteers(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchAllVolunteers();
  }, [search]);

  return (
    <div className="w-10/12 mx-auto my-5">
      {/* Search Bar and Layout Toggle */}
      <div className="flex flex-wrap justify-between items-center mb-6 gap-4">
        {/* Search Input */}
        <div className="flex p-1 overflow-hidden border rounded-lg focus-within:ring focus-within:ring-opacity-40 focus-within:border-blue-400 focus-within:ring-blue-300">
          <input
            className="px-6 py-2 text-gray-700 placeholder-gray-500 bg-base-100 outline-none focus:placeholder-transparent"
            type="text"
            name="search"
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Enter Job Title"
            aria-label="Enter Job Title"
          />
          <button className="px-1 md:px-4 py-3 text-sm font-medium tracking-wider text-gray-100 uppercase transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:bg-gray-600 focus:outline-none">
            Search
          </button>
        </div>

        {/* Layout Toggle Icons */}
        <div className="flex space-x-4">
          <FaTable
            className={`text-2xl cursor-pointer ${
              isTableView
                ? "text-blue-600"
                : "text-gray-400 hover:text-blue-600"
            }`}
            onClick={() => setIsTableView(true)}
            title="Table View"
          />
          <FaThLarge
            className={`text-2xl cursor-pointer ${
              !isTableView
                ? "text-blue-600"
                : "text-gray-400 hover:text-blue-600"
            }`}
            onClick={() => setIsTableView(false)}
            title="Card View"
          />
        </div>
      </div>

      {isTableView ? (
        <section>
          {/* Table Layout */}
          <div className="overflow-x-auto">
            <table className="table-auto w-full border border-gray-300 text-left">
              <thead className="bg-gray-100">
                <tr>
                  <th className="px-4 py-2">Name</th>
                  <th className="px-4 py-2">Category</th>
                  <th className="px-4 py-2">Deadline</th>
                  <th className="px-4 py-2">Volunteers Need</th>
                  <th className="px-4 py-2">Actions</th>
                </tr>
              </thead>
              <tbody>
                {volunteers.map((volunteer) => (
                  <tr key={volunteer._id} className="hover:bg-gray-50">
                    <td className="px-4 py-2">{volunteer.title}</td>
                    <td className="px-4 py-2">{volunteer.category}</td>
                    <td className="px-4 py-2">
                      {new Date(volunteer.deadline).toLocaleDateString()}
                    </td>
                    <td className="px-4 py-2 text-center">
                      {volunteer.volunteersNeeded}
                    </td>
                    <td className="px-4 py-2">
                      <Link
                        to={`/volunteer/${volunteer._id}`}
                        className="text-sm text-blue-600 hover:underline"
                      >
                        View Details
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      ) : (
        <section className="grid grid-cols-1 gap-6 p-4 mt-4 md:grid-cols-2 lg:grid-cols-4">
          {volunteers.map((volunteer) => (
            <AllVolunteersCard key={volunteer._id} volunteer={volunteer} />
          ))}
        </section>
      )}
    </div>
  );
};

export default AllVolunteers;