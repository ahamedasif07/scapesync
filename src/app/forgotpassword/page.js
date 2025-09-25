"use client";

import VerificationForgot from "@/components/Verification/VerificationForgot";
import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [successUser, setSuccessUser] = useState("");
  const [loading, setLoading] = useState(false);
  const [otpModel, setOtpModel] = useState(false); // Added state

  const handleForgotPassword = async (e) => {
    e.preventDefault();

    if (!email) {
      toast.error("Please enter your email address!");
      return;
    }

    try {
      setLoading(true);

      const formData = new FormData();
      formData.append("email", email);

      const response = await fetch(
        "https://apitest.softvencefsd.xyz/api/forgot-password",
        {
          method: "POST",
          body: formData,
        }
      );

      const result = await response.json();

      if (response.ok) {
        toast.success(result.message || "Password reset link sent to email!");
        console.log("forgotpassword", result);
        // Pass both email and otp to VerificationForgot
        setSuccessUser({ email, otp: result?.data?.otp });
        setOtpModel(true); // Show OTP modal
      } else {
        toast.error(result.message || "Something went wrong!");
      }
    } catch (error) {
      toast.error("Failed to send request. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <ToastContainer position="top-center" />
      {otpModel ? (
        <VerificationForgot successUser={successUser} />
      ) : (
        <div className="min-h-screen flex items-center justify-center bg-white">
          <div className="w-full max-w-md bg-white p-6 rounded-xl shadow-none">
            <h2 className="text-2xl font-semibold text-center">
              Forgot Password
            </h2>
            <p className="text-[13px] mt-[4px] text-gray-400 text-center mb-6">
              Enter your email address to reset your password.
            </p>

            <form onSubmit={handleForgotPassword} className="space-y-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email address"
                className="w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-green-500 outline-none"
              />

              <button
                type="submit"
                className={`w-full bg-green-600 text-white py-2 rounded-md hover:bg-green-700 transition ${
                  loading ? "opacity-50 cursor-not-allowed" : ""
                }`}
                disabled={loading}
              >
                {loading ? "Sending..." : "Send Reset Link"}
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
