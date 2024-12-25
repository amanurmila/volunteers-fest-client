import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { toast } from "react-toastify";
import useSecureAxios from "../hooks/useSecureAxios";

const BeAVolunteer = () => {
  const [volunteer, setVolunteer] = useState([]);
  const { id } = useParams();
  const { user } = useAuth();
  const navigate = useNavigate();
  const secureAxios = useSecureAxios();

  useEffect(() => {
    document.title = "Be A Volunteer || Volunteer Fest";
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

  const {
    thumbnail,
    title,
    description,
    category,
    location,
    volunteersNeeded,
    organizerName,
    organizerEmail,
    _id,
  } = volunteer;

  const deadlineValue = volunteer.deadline;

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;

    const suggestion = form.suggestion.value;
    const userName = form.userName.value;
    const userEmail = form.userEmail.value;

    const newFormData = {
      thumbnail,
      title,
      description,
      category,
      deadlineValue,
      location,
      volunteersNeeded: parseInt(volunteersNeeded, 10),
      organizerName,
      organizerEmail,
      suggestion,
      userName,
      userEmail,
      organizerId: _id,
      status: "Requested",
    };

    try {
      const { data } = await secureAxios.post("/be-a-volunteer", newFormData, {
        withCredentials: true,
      });
      form.reset();
      toast.success("Request sent successfully");
      navigate("/manage-my-posts");
    } catch (err) {
      console.error("Error in API call:", err.response?.data || err.message);
      toast.error("You have already requested to volunteer for this need");
    }
  };

  return (
    <div>
      <div className="max-w-4xl mx-auto p-8 bg-base-100 shadow-md rounded-lg">
        <h2 className="text-2xl font-bold text-center mb-6">
          Be a Volunteer for this Need
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">Thumbnail</label>
            <input
              type="text"
              name="thumbnail"
              readOnly
              defaultValue={volunteer.thumbnail}
              placeholder="Enter thumbnail URL"
              className="input input-bordered w-full"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Post Title</label>
            <input
              type="text"
              name="title"
              readOnly
              defaultValue={volunteer.title}
              placeholder="Enter post title"
              className="input input-bordered w-full"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">
              Description
            </label>
            <textarea
              name="description"
              readOnly
              defaultValue={volunteer.description}
              placeholder="Enter description"
              className="textarea textarea-bordered w-full"
            ></textarea>
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Category</label>
            <select
              name="category"
              readOnly
              className="select select-bordered w-full"
            >
              <option value="healthcare">{volunteer.category}</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Location</label>
            <input
              type="text"
              name="location"
              readOnly
              defaultValue={volunteer.location}
              placeholder="Enter location"
              className="input input-bordered w-full"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">
              No. of Volunteers Needed
            </label>
            <input
              type="number"
              defaultValue={volunteer.volunteersNeeded}
              name="volunteersNeeded"
              readOnly
              placeholder="Enter number"
              className="input input-bordered w-full"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Deadline</label>
            <input
              name="deadline"
              readOnly
              defaultValue={
                volunteer.deadline
                  ? new Date(volunteer.deadline).toLocaleDateString()
                  : ""
              }
              className="input input-bordered w-full"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">
              Organizer Name
            </label>
            <input
              type="text"
              name="organizerName"
              defaultValue={volunteer.organizerName}
              readOnly
              className="input input-bordered w-full bg-base-100"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">
              Organizer Email
            </label>
            <input
              type="email"
              name="organizerEmail"
              defaultValue={volunteer.organizerEmail}
              readOnly
              className="input input-bordered w-full bg-base-100"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">User Name</label>
            <input
              type="text"
              name="userName"
              defaultValue={user?.displayName}
              readOnly
              className="input input-bordered w-full bg-base-100"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">User Email</label>
            <input
              type="email"
              name="userEmail"
              defaultValue={user?.email}
              readOnly
              className="input input-bordered w-full bg-base-100"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Suggestion</label>
            <textarea
              name="suggestion"
              placeholder="Enter Your Suggestion"
              className="textarea textarea-bordered w-full"
            ></textarea>
          </div>

          <div className="text-center">
            <button
              type="submit"
              disabled={volunteersNeeded < 1}
              className={`btn btn-primary`}
            >
              Request
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BeAVolunteer;
