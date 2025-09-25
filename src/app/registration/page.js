"use client";

import Verification from "@/components/Verification/Verification";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function RegistrationC() {
  const router = useRouter();
  const [firstName, setFirstName] = useState("");
  const [otpModel, setOtpModel] = useState(false);
  const [successUser, setSuccessUser] = useState("");

  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleRegister = async (e) => {
    e.preventDefault();
    setError("");

    // Validation
    if (!firstName || !lastName || !email || !password || !confirmPassword) {
      toast.error("Fill up all fields properly");
      return;
    }

    const trimmedEmail = email.trim();
    const trimmedPassword = password.trim();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(trimmedEmail)) {
      toast.error("Invalid email address");
      return;
    }

    if (trimmedPassword.length < 6) {
      toast.error("Password must be at least 6 characters");
      return;
    }

    if (trimmedPassword !== confirmPassword.trim()) {
      toast.error("Passwords do not match");
      return;
    }

    try {
      setLoading(true);
      const res = await fetch("https://apitest.softvencefsd.xyz/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          first_name: firstName,
          last_name: lastName,
          email: trimmedEmail,
          password: trimmedPassword,
          password_confirmation: confirmPassword.trim(),
        }),
      });

      const result = await res.json();
      console.log("result", result);

      if (result.status === 201) {
        setSuccessUser(result?.data);
        setOtpModel(true);
        toast.success("Registration successful! Please verify your email.");
      } else {
        if (result.errors) {
          const messages = Object.values(result.errors).flat().join(" ");
          toast.error(messages);
        } else {
          toast.error(result.message || "Registration failed");
        }
      }
    } catch (err) {
      console.error(err);
      toast.error("Server error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <ToastContainer position="top-center" />
      {otpModel ? (
        <Verification successUser={successUser} />
      ) : (
        <div className="min-h-screen flex items-center justify-center bg-white">
          <div className="w-full max-w-md bg-white p-6 rounded-xl shadow-none">
            <h2 className="text-2xl font-semibold text-center">
              Create your Account
            </h2>
            <p className="text-[13px] mt-[4px] text-gray-400 text-center mb-6">
              When sports Meets smart Tech.
            </p>

            <form onSubmit={handleRegister} className="space-y-4">
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

              <button
                type="submit"
                className={`w-full bg-green-600 text-white py-2 rounded-md hover:bg-green-700 transition ${
                  loading ? "opacity-50 cursor-not-allowed" : ""
                }`}
                disabled={loading}
              >
                {loading ? "Creating Account..." : "Create Account"}
              </button>
            </form>

            <div className="flex items-center my-6">
              <hr className="flex-grow border-gray-300" />
              <span className="mx-2 text-gray-400 text-sm">OR</span>
              <hr className="flex-grow border-gray-300" />
            </div>

            <button className="w-full flex items-center justify-center gap-2 border py-2 rounded-md hover:bg-gray-50 transition">
              <img
                src="https://www.svgrepo.com/show/355037/google.svg"
                alt="Google"
                className="h-5 w-5"
              />
              Continue with Google
            </button>

            <p className="text-center text-sm text-gray-600 mt-6">
              Don’t have an account?{" "}
              <a href="#" className="text-green-600 font-medium">
                Get started
              </a>
            </p>
          </div>
        </div>
      )}
    </>
  );
}
