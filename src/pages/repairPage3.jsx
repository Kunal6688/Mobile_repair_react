import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Input from "../components/input";

function RepairPage3() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Form Data:", data);
    // Add your form submission logic here
  };

  return (
    <>
      <Navbar />

      <div className="px-5 py-10">
        <h1 className="text-4xl mt-10">Enter your information below</h1>
        <p className="text-xl mt-3 mb-5">
          We'll get your device back to you in no time, and at the best price.
        </p>
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-3">
          <Input
            type="text"
            placeholder="Mobile Model"
            {...register("mobileModel", { required: "Mobile Model is required" })}
          />
          {errors.mobileModel && <p className="text-red-500">{errors.mobileModel.message}</p>}

          <Input
            type="text"
            placeholder="First Name"
            {...register("firstName", { required: "First Name is required" })}
          />
          {errors.firstName && <p className="text-red-500">{errors.firstName.message}</p>}

          <Input
            type="text"
            placeholder="Last Name"
            {...register("lastName", { required: "Last Name is required" })}
          />
          {errors.lastName && <p className="text-red-500">{errors.lastName.message}</p>}

          <Input
            type="text"
            placeholder="City"
            {...register("city", { required: "City is required" })}
          />
          {errors.city && <p className="text-red-500">{errors.city.message}</p>}

          <Input
            type="text"
            placeholder="Pin Code"
            {...register("zipCode", { required: "Zip Code is required" })}
          />
          {errors.zipCode && <p className="text-red-500">{errors.zipCode.message}</p>}

          <Input
            type="text"
            placeholder="Street Address"
            {...register("streetAddress", { required: "Street Address is required" })}
          />
          {errors.streetAddress && <p className="text-red-500">{errors.streetAddress.message}</p>}

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
