"use client";
import { useRouter } from "next/navigation";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Verification = ({ successUser }) => {
  const router = useRouter();

  // Email state
  const [email, setEmail] = useState("");
  // OTP state
  const [otp, setOtp] = useState(Array(6).fill(""));
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  // Fill email and OTP when successUser is available
  useEffect(() => {
    if (successUser?.email) {
      setEmail(successUser.email);
    }
    if (successUser?.otp) {
      setOtp(successUser.otp.split(""));
    }
  }, [successUser]);

  // Update OTP digits
  const handleChange = (value, index) => {
    if (/^[0-9]?$/.test(value)) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);

      // Auto focus next input
      if (value && index < 5) {
        const nextInput = document.getElementById(`otp-${index + 1}`);
        if (nextInput) nextInput.focus();
      }
    }
  };

  // Backspace navigation
  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      const prevInput = document.getElementById(`otp-${index - 1}`);
      if (prevInput) prevInput.focus();
    }
  };

  // Verify OTP API call
  const handleVerify = async (e) => {
    if (e && e.preventDefault) e.preventDefault();
    setError("");

    if (!email) {
      toast.error("Email is missing. Please go back and register again.");
      return;
    }

    const code = otp.join("");

    if (!code.trim()) {
      toast.error("Enter the verification code");
      return;
    }

    try {
      setLoading(true);

      const url = "https://apitest.softvencefsd.xyz/api/verify_otp";
      const res = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, otp: code.trim() }),
      });

      const result = await res.json();
      console.log("Verify response:", result);

      if (result.status === true || result.success === true) {
        toast.success("Email verified successfully!");
        setTimeout(() => {
          router.push("/login");
        }, 1500);
      } else {
        toast.error(result.message || "Invalid code, try again");
      }
    } catch (err) {
      console.error("Verify error:", err);
      toast.error("Server error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen ">
      <ToastContainer position="top-center" />
      <div className="w-full max-w-md p-6 bg-white shadow-md rounded-2xl">
        {/* Back button */}
        <Link href="/registration">
          <button className="text-green-600 text-sm flex items-center mb-4">
            ← Back
          </button>
        </Link>

        {/* Title */}
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">
          Please check your email!
        </h2>
        <p className="text-gray-500 text-sm mb-6">
          We’ve emailed a 6-digit confirmation code to{" "}
          <b>{email || "your email"}</b>, please enter the code below to verify
          your email.
        </p>

        {/* OTP Inputs */}
        <div className="flex justify-between mb-6">
          {otp.map((digit, index) => (
            <input
              key={index}
              id={`otp-${index}`}
              type="text"
              maxLength="1"
              value={digit}
              onChange={(e) => handleChange(e.target.value, index)}
              onKeyDown={(e) => handleKeyDown(e, index)}
              className="w-12 h-12 border border-gray-300 rounded-lg text-center text-xl focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          ))}
        </div>

        {/* Verify Button */}
        <button
          onClick={handleVerify}
          disabled={loading}
          className={`w-full py-3 font-semibold rounded-lg transition ${
            loading
              ? "bg-gray-400 text-white cursor-not-allowed"
              : "bg-green-600 text-white hover:bg-green-700"
          }`}
        >
          {loading ? "Verifying..." : "Verify"}
        </button>

        {/* Resend Code */}
        <p className="text-center text-sm text-gray-500 mt-4">
          Don’t have a code?{" "}
          <button className="text-green-600 hover:underline">
            Resend code
          </button>
        </p>
      </div>
    </div>
  );
};

export default Verification;
