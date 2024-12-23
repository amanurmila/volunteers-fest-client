import React from "react";
import { FiCalendar, FiMapPin, FiUsers } from "react-icons/fi";
import { MdOutlineDetails } from "react-icons/md";
import format from "date-fns/format";
import { Link } from "react-router-dom";

const AllVolunteersCard = ({ volunteer }) => {
  const { thumbnail, title, location, deadline, volunteersNeeded, _id } =
    volunteer;
  return (
    <div>
      <div className="card w-full bg-base-100 shadow-xl hover:shadow-2xl transform hover:-translate-y-2 transition duration-300">
        <figure>
          <img
            src={thumbnail}
            alt={title}
            className="w-full h-56 object-cover rounded-t-lg"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-lg font-bold text-primary">{title}</h2>
          <div className="flex items-center text-sm text-gray-600 mt-2">
            <FiMapPin className="mr-2 text-primary" />
            <span>{location}</span>
          </div>
          <div className="flex items-center text-sm text-gray-600 mt-1">
            <FiCalendar className="mr-2 text-primary" />
            <span>Deadline: {format(new Date(deadline), "P")}</span>
          </div>
          <div className="flex items-center text-sm text-gray-600 mt-1">
            <FiUsers className="mr-2 text-primary" />
            <span>Volunteers Needed: {volunteersNeeded}</span>
          </div>
          <div className="card-actions mt-4">
            <Link
              to={`/volunteer/${_id}`}
              className="w-full flex justify-center items-center gap-2 
               bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 
               hover:from-pink-500 hover:to-yellow-500 
               text-white font-semibold py-3 px-4 rounded-lg 
               shadow-lg hover:shadow-xl 
               transition-all duration-300 no-underline"
            >
              <MdOutlineDetails className="text-xl" />
              <span className="text-white">View Details</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllVolunteersCard;
