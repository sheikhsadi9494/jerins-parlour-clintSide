import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const SignUp = () => {
  const { register, handleSubmit, formState: { errors }} = useForm();
  const handleSignUp = (data) => {
    console.log(data);
  };

  return (
    <div className="px-3 md:px-0">
      <div className="border-2 border-gray-300 px-6 md:px-8 py-10 rounded-xl mt-16 lg:w-1/3 md:w-2/4 mx-auto">
        <p className="text-3xl font-semibold mb-6">Create an account</p>
        <form onSubmit={handleSubmit(handleSignUp)}>
          <label htmlFor="fullName" className="">
            Full Name
          </label>
          <input
            id="fullName"
            type="text"
            placeholder="enter your full name"
            className="input input-bordered w-full bg-gray-100 mb-2 mt-1"
            {...register("fullName", { required: "full name is required"})}
          />
          {errors.fullName && <p className="text-red-500">{errors.fullName?.message}</p>}
          <label htmlFor="email" className="">
            Email
          </label>
          <input
            id="email"
            type="email"
            placeholder="enter your email address"
            className="input input-bordered w-full bg-gray-100 mb-2 mt-1"
            {...register("email", { required: "email is required"})}
          />
          {errors.email && <p className="text-red-500">{errors.email?.message}</p>}
          <label htmlFor="password" className="">
            Password
          </label>
          <input
            id="password"
            type="password"
            placeholder="enter your password"
            className="input input-bordered w-full bg-gray-100 mb-2 mt-1"
            {...register("password", { required: "password is required"})}
          />
          {errors.password && <p className="text-red-500">{errors.password?.message}</p>}
          <button
            type="submit"
            className="btn btn-primary text-white w-full mt-3"
          >
            Sign Up
            </button>
          <p className="text-center mt-6">
            already have an account? please{" "}
            <Link to="/login" className="font-bold underline text-primary">
              Login
            </Link>
          </p>
        </form>
      </div>
      <div className="divider text-center w-80 mx-auto mt-8">OR</div>
      <div className="lg:w-1/4 md:w-2/4 mx-auto mb-9">
        <button
          type="submit"
          className="btn btn-outline w-full mt-3 rounded-full capitalize"
        >
          <img style={{width: '36px'}} src="https://i.ibb.co/Fmjk2JZ/download-removebg-preview.png" alt="" />
          <div className="ml-2">
          Continue with Google
          </div>
        </button>
      </div>
    </div>
  );
};

export default SignUp;
