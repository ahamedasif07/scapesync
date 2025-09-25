"use client";
import Link from "next/link";
import React, { useState } from "react";

const Verification = ({ email }) => {
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Update OTP digits
  const handleChange = (value, index) => {
    if (/^[0-9]?$/.test(value)) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);

      // Auto focus next box
      if (value && index < 5) {
        document.getElementById(`otp-${index + 1}`).focus();
      }
    }
  };

  // Backspace navigation
  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      document.getElementById(`otp-${index - 1}`).focus();
    }
  };

  // Verify API call
  const handleVerify = async (e) => {
    e.preventDefault();
    setError("");

    const code = otp.join(""); // combine digits

    if (!code.trim()) {
      setError("Enter the verification code");
      return;
    }

    try {
      setLoading(true);

      const res = await fetch(
        "https://apitest.softvencefsd.xyz/api/verify-code",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            email: email, // pass user email from props
            code: code.trim(),
          }),
        }
      );

      const result = await res.json();
      console.log(result);

      if (result.status) {
        alert("Email verified successfully!");
        window.location.href = "/login";
      } else {
        setError(result.message || "Invalid code, try again");
      }
    } catch (err) {
      console.error(err);
      setError("Server error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen ">
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

        {/* OTP Boxes */}
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

        {/* Error message */}
        {error && (
          <p className="text-red-500 text-sm text-center mb-4">{error}</p>
        )}

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
