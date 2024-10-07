import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import FacebookLoginButton from "../components/FacebookLoginButton";
import GoogleLoginButton from "../components/GoogleLoginButton";
import { Link } from "react-router-dom";


const Login = () => {
  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters long")
      .required("Password is required"),
  });

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
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
            Log in to your account
          </h1>
          <p className="text-center mx-3 text-gray-500 text-sm font-normal">
            Get a more personalized experience where you do not
            <br /> need to fill in your info every time
          </p>
        </div>
        <div className="flex flex-col gap-4">
          <input
            type="text"
            id="email"
            name="email"
            placeholder="Email"
            className="p-2 w-80 rounded-md border-2 border-gray-400"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.email && formik.errors.email && (
            <div className="text-red-500 text-sm">{formik.errors.email}</div>
          )}

          <input
            type="password"
            id="password"
            name="password"
            placeholder="Password"
            className="p-2 rounded-md border-2 border-gray-400"
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.password && formik.errors.password && (
            <div className="text-red-500 text-sm">{formik.errors.password}</div>
          )}
        </div>
        <div className="flex justify-between gap-20 mt-[-16px]">
          <label>
            <input
              type="checkbox"
              id="rememberMe"
              name="rememberMe"
              onChange={formik.handleChange}
              checked={formik.values.rememberMe}
            />
            Remember me
          </label>
          <p className="text-blue-500 font-semibold underline underline-offset-4">
            Forgot Password?
          </p>
        </div>
        <button
          type="submit"
          className="bg-blue-600 text-white p-2 w-80 rounded-sm font-semibold"
        >
          Log in
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
            {`Don't have an account? `}
            <Link
              to="/register"
              className="text-blue-500 font-semibold underline underline-offset-4"
            >
              Create an account
            </Link>
          </p>
        </div>      </form>
    </div>
  );
};

export default Login;
