import React from "react";

function FeedbackForm() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">

      <div className="bg-white w-full max-w-lg p-8 rounded-2xl shadow-lg border">

        <h2 className="text-2xl font-bold text-gray-800 mb-1">
          Thank you so much for taking the time!
        </h2>

        <p className="text-gray-600 mb-6">
          Please provide the details below.
        </p>

        <form className="space-y-5">

          <div className="flex flex-col">
            <label className="font-medium text-gray-700">First Name</label>
            <input
              type="text"
              placeholder="First Name"
              className="border rounded-lg p-3 "
            />
          </div>

          <div className="flex flex-col">
            <label className="font-medium text-gray-700">Last Name</label>
            <input
              type="text"
              placeholder="Last Name"
              className="border rounded-lg p-3 "
            />
          </div>

          <div className="flex flex-col">
            <label className="font-medium text-gray-700">Address</label>
            <textarea
              placeholder="Enter your postal address"
              className="border rounded-lg p-3 h-24 resize-none "
            ></textarea>
          </div>

          <div className="flex flex-col">
            <label className="font-medium text-gray-700">Country</label>
            <input
              type="text"
              placeholder="India"
              className="border rounded-lg p-3 "
            />
          </div>

          <div className="flex flex-col">
            <label className="font-medium text-gray-700">Email ID</label>
            <input
              type="email"
              placeholder="example@sample.com"
              className="border rounded-lg p-3 "
            />
          </div>

          <div className="flex flex-col">
            <label className="font-medium text-gray-700">Phone Number</label>

            <div className="flex gap-3">
              <input
                type="number"
                placeholder="+91"
                className="border rounded-lg p-3 w-20 "
              />
              <input
                type="number"
                placeholder="1234567890"
                className="border rounded-lg p-3 flex-1 "
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg font-medium 
                       hover:bg-blue-700 transition-all shadow-md"
          >
            Submit Feedback
          </button>

        </form>

      </div>
    </div>
  );
}

export default FeedbackForm;
