import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const ContactSection = () => {
  return (
    <section className="py-12 bg-gradient-to-r from-white via-gray-50 to-gray-100">
      <div className="w-10/12 mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-800">Contact With Us</h2>
        <p className="mt-4 text-gray-600 text-lg">
          Have questions or want to get involved? We’d love to hear from you!
        </p>
      </div>

      <div className="mt-8 w-10/12 mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Contact Details */}
        <div className="flex flex-col items-start bg-white shadow-lg rounded-lg p-6 border hover:shadow-xl transition-shadow duration-300">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">Get In Touch</h3>
          <div className="flex items-center text-gray-600 mt-4">
            <FaPhoneAlt className="text-primary mr-4" />
            <p>+8801625842642</p>
          </div>
          <div className="flex items-center text-gray-600 mt-4">
            <FaEnvelope className="text-primary mr-4" />
            <p>muhammadamanullah6001@gmail.com</p>
          </div>
          <div className="flex items-center text-gray-600 mt-4">
            <FaMapMarkerAlt className="text-primary mr-4" />
            <p>Doulatpur, Digholia, Khulna</p>
          </div>

          {/* Social Media Links */}
          <div className="flex mt-6 space-x-4">
            <a href="https://www.facebook.com/profile.php?id=100017794027989" target="_blank" className="text-gray-600 hover:text-primary transition">
              <FaFacebook className="text-2xl" />
            </a>
            <a href="https://x.com/home?lang=en" target="_blank" className="text-gray-600 hover:text-primary transition">
              <FaTwitter className="text-2xl" />
            </a>
            <a href="https://www.instagram.com/amanullah1118/" target="_blank" className="text-gray-600 hover:text-primary transition">
              <FaInstagram className="text-2xl" />
            </a>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-white shadow-lg rounded-lg p-6 border hover:shadow-xl transition-shadow duration-300">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">Send Us a Message</h3>
          <form>
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2">Your Name</label>
              <input
                type="text"
                placeholder="Enter your name"
                className="input input-bordered w-full"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2">Your Email</label>
              <input
                type="email"
                placeholder="Enter your email"
                className="input input-bordered w-full"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2">Your Message</label>
              <textarea
                placeholder="Write your message"
                className="textarea textarea-bordered w-full"
                rows="4"
              ></textarea>
            </div>
            <button className="btn btn-primary w-full">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
