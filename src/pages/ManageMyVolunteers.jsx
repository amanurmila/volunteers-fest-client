import React, { useEffect, useState } from "react";
import useAuth from "../hooks/useAuth";
import axios from "axios";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import useSecureAxios from "../hooks/useSecureAxios";

const ManageMyVolunteers = () => {
  const [myVolunteers, setMyVolunteers] = useState([]);
  const [myRequests, setMyRequests] = useState([]);
  const { user } = useAuth();
  const secureAxios = useSecureAxios();

  useEffect(() => {
    document.title = "Manage Your || Volunteer Fest";
  }, []);

  const userEmail = user?.email;

  useEffect(() => {
    if (userEmail) {
      fetchAllVolunteers();
      fetchAllRequests();
    }
  }, [userEmail]);

  //   Fetching all requests
  const fetchAllRequests = async () => {
    try {
      const { data } = await secureAxios.get(
        `/volunteers-requests/${userEmail}`
      );
      setMyRequests(data);
    } catch (error) {
      console.error(
        "Error fetching requests:",
        error.response?.data || error.message
      );
    }
  };

  //   Fetching all volunteers
  const fetchAllVolunteers = async () => {
    try {
      const { data } = await secureAxios.get(`/volunteers/${userEmail}`);
      setMyVolunteers(data);
    } catch (error) {
      console.error(
        "Error fetching volunteers:",
        error.response?.data || error.message
      );
    }
  };

  //   Delete from volunteers needed
  const handleDelete = async (id) => {
    try {
      await secureAxios.delete(`/volunteer/${id}`);
      toast.success("Volunteers Need Post Deleted Successfully!!!");
      fetchAllVolunteers();
    } catch (err) {
      console.error("Error deleting post:", err.message);
      toast.error(err.message);
    }
  };

  const modernDelete = (id) => {
    toast((t) => (
      <div className="flex gap-3 items-center">
        <div>
          <p>
            Want to <b>Delete?</b>
          </p>
        </div>
        <div className="gap-2 flex">
          <button
            className="bg-red-500 text-white px-3 py-1 rounded-md"
            onClick={() => {
              toast.dismiss(t.id);
              handleDelete(id);
            }}
          >
            Yes
          </button>
          <button
            className="bg-purple-500 text-white px-3 py-1 rounded-md"
            onClick={() => toast.dismiss(t.id)}
          >
            Cancel
          </button>
        </div>
      </div>
    ));
  };

  const handleCancel = async (id) => {
    try {
      await secureAxios.delete(`/volunteer-request/${id}`);
      toast.success("Request for be a Volunteer Cancelled Successfully!!!");
      fetchAllRequests();
    } catch (err) {
      console.error("Error deleting post:", err.message);
      toast.error(err.message);
    }
  };

  const modernCancel = (id) => {
    toast((t) => (
      <div className="flex gap-3 items-center">
        <div>
          <p>
            Want to <b>Cancel?</b>
          </p>
        </div>
        <div className="gap-2 flex">
          <button
            className="bg-red-500 text-white px-3 py-1 rounded-md"
            onClick={() => {
              toast.dismiss(t.id);
              handleCancel(id);
            }}
          >
            Yes
          </button>
          <button
            className="bg-purple-500 text-white px-3 py-1 rounded-md"
            onClick={() => toast.dismiss(t.id)}
          >
            No
          </button>
        </div>
      </div>
    ));
  };

  return (
    <div>
      {/* Volunteers Section */}
      <div className="w-10/12 mx-auto">
        <h1 className="text-center text-3xl font-bold my-4">
          You Added Posts For Needing Volunteers
        </h1>
        {myVolunteers.length === 0 ? (
          <div className="flex flex-col items-center justify-center mt-20 space-y-8">
            <div className="p-6 space-y-4 max-w-lg text-center bg-base-100 rounded-lg shadow-lg">
              <h2 className="text-2xl font-semibold text-primary">
                No Volunteers Needed Post Found
              </h2>
              <p className="text-purple-500 mb-5">
                You don’t have any volunteers needed post yet. Once you add a
                volunteer needed post, they’ll appear here.
              </p>
              <Link
                to={"/add-volunteer"}
                className="px-6 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700"
              >
                Add Volunteer
              </Link>
            </div>
          </div>
        ) : (
          <div className="flex flex-col mt-6">
            <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                <div className="overflow-hidden border border-gray-200 md:rounded-lg">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-base-100">
                      <tr>
                        <th className="py-3.5 px-4 text-sm font-normal text-left text-gray-500">
                          Title
                        </th>
                        <th className="px-4 py-3.5 text-sm font-normal text-left text-gray-500">
                          Deadline
                        </th>
                        <th className="px-4 py-3.5 text-sm font-normal text-left text-gray-500">
                          Category
                        </th>
                        <th className="px-4 py-3.5 text-sm font-normal text-left text-gray-500">
                          Actions
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-base-100 divide-y divide-gray-200">
                      {myVolunteers.map((volunteer) => (
                        <tr key={volunteer._id}>
                          <td className="px-4 py-4">{volunteer.title}</td>
                          <td className="px-4 py-4">
                            {new Date(volunteer.deadline).toLocaleDateString()}
                          </td>
                          <td className="px-4 py-4">{volunteer.category}</td>
                          <td className="px-4 py-4">
                            <Link
                              to={`/update/${volunteer._id}`}
                              className="btn btn-sm btn-primary"
                            >
                              Edit
                            </Link>
                            <button
                              className="btn btn-sm btn-danger ml-2"
                              onClick={() => modernDelete(volunteer._id)}
                            >
                              Delete
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="divider h-3 bg-yellow-500"></div>

      {/* Requests Section */}
      <div className="w-10/12 mx-auto">
        <h1 className="text-center text-3xl font-bold my-4">
          You Requested as a Volunteer for the Post
        </h1>
        {myRequests.length === 0 ? (
          <div className="flex flex-col items-center justify-center mt-20 space-y-8">
            <div className="p-6 space-y-4 max-w-lg text-center bg-base-100 rounded-lg shadow-lg">
              <h2 className="text-2xl font-semibold text-primary">
                No Volunteer Request Found
              </h2>
              <p className="text-purple-500 mb-5">
                You don’t have any volunteer requests yet. Once you request, it
                will appear here.
              </p>
              <Link
                to={"/all-volunteers"}
                className="px-6 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700"
              >
                All Volunteers Needed Page
              </Link>
            </div>
          </div>
        ) : (
          <div className="flex flex-col mt-6">
            <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                <div className="overflow-hidden border border-gray-200 md:rounded-lg">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-base-50">
                      <tr>
                        <th className="py-3.5 px-4 text-sm font-normal text-left text-gray-500">
                          Title
                        </th>
                        <th className="px-4 py-3.5 text-sm font-normal text-left text-gray-500">
                          Deadline
                        </th>
                        <th className="px-4 py-3.5 text-sm font-normal text-left text-gray-500">
                          Category
                        </th>
                        <th className="px-4 py-3.5 text-sm font-normal text-left text-gray-500">
                          Status
                        </th>
                        <th className="px-4 py-3.5 text-sm font-normal text-left text-gray-500">
                          Suggestion
                        </th>
                        <th className="px-4 py-3.5 text-sm font-normal text-left text-gray-500">
                          Actions
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-base divide-y divide-gray-200">
                      {myRequests.map((request) => (
                        <tr key={request._id}>
                          <td className="px-4 py-4">{request.title}</td>
                          <td className="px-4 py-4">
                            {new Date(
                              request.deadlineValue
                            ).toLocaleDateString()}
                          </td>
                          <td className="px-4 py-4">{request.category}</td>
                          <td className="px-4 py-4 text-cyan-600">{request.status}</td>
                          <td className="px-4 py-4">{request.suggestion}</td>
                          <td className="px-4 py-4">
                            <button
                              onClick={() => modernCancel(request._id)}
                              className="btn btn-sm btn-neutral"
                            >
                              Cancel Request
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ManageMyVolunteers;
