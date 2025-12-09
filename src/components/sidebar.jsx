import React, { useState } from "react";
import FeedbackForm from "./FeedbackForm.jsx";
import { useNavigate } from "react-router-dom";
function Sidebar({ toggleView, setToggleView }) {
  const [openForm, setOpenForm] = useState(false);
const navigate =useNavigate();
  return (
    <div>
      <button
        data-drawer-target="default-sidebar"
        data-drawer-toggle="default-sidebar"
        aria-controls="default-sidebar"
        type="button"
        className="text-gray-700 bg-white border shadow-sm hover:bg-gray-100 
                   focus:ring-4 focus:ring-gray-300 rounded-lg p-2 m-3 sm:hidden"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            d="M5 7h14M5 12h14M5 17h10"
          />
        </svg>
      </button>

      <aside
        id="default-sidebar"
        className="fixed top-0 left-0 z-40 w-64 h-full -translate-x-full 
                   sm:translate-x-0 transition-transform bg-white  shadow-xl"
        aria-label="Sidebar"
      >
        <div className="h-full px-5  overflow-y-auto  flex flex-col gap-10 justify-around ">
          <ul className="space-y-8">

            <li>
              <div className="flex items-center gap-4 bg-gray-50 p-4 rounded-xl shadow-sm ">
                <img
                  src="https://picsum.photos/60"
                  alt="user"
                  className="w-14 h-14 rounded-full border shadow-sm"
                />
                <div>
                  <p className="font-semibold text-xl text-gray-700">Hi Reader</p>
                  <p className="text-gray-500 text-sm">Here's your News!</p>
                </div>
              </div>
            </li>

            <li>
              <div className="bg-gray-50 p-4 rounded-xl shadow-sm  text-center">
                <p className="font-semibold text-lg mb-3 text-gray-700">View Toggle</p>

                <label className="inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    className="sr-only peer"
                    checked={toggleView}
                    onChange={() => setToggleView(!toggleView)}
                  />

                  <div className="relative w-12 h-6 bg-gray-300 rounded-full peer-checked:bg-green-600 transition">
                    <div
                      className="absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full shadow 
                                 transition-all peer-checked:translate-x-6"
                    ></div>
                  </div>

                  <span className="ml-3 text-gray-700 font-medium">
                    {toggleView ? "Card View" : "Table View"}
                  </span>
                </label>
              </div>
            </li>

            <li>
              <div className="bg-gray-50 p-4 rounded-xl shadow-sm  text-center">
                <p className="font-semibold text-lg mb-2 text-gray-700">Have Feedback?</p>
                <button
                  type="button"
                  className="bg-white border text-gray-700 hover:bg-gray-200 
                             font-medium rounded-lg px-5 py-2 shadow"
                
  onClick={() => navigate('./Feedbackform')}>
                  We're Listening!
                </button>
              </div>
            </li>

          </ul>
        </div>

      </aside>
    </div>
  );
}

export default Sidebar;
