import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { FaArrowLeftLong } from "react-icons/fa6";
import { listingDataContext } from "../Context/ListingContext";

function ListingPage1() {
  const navigate = useNavigate();

  // Destructure values from context
  const {
    title, setTitle,
    description, setDescription,
    frontEndImage1, setFrontEndImage1,
    frontEndImage2, setFrontEndImage2,
    frontEndImage3, setFrontEndImage3,
    backEndImage1, setBackEndImage1,
    backEndImage2, setBackEndImage2,
    backEndImage3, setBackEndImage3,
    rent, setRent,
    city, setCity,
    landmark, setLandmark,
  } = useContext(listingDataContext);

  // Handlers for image upload
  const handleImage1 = (e) => {
    let file = e.target.files[0];
    setBackEndImage1(file);
    setFrontEndImage1(URL.createObjectURL(file));
  };
  const handleImage2 = (e) => {
    let file = e.target.files[0];
    setBackEndImage2(file);
    setFrontEndImage2(URL.createObjectURL(file));
  };
  const handleImage3 = (e) => {
    let file = e.target.files[0];
    setBackEndImage3(file);
    setFrontEndImage3(URL.createObjectURL(file));
  };

  // Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault(); // stop refresh
    // you can also validate here before moving forward
    navigate("/listingpage2");
  };

  return (
    <div className="w-full h-screen bg-gray-100 flex items-center justify-center p-6">
      <form
        onSubmit={handleSubmit}  // ✅ added
        className="w-full max-w-2xl bg-white shadow-2xl rounded-2xl p-8 relative overflow-y-auto max-h-[90vh]"
      >
        {/* Back Button */}
        <div
          className="w-12 h-12 bg-red-500 cursor-pointer absolute left-6 top-6 rounded-full flex items-center justify-center shadow-lg hover:bg-red-600 transition"
          onClick={() => navigate("/")}
        >
          <FaArrowLeftLong className="text-white text-xl" />
        </div>

        {/* Title Heading */}
        <div className="absolute top-5 right-6 bg-red-500 text-white px-6 py-2 rounded-full shadow-md text-lg font-semibold">
          SetUp Your Home
        </div>

        {/* Form Content */}
        <div className="flex flex-col gap-6 mt-10">
          {/* Title */}
          <div className="flex flex-col gap-2">
            <label className="font-semibold text-gray-700">Title</label>
            <input
              type="text"
              placeholder="Enter Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="border border-gray-300 p-3 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-red-400"
              required
            />
          </div>

          {/* Description */}
          <div className="flex flex-col gap-2">
            <label className="font-semibold text-gray-700">Description</label>
            <textarea
              placeholder="Enter Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="border border-gray-300 p-3 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-red-400"
              rows="3"
              required
            />
          </div>

          {/* Image Uploads */}
          <div className="flex flex-col gap-2">
            <label className="font-semibold text-gray-700">Image 1</label>
            <input
              type="file"
              onChange={handleImage1}
              className="border border-gray-300 p-2 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-red-400"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="font-semibold text-gray-700">Image 2</label>
            <input
              type="file"
              onChange={handleImage2}
              className="border border-gray-300 p-2 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-red-400"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="font-semibold text-gray-700">Image 3</label>
            <input
              type="file"
              onChange={handleImage3}
              className="border border-gray-300 p-2 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-red-400"
            />
          </div>

          {/* Rent */}
          <div className="flex flex-col gap-2">
            <label className="font-semibold text-gray-700">Rent</label>
            <input
              type="text"
              placeholder="Enter Rent"
              value={rent}
              onChange={(e) => setRent(e.target.value)}
              className="border border-gray-300 p-3 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-red-400"
              required
            />
          </div>

          {/* City */}
          <div className="flex flex-col gap-2">
            <label className="font-semibold text-gray-700">City</label>
            <input
              type="text"
              placeholder="Enter City"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              className="border border-gray-300 p-3 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-red-400"
              required
            />
          </div>

          {/* Landmark */}
          <div className="flex flex-col gap-2">
            <label className="font-semibold text-gray-700">Landmark</label>
            <input
              type="text"
              placeholder="Enter Landmark"
              value={landmark}
              onChange={(e) => setLandmark(e.target.value)}
              className="border border-gray-300 p-3 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-red-400"
              required
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-red-500 text-white py-3 rounded-lg text-lg font-semibold mt-4 hover:bg-red-600 transition shadow-md"
          >
            Next
          </button>
        </div>
      </form>
    </div>
  );
}

export default ListingPage1;
 