import React, { useState, useEffect } from "react";

import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

import { Routes, Route, Navigate } from "react-router-dom";

import Add from "../pages/Add";
import List from "../pages/List";
import Orders from "../pages/Orders";
import Login from "../components/Login";

import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

import api, { setAccessToken } from "../api/api.js";

export const backendUrl = import.meta.env.VITE_BACKEND_URL;

export const currency = "$";

const App = () => {

  const [token, setToken] = useState("");


  const [authLoading, setAuthLoading] = useState(true);



  useEffect(() => {
    const restoreAdminSession = async () => {
      console.log("Checking admin session...");

      try {
        const response = await api.post("/admin/refresh");

        console.log("Admin refresh response:", response.data);

        if (response.data.accessToken) {
          const newAccessToken = response.data.accessToken;

          setAccessToken(newAccessToken);

          setToken(newAccessToken);

          console.log("Admin session restored");
        } else {
          setAccessToken(null);
          setToken("");
        }
      } catch (error) {
        console.log("No active admin session");

        setAccessToken(null);
        setToken("");
      } finally {
        setAuthLoading(false);
      }
    };

    restoreAdminSession();
  }, []);



  if (authLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>Checking authentication...</p>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen">
      <ToastContainer />

      {token === "" ? (
        <Routes>
       
          <Route path="/login" element={<Login setToken={setToken} />} />

          
          <Route path="*" element={<Navigate to="/login" replace />} />
        </Routes>
      ) : (
        <>
          <Navbar setToken={setToken} />

          <hr />

          <div className="flex w-full">
            <Sidebar />

            <div className="w-[70%] mx-auto ml-[max(5vw,25px)] my-8 text-gray-600 text-base">
              <Routes>

                <Route path="/" element={<Navigate to="/list" replace />} />

                <Route path="/add" element={<Add token={token} />} />

                <Route path="/list" element={<List token={token} />} />

                <Route path="/orders" element={<Orders token={token} />} />

                <Route path="*" element={<Navigate to="/" replace />} />
              </Routes>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default App;
