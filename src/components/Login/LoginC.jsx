import Link from "next/link";
import React from "react";

export default function LoginC() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="w-full max-w-md bg-white p-6 rounded-xl shadow-none">
        {/* <div className="flex justify-start mb-6">
          <img src="/logo.png" alt="ScapeSync" className="h-10" />
        </div> */}

        <h2 className="text-2xl font-semibold text-center">
          Welcome to ScapeSync
        </h2>
        <p className="text-[13px] mt-[4px] text-gray-400 text-center mb-6">
          Please share your login details so you can access the website.
        </p>

        {/* -----------------------------------------Form-------------------------------- */}
        <form className="space-y-4">
          <input
            type="email"
            placeholder="Email address"
            className="w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-green-500 outline-none"
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-green-500 outline-none"
          />

          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center">
              <input type="checkbox" className="mr-2 accent-green-600" />
              <span>Remember me</span>
            </label>
            <a href="#" className="text-green-600 hover:underline">
              Forgot password?
            </a>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-green-600 text-white py-2 rounded-md hover:bg-green-700 transition"
          >
            Create Account
          </button>
        </form>

        {/* Divider */}
        <div className="flex items-center my-6">
          <hr className="flex-grow border-gray-300" />
          <span className="mx-2 text-gray-400 text-sm">OR</span>
          <hr className="flex-grow border-gray-300" />
        </div>

        {/* Google Sign-in */}
        <button className="w-full flex items-center justify-center gap-2 border py-2 rounded-md hover:bg-gray-50 transition">
          <img
            src="https://www.svgrepo.com/show/355037/google.svg"
            alt="Google"
            className="h-5 w-5"
          />
          Continue with Google
        </button>

        {/* Footer */}
        <p className="text-center text-sm text-gray-600 mt-6">
          Don’t have an account ?
          <Link href="/registration">
            <span className="text-green-600"> Get started</span>
          </Link>
        </p>
      </div>
    </div>
  );
}
