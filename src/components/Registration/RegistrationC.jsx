"use client";
import { convertSegmentPathToStaticExportFilename } from "next/dist/shared/lib/segment-cache/segment-value-encoding";
import { useRouter } from "next/router";
import React, { useState } from "react";

export default function RegistrationC() {
  // const router = useRouter();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  console.log({
    firstName,
    lastName,
    email,
    password,
    confirmPassword,
    error,
    loading,
  });
  // sent registration data in api
  const handleRegister = async (e) => {
    e.preventDefault();
    setError("");

    // basic validation
    if (!firstName || !lastName || !email || !password || !confirmPassword) {
      setError("Fill up all fields properly");
      return;
    }
    if (password !== confirmPassword) {
      setError("Password Not match");
      return;
    }

    try {
      setLoading(true);
      const res = await fetch("https://apitest.softvencefsd.xyz/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          first_name: firstName,
          last_name: lastName,
          email,
          password,
        }),
      });

      const result = await res.json();
      console.log(result);
      if (result.status) {
        alert("Registration Successful!");
        router.push("/login");
      } else {
        setError(result.message || "Registration failed");
      }
    } catch (err) {
      console.error(err);
      setError("Server error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="w-full max-w-md bg-white p-6 rounded-xl shadow-none">
        {/* <div className="flex justify-start mb-6">
          <img src="/logo.png" alt="ScapeSync" className="h-10" />
        </div> */}

        <h2 className="text-2xl font-semibold text-center">
          Create your Account
        </h2>
        <p className="text-[13px] mt-[4px] text-gray-400 text-center mb-6">
          When sports Meets smart Tech.
        </p>

        {/* -----------------------------------------Form-------------------------------- */}
        <form className="space-y-4">
          <div className="flex gap-3">
            <input
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              placeholder="First Name"
              className="w-1/2 px-3 py-2 border rounded-md focus:ring-2 focus:ring-green-500 outline-none"
            />
            <input
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              placeholder="Last name"
              className="w-1/2 px-3 py-2 border rounded-md focus:ring-2 focus:ring-green-500 outline-none"
            />
          </div>

          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email address"
            className="w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-green-500 outline-none"
          />

          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            className="w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-green-500 outline-none"
          />

          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder="Confirm Password"
            className="w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-green-500 outline-none"
          />

          <div className="flex items-center text-sm">
            <input type="checkbox" className="mr-2 accent-green-600" />
            <span>
              I agree to Tech Takes{" "}
              <a href="#" className="text-green-600 underline">
                Terms of Service
              </a>{" "}
              and{" "}
              <a href="#" className="text-green-600 underline">
                Privacy Policy
              </a>
              .
            </span>
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
          Don’t have an account?{" "}
          <a href="#" className="text-green-600 font-medium">
            Get started
          </a>
        </p>
      </div>
    </div>
  );
}
