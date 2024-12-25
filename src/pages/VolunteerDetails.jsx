import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import useSecureAxios from "../hooks/useSecureAxios";

const VolunteerDetails = () => {
  const [volunteer, setVolunteer] = useState([]);
  const { id } = useParams();
  const navigate = useNavigate();
  const secureAxios = useSecureAxios();

  useEffect(() => {
    document.title = "Need Post Details || Volunteer Fest";
  }, []);

  useEffect(() => {
    fetchVolunteerData();
  }, [id]);

  const fetchVolunteerData = async () => {
    try {
      const { data } = await secureAxios.get(`/volunteer/${id}`);
      setVolunteer(data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleVolunteerClick = () => {
    const today = new Date();
    const deadline = new Date(volunteer.deadline);

    if (deadline < today) {
      toast.error("Deadline is crossed!");
      return;
    }

    if (volunteer.volunteersNeeded < 1) {
      toast.error("Required volunteers are already filled!");
      return;
    }

    navigate(`/be-a-volunteer/${volunteer._id}`);
  };

  return (
    <div className="card my-10 w-full max-w-md mx-auto bg-base-100 shadow-xl hover:shadow-2xl transform hover:-translate-y-2 transition duration-300 rounded-lg">
      {/* Image Section */}
      <figure className="relative h-56 w-full">
        <img
          src={volunteer.thumbnail}
          alt={volunteer.title}
          className="w-full h-full object-cover rounded-t-lg"
        />
        <div className="absolute top-3 left-3 bg-primary text-white text-xs font-semibold px-3 py-1 rounded-full shadow-lg">
          {volunteer.category}
        </div>
      </figure>

      {/* Card Body */}
      <div className="card-body p-6">
        <h2 className="card-title text-xl font-bold text-primary">
          {volunteer.title}
        </h2>
        <p className="text-purple-600 mt-2 text-sm leading-relaxed line-clamp-3">
          {volunteer.description}
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4 text-sm text-purple-600">
          <div>
            <span className="font-semibold">Location:</span>{" "}
            {volunteer.location}
          </div>
          <div>
            <span className="font-semibold">Deadline:</span>{" "}
            {new Date(volunteer.deadline).toLocaleDateString()}
          </div>
          <div>
            <span className="font-semibold">Volunteers Needed:</span>{" "}
            {volunteer.volunteersNeeded}
          </div>
        </div>

        {volunteer.volunteersNeeded === 0 && (
          <div className="text-red-500">
            In this post Volunteers are totally Filled
          </div>
        )}

        {/* Button */}
        <div className="mt-6">
          <button
            onClick={handleVolunteerClick}
            className={`btn w-full py-3 bg-gradient-to-r from-green-400 via-blue-500 to-purple-500 
          hover:from-purple-500 hover:to-green-400 text-white font-semibold 
          rounded-lg shadow-lg hover:shadow-xl transition-all duration-300`}
          >
            Be a Volunteer
          </button>
        </div>
      </div>
    </div>
  );
};

export default VolunteerDetails;
