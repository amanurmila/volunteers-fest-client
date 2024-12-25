import { format } from "date-fns";
import React from "react";
import { FaCalendarAlt, FaEye } from "react-icons/fa";
import { Link } from "react-router-dom";

const HomeVolunteerCard = ({ volunteer }) => {
  const { thumbnail, title, category, deadline, _id } = volunteer;
  return (
    <div>
      <div className="card bg-white shadow-xl rounded-lg hover:scale-105 transition-transform duration-300 border border-gray-200">
        {/* Thumbnail */}
        <figure>
          <img
            src={thumbnail}
            alt={title}
            className="w-full h-48 object-cover rounded-t-lg"
          />
        </figure>

        {/* Card Body */}
        <div className="card-body p-4">
          {/* Title */}
          <h2 className="card-title text-xl font-bold text-gray-800">
            {title}
          </h2>

          {/* Category */}
          <p className="text-sm text-gray-600 mt-2">
            <span className="font-semibold">Category:</span> {category}
          </p>

          {/* Deadline */}
          <div className="flex items-center text-gray-600 mt-3">
            <FaCalendarAlt className="mr-2 text-gray-500" />
            <p>
               <span>Deadline: {format(new Date(deadline), "P")}</span>
            </p>
          </div>

          {/* View Details Button */}
          <div className="card-actions mt-4">
            <Link to={`/volunteer/${_id}`} className="btn bg-gradient-to-tr from-purple-600 to-orange-600 text-white w-full flex items-center justify-center gap-2">
              <FaEye />
              View Details
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeVolunteerCard;
