import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-blue-900 via-indigo-900 to-purple-900 text-white py-12">
      <div className="w-10/12 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Column 1: Logo & Description */}
        <div className="space-y-4">
          <h2 className="text-3xl font-bold">Volunteer Fest</h2>
          <p>
            We connect passionate individuals with volunteer opportunities to
            make a meaningful impact. Join us today to help create positive
            change!
          </p>
        </div>

        {/* Column 2: Quick Links */}
        <div className="space-y-4">
          <h3 className="text-xl font-semibold">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:text-primary">
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="hover:text-primary">
                About Us
              </a>
            </li>
            <li>
              <a href="#volunteers" className="hover:text-primary">
                Volunteer Opportunities
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-primary">
                Contact Us
              </a>
            </li>
          </ul>
        </div>

        {/* Column 3: Contact */}
        <div className="space-y-4">
          <h3 className="text-xl font-semibold">Contact</h3>
          <p>Doualtpur, Digholia, Khulna</p>
          <p>Phone: +01625842642</p>
          <p>Email: muhammadamanullah6001@gmail.com</p>
        </div>

        {/* Column 4: Social Media */}
        <div className="space-y-4">
          <h3 className="text-xl font-semibold">Follow Us</h3>
          <div className="flex space-x-4">
            <a href="https://www.facebook.com/profile.php?id=100017794027989" target="_blank" className="text-gray-300 hover:text-primary transition">
              <FaFacebook className="text-2xl" />
            </a>
            <a href="https://x.com/home?lang=en" target="_blank" className="text-gray-300 hover:text-primary transition">
              <FaTwitter className="text-2xl" />
            </a>
            <a href="https://www.instagram.com/amanullah1118/" target="_blank" className="text-gray-300 hover:text-primary transition">
              <FaInstagram className="text-2xl" />
            </a>
            <a href="https://www.linkedin.com/in/amanurmi/" target="_blank" className="text-gray-300 hover:text-primary transition">
              <FaLinkedin className="text-2xl" />
            </a>
          </div>
        </div>
      </div>

      <div className="mt-12 text-center">
        <p className="text-sm">
          &copy; 2024 Volunteers Fest. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
