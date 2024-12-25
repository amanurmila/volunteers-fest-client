import { useContext, useState } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Link, NavLink } from "react-router-dom";
import ThemeContext from "../providers/ThemeContext"; // Import Theme Context
import { FaMoon, FaSun, FaBars, FaTimes } from "react-icons/fa"; // Icons for toggle button

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const { theme, toggleTheme } = useContext(ThemeContext); // Access theme and toggleTheme
  const [menuOpen, setMenuOpen] = useState(false); // State to control mobile menu toggle

  return (
    <div className="navbar bg-[#7E5CAD] shadow-sm px-6 md:px-20 text-white">
      {/* Logo */}
      <div className="flex-1 flex items-center justify-between">
        <Link to="/" className="text-2xl font-bold">
          <span className="font-bold">Volunteers Fest</span>
        </Link>
        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Navigation Links */}
      <div
        className={`flex-none flex-col md:flex-row md:flex items-center transition-all duration-300 ${
          menuOpen ? "flex" : "hidden"
        } md:flex`}
      >
        {/* Theme Toggle Button */}
        <button
          className="p-2 rounded-full transition-all duration-300 bg-base-100 shadow-md mr-4"
          onClick={toggleTheme}
        >
          {theme === "light" ? (
            <FaMoon className="text-xl text-gray-700" />
          ) : (
            <FaSun className="text-xl text-yellow-500" />
          )}
        </button>

        <ul className="menu menu-vertical md:menu-horizontal px-1 space-y-2 md:space-y-0 md:space-x-4">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/all-volunteers">All Volunteers</NavLink>
          </li>

          {!user && (
            <li>
              <NavLink className="btn btn-success btn-sm" to="/login">
                Login
              </NavLink>
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
                <NavLink to="/add-volunteer" className="justify-between">
                  Add Volunteer
                </NavLink>
              </li>
              <li>
                <NavLink to="/manage-my-posts">Manage My Post</NavLink>
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
