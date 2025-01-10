import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { set } from "date-fns";
import axios from "axios";
import DatePicker from "react-datepicker";
import { toast } from "react-toastify";
import useSecureAxios from "../hooks/useSecureAxios";

const UpdateVolunteer = () => {
  const navigate = useNavigate();
  const { user } = useAuth();
  const { id } = useParams();
  const [startDate, setStartDate] = useState(new Date());
  const [volunteer, setVolunteer] = useState({});
  const secureAxios = useSecureAxios();

  useEffect(() => {
    document.title = "Update a Volunteers Need Post || Volunteer Fest";
  }, []);

  useEffect(() => {
    fetchVolunteerData();
  }, [id]);

  const fetchVolunteerData = async () => {
    const { data } = await secureAxios.get(`/volunteer/${id}`);
    setVolunteer(data);
    setStartDate(new Date(data.deadline));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;

    const thumbnail = form.thumbnail?.value;
    const title = form.title?.value;
    const description = form.description?.value;
    const category = form.category?.value;
    const location = form.location?.value;
    const volunteersNeeded = form.volunteersNeeded?.value;
    const deadlineValue = startDate;
    const organizerName = form.organizerName?.value;
    const organizerEmail = form.organizerEmail?.value;

    // Form data
    const formData = {
      thumbnail,
      title,
      description,
      category,
      location,
      volunteersNeeded: parseInt(volunteersNeeded, 10),
      deadline: deadlineValue,
      organizerName,
      organizerEmail,
    };

    try {
      await secureAxios.put(`/update-volunteer/${id}`, formData);
      form.reset();
      toast.success("Volunteer Need Post Updated Successfully");
      navigate("/manage-my-posts");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="mt-20">
      <div className="max-w-4xl mx-auto p-8 bg-base-100 shadow-md rounded-lg">
        <h2 className="text-2xl font-bold text-center mb-6">
          Update Volunteer For Needing
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">Thumbnail</label>
            <input
              type="text"
              name="thumbnail"
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
              defaultValue={volunteer.description}
              name="description"
              placeholder="Enter description"
              className="textarea textarea-bordered w-full"
            ></textarea>
          </div>
          {volunteer.category && (
            <div>
              <label className="block text-sm font-medium mb-1">Category</label>
              <select
                defaultValue={volunteer.category}
                name="category"
                className="select select-bordered w-full"
              >
                <option>Select a category</option>
                <option value="healthcare">Healthcare</option>
                <option value="education">Education</option>
                <option value="social service">Social Service</option>
                <option value="animal welfare">Animal Welfare</option>
              </select>
            </div>
          )}
          <div>
            <label className="block text-sm font-medium mb-1">Location</label>
            <input
              type="text"
              name="location"
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
              placeholder="Enter number"
              className="input input-bordered w-full"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Deadline</label>
            <DatePicker
              selected={startDate}
              name="deadline"
              onChange={(date) => setStartDate(date)}
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
              value={user?.displayName}
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
              value={user?.email}
              readOnly
              className="input input-bordered w-full bg-base-100"
            />
          </div>
          <div className="text-center">
            <button type="submit" className="btn btn-primary">
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateVolunteer;
