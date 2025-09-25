"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const PasswordChange = () => {
  const router = useRouter();
  const [password, setPassword] = useState("");
  const [password_confirmation, setPasswordConfirmation] = useState("");
  const [loading, setLoading] = useState(false);

  const handleReset = async (e) => {
    e.preventDefault();
    const token =
      typeof window !== "undefined"
        ? localStorage.getItem("reset_password_token")
        : null;
    if (!token) {
      toast.error("Reset token missing. Please verify your email again.");
      return;
    }
    console.log("token:", token);
    if (!password || !password_confirmation) {
      toast.error("Please fill in both password fields.");
      return;
    }
    if (password !== password_confirmation) {
      toast.error("Passwords do not match.");
      return;
    }
    setLoading(true);
    try {
      const formData = new FormData();
      formData.append("password", password);
      formData.append("password_confirmation", password_confirmation);
      formData.append("token", token);

      const res = await fetch(
        "https://apitest.softvencefsd.xyz/api/reset-password",
        {
          method: "POST",
          body: formData,
        }
      );
      const result = await res.json();
      if (result.status === true || result.success === true) {
        toast.success("Password changed successfully!");
        localStorage.removeItem("reset_password_token");
        setTimeout(() => {
          router.push("/login");
        }, 1500);
      } else {
        toast.error(result.message || "Failed to reset password.");
      }
    } catch (err) {
      toast.error("Server error.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <ToastContainer position="top-center" />
      <form
        onSubmit={handleReset}
        className="w-full max-w-md p-6 bg-white shadow-md rounded-2xl"
      >
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Reset Password
        </h2>
        <div className="mb-4">
          <label className="block text-gray-700 mb-1">New Password</label>
          <input
            type="password"
            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            minLength={6}
            required
          />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 mb-1">
            Confirm New Password
          </label>
          <input
            type="password"
            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none"
            value={password_confirmation}
            onChange={(e) => setPasswordConfirmation(e.target.value)}
            minLength={6}
            required
          />
        </div>
        <button
          type="submit"
          disabled={loading}
          className={`w-full py-3 font-semibold rounded-lg transition ${
            loading
              ? "bg-gray-400 text-white cursor-not-allowed"
              : "bg-green-600 text-white hover:bg-green-700"
          }`}
        >
          {loading ? "Resetting..." : "Reset Password"}
        </button>
      </form>
    </div>
  );
};

export default PasswordChange;
