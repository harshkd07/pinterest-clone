import React, { useState, useEffect } from "react";
import { PinData } from "../context/PinContext";
import { Loading } from "../components/Loading";
import PinCard from "../components/PinCard";

const Home = () => {
  const { pins, loading, fetchPins } = PinData();
  const [currentPage, setCurrentPage] = useState(1);
  console.log(pins.pins)
  // Fetch pins whenever the page changes
  useEffect(() => {
    fetchPins(currentPage);
  }, [currentPage]);

  // Handle page change
  const handlePageChange = (newPage) => {
    if (newPage > 0) {
      setCurrentPage(newPage);
    }
  };

 

  return (
    <div>
      {loading ? (
        <Loading />
      ) : (
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-6">
          <div className="px-4 py-6 sm:px-0">
            <div className="flex flex-wrap m-4">
              {pins && pins.pins.length > 0 ? (
                pins.pins.map((e, i) => <PinCard key={i} pin={e} />)
              ) : (
                <p>No Pins Yet</p>
              )}
            </div>
            <div className="flex justify-center items-center mt-4">
              <button
                disabled={currentPage === 1}
                onClick={() => handlePageChange(currentPage - 1)}
                className="mx-2 px-4 py-2 text-white bg-red-600 hover:bg-red-700 rounded focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
              >
                Previous  
              </button>

              <p>Page no. {currentPage}</p>

              <button
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={pins.currentPage === pins.totalPages}
                className="mx-2 px-4 py-2 text-white  bg-red-600 hover:bg-red-700 rounded focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
              >
                Next
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
