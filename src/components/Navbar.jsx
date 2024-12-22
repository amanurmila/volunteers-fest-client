import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  return (
    <div className="navbar bg-[#7E5CAD] shadow-sm px-20 text-white">
      <div className="flex-1">
        <Link to="/" className="text-2xl font-bold">
          <span className="font-bold">Volunteers Fest</span>
        </Link>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/volunteers">All Volunteers</Link>
          </li>

          {!user && (
            <li>
              <Link className="btn btn-success btn-sm" to="/login">
                Login
              </Link>
            </li>
          )}
        </ul>

        {user && (
          <div className="dropdown dropdown-end z-50">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="border-2 border-gray-400 rounded-full">
                <div
                  title={user?.displayName}
                  className="w-10 h-10 rounded-full overflow-hidden"
                >
                  <img
                    referrerPolicy="no-referrer"
                    alt="User Profile Photo"
                    src={user?.photoURL}
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-gray-500 rounded-box w-52"
            >
              <li>
                <Link to="/add-volunteer" className="justify-between">
                  Add Volunteer
                </Link>
              </li>
              <li>
                <Link to="/manage-volunteers">Manage My Post</Link>
              </li>
              <li className="mt-2">
                <button
                  onClick={logOut}
                  className="bg-gray-200 text-black block text-center"
                >
                  Logout
                </button>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
