import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import {
  FaUser,
  FaEnvelope,
  FaPhone,
  FaLock,
  FaUnlockAlt,
} from "react-icons/fa"; // Import icons
import FacebookLoginButton from "../components/FacebookLoginButton";
import GoogleLoginButton from "../components/GoogleLoginButton";
import { Link } from "react-router-dom";

const Register = () => {
  const validationSchema = Yup.object({
    fullName: Yup.string()
      .min(2, "Full name must be at least 2 characters")
      .required("Full name is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    phone: Yup.string()
      .matches(/^\d+$/, "Phone number must be digits only")
      .min(10, "Phone number must be at least 10 digits")
      .required("Phone number is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters long")
      .required("Password is required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password")], "Passwords must match")
      .required("Confirm password is required"),
  });

  const formik = useFormik({
    initialValues: {
      fullName: "",
      email: "",
      phone: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema,
    onSubmit: (values) => {
      console.log("Form values:", values);
    },
  });

  return (
    <div className="h-screen flex flex-col items-center justify-center">
      <form
        className="border-3 flex flex-col justify-center items-center gap-7 rounded-md shadow-lg p-16"
        onSubmit={formik.handleSubmit}
      >
        <div>
          <h1 className="text-2xl font-bold text-center mb-3">
            Create your account
          </h1>
          <p className="text-center mx-3 text-gray-500 text-sm font-normal">
            Join us and start exploring the benefits of your profile <br />
            It is free and easy to sign up!
          </p>
        </div>
        <div className="flex flex-col gap-4">
          {/* Full Name Input with Icon */}
          <div className="relative w-80">
            <FaUser className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              id="fullName"
              name="fullName"
              placeholder="Full Name"
              className="p-2 pl-8 w-full rounded-md border-2 border-gray-400"
              value={formik.values.fullName}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.fullName && formik.errors.fullName && (
              <div className="text-red-500 text-sm">
                {formik.errors.fullName}
              </div>
            )}
          </div>

          {/* Email Input with Icon */}
          <div className="relative w-80">
            <FaEnvelope className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              id="email"
              name="email"
              placeholder="Email"
              className="p-2 pl-8 w-full rounded-md border-2 border-gray-400"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.email && formik.errors.email && (
              <div className="text-red-500 text-sm">{formik.errors.email}</div>
            )}
          </div>

          {/* Phone Input with Icon */}
          <div className="relative w-80">
            <FaPhone className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              id="phone"
              name="phone"
              placeholder="Phone number"
              className="p-2 pl-8 w-full rounded-md border-2 border-gray-400"
              value={formik.values.phone}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.phone && formik.errors.phone && (
              <div className="text-red-500 text-sm">{formik.errors.phone}</div>
            )}
          </div>

          {/* Password Input with Icon */}
          <div className="relative w-80">
            <FaLock className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Password"
              className="p-2 pl-8 w-full rounded-md border-2 border-gray-400"
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.password && formik.errors.password && (
              <div className="text-red-500 text-sm">
                {formik.errors.password}
              </div>
            )}
          </div>

          {/* Confirm Password Input with Icon */}
          <div className="relative w-80">
            <FaUnlockAlt className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              placeholder="Confirm Password"
              className="p-2 pl-8 w-full rounded-md border-2 border-gray-400"
              value={formik.values.confirmPassword}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.confirmPassword &&
              formik.errors.confirmPassword && (
                <div className="text-red-500 text-sm">
                  {formik.errors.confirmPassword}
                </div>
              )}
          </div>
        </div>

        <button
          type="submit"
          className="bg-blue-600 text-white p-2 w-80 rounded-sm font-semibold"
        >
          Create Account
        </button>

        <div className="flex gap-2 justify-center items-baseline">
          <div className="border-[1px] w-28 h-0 border-gray-400"></div>
          <p>Or</p>
          <div className="border-[1px] w-28 h-0 border-gray-400"></div>
        </div>

        <div className="flex gap-3 justify-center ml-3">
          <GoogleLoginButton />
          <FacebookLoginButton />
        </div>

        <div>
          <p>
            Already have an account?{" "}
            <Link
              to="/"
              className="text-blue-500 font-semibold underline underline-offset-4"
            >
              Log in
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Register;
