import React, { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import useAuth from "../hooks/useAuth";
import axios from "axios";
import useSecureAxios from "../hooks/useSecureAxios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const AddVolunteer = () => {
  const { user } = useAuth();
  const [deadline, setDeadline] = useState(new Date());
  const secureAxios = useSecureAxios();
  const navigate = useNavigate();

  useEffect(() => {
      document.title = "Add Volunteers Need || Volunteer Fest";
    }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;

    const thumbnail = form.thumbnail?.value;
    const title = form.title?.value;
    const description = form.description?.value;
    const category = form.category?.value;
    const location = form.location?.value;
    const volunteersNeeded = form.volunteersNeeded?.value;
    const deadlineValue = deadline;
    const organizerName = form.organizerName?.value;
    const organizerEmail = form.organizerEmail?.value;

    // Form data
    const formData = {
      thumbnail,
      title,
      description,
      category,
      location,
      volunteersNeeded,
      deadline: deadlineValue,
      organizerName,
      organizerEmail,
    };

    try {
      await secureAxios.post("/add-volunteer", formData);
      form.reset();
      toast.success("Volunteer Need Post Added Successfully");
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-8 mt-20 bg-base-100 shadow-md rounded-lg">
      <h2 className="text-2xl font-bold text-center mb-6">
        Add Volunteer For Needing
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1">Thumbnail</label>
          <input
            type="text"
            name="thumbnail"
            placeholder="Enter thumbnail URL"
            className="input input-bordered w-full"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Post Title</label>
          <input
            type="text"
            name="title"
            placeholder="Enter post title"
            className="input input-bordered w-full"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Description</label>
          <textarea
            name="description"
            placeholder="Enter description"
            className="textarea textarea-bordered w-full"
          ></textarea>
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Category</label>
          <select name="category" className="select select-bordered w-full">
            <option>Select a category</option>
            <option value="healthcare">Healthcare</option>
            <option value="education">Education</option>
            <option value="social service">Social Service</option>
            <option value="animal welfare">Animal Welfare</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Location</label>
          <input
            type="text"
            name="location"
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
            name="volunteersNeeded"
            placeholder="Enter number"
            className="input input-bordered w-full"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Deadline</label>
          <DatePicker
            selected={deadline}
            name="deadline"
            onChange={(date) => setDeadline(date)}
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
            Add Post
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddVolunteer;
