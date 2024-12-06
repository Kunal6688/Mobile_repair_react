import React from "react";
import { useForm } from "react-hook-form";
import PhoneCall from "../assets/phonecall.png";
import Email from "../assets/email.png";
import Location from "../assets/location.png";
import Facebook from "../assets/facebook.png";
import Instagram from "../assets/instagram.png";
import Twitter from "../assets/x.png";

const ContactUs = () => {
  // Initialize react-hook-form
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // Form submission handler
  const onSubmit = (data) => {
    console.log("Form Data Submitted:", data);
    alert("Form Submitted Successfully!");
  };

  return (
    <div className="flex flex-col md:flex-row bg-gray-50 p-8 rounded-lg mx-4 md:mx-20 mt-12">
      {/* Left Side */}
      <div className="md:w-1/2 bg-teal-500 text-white p-8 rounded-lg md:rounded-r-none">
        <h2 className="text-2xl font-semibold mb-4">Contact Information</h2>
        <p className="mb-6">Say something to start a live chat!</p>
        <div className="space-y-4 mt-24">
          <div className="flex items-center">
            <img className="w-6 h-6 mr-4" src={PhoneCall} alt="Phone" />
            <span>+91 9351969490</span>
          </div>
          <div className="flex items-center">
            <img className="w-6 h-6 mr-4" src={Email} alt="Email" />
            <span>kunal123@gmail.com</span>
          </div>
          <div className="flex items-start">
            <img className="w-6 h-6 mr-4" src={Location} alt="Location" />
            <span>SS Repairs, Alwar, Pin-301001</span>
          </div>
        </div>
        <div className="flex space-x-4 mt-8">
          <a href="#" className="text-white hover:text-gray-300">
            <img className="w-8 h-8" src={Facebook} alt="Facebook" />
          </a>
          <a href="#" className="text-white hover:text-gray-300">
            <img className="w-8 h-8" src={Instagram} alt="Instagram" />
          </a>
          <a href="#" className="text-white hover:text-gray-300">
            <img className="w-7 h-7" src={Twitter} alt="Twitter" />
          </a>
        </div>
      </div>

      {/* Right Side */}
      <div className="md:w-1/2 bg-white p-8 rounded-lg md:rounded-l-none mt-8 md:mt-0">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <input
                type="text"
                placeholder="First Name"
                {...register("firstName", {
                  required: "First name is required",
                })}
                className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
              />
              {errors.firstName && (
                <p className="text-red-500 text-sm">
                  {errors.firstName.message}
                </p>
              )}
            </div>
            <div>
              <input
                type="text"
                placeholder="Last Name"
                {...register("lastName", { required: "Last name is required" })}
                className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
              />
              {errors.lastName && (
                <p className="text-red-500 text-sm">
                  {errors.lastName.message}
                </p>
              )}
            </div>
          </div>
          <div>
            <input
              type="email"
              placeholder="Email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^\S+@\S+$/i,
                  message: "Enter a valid email address",
                },
              })}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email.message}</p>
            )}
          </div>
          <div>
            <input
              type="tel"
              placeholder="Phone Number"
              {...register("phone", {
                required: "Phone number is required",
                pattern: {
                  value: /^[0-9]{10}$/,
                  message: "Enter a valid 10-digit phone number",
                },
              })}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
            {errors.phone && (
              <p className="text-red-500 text-sm">{errors.phone.message}</p>
            )}
          </div>
          <div>
            <label className="block text-gray-600 mb-2">Select Subject:</label>
            <div className="space-x-4">
              {[
                "General Inquiry",
                "Shipment Inquiry",
                "Product Inquiry",
                "Refund Inquiry",
              ].map((subject, index) => (
                <label key={index} className="inline-flex items-center">
                  <input
                    type="radio"
                    value={subject}
                    {...register("subject", {
                      required: "Please select a subject",
                    })}
                    className="text-teal-500 focus:ring-teal-500"
                  />
                  <span className="ml-2">{subject}</span>
                </label>
              ))}
            </div>
            {errors.subject && (
              <p className="text-red-500 text-sm">{errors.subject.message}</p>
            )}
          </div>
          <div>
            <textarea
              placeholder="Write your message.."
              rows="4"
              {...register("message", { required: "Message is required" })}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
            ></textarea>
            {errors.message && (
              <p className="text-red-500 text-sm">{errors.message.message}</p>
            )}
          </div>
          <button
            type="submit"
            className="w-full bg-teal-500 text-white py-3 rounded-lg hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-500"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
