import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Input from "../components/input";

function RepairPage3() {
  const [formData, setFormData] = useState({
    mobileModel: "",
    firstName: "",
    lastName: "",
    city: "",
    zipCode: "",
    streetAddress: ""
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Check if all fields are filled
    if (Object.values(formData).every(field => field.trim() !== "")) {
      console.log(JSON.stringify(formData));
      // Navigate to the next page
      navigate("/nextPage");
    } else {
      alert("Please fill in all fields.");
    }
  };

  return (
    <>
      <Navbar />

      <div className="px-5 py-10">
        <h1 className="text-4xl mt-10">Enter your information below</h1>
        <p className="text-xl mt-3 mb-5">
          We'll get your device back to you in no time, and at the best price.
        </p>
        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
          <Input
            placeholder="Mobile Model"
            name="mobileModel"
            value={formData.mobileModel}
            onChange={handleChange}
            required
          />
          <Input
            placeholder="First Name"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            required
          />
          <Input
            placeholder="Last Name"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            required
          />
          <Input
            placeholder="City"
            name="city"
            value={formData.city}
            onChange={handleChange}
            required
          />
          <Input
            placeholder="Zip Code"
            name="zipCode"
            value={formData.zipCode}
            onChange={handleChange}
            required
          />
          <Input
            placeholder="Street Address"
            name="streetAddress"
            value={formData.streetAddress}
            onChange={handleChange}
            required
          />

          <div className="flex flex-wrap gap-7 mt-5">
            <Link to="/RepairPage2">
              <button className="px-5 py-2 rounded-3xl text-lg text-white bg-teal-500 shadow-allShadow mt-2 mb-7 w-full sm:w-auto">
                Go back
              </button>
            </Link>
            <button
              type="submit"
              className="px-5 py-2 rounded-3xl text-lg text-white bg-teal-500 shadow-allShadow mt-2 mb-7 w-full sm:w-auto"
            >
              Next
            </button>
          </div>
        </form>
      </div>

      <Footer />
    </>
  );
}

export default RepairPage3;
