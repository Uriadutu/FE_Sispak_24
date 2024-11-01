import React from "react";

const Prediksi = () => {
  return (
    <div>
      <h1 className="font-semibold text-xl text-gray-700 relative">Prediksi</h1>
      <div className="flex flex-col p-4 bg-white mt-4 rounded-md drop-shadow-lg space-y-4">
        {/* Section Head */}
        <div className="head border-b border-gray-200 pb-4">
          <p className="text-lg font-medium text-gray-700">Klasifikasi</p>
        </div>

        {/* Section Body */}
        <div className="body border-b border-gray-200 pb-4 flex flex-col space-y-2">
          <p className="text-gray-600">Silahkan Unggah Dataset</p>
          <input
            type="file"
            className="p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
          />
          <p className="text-gray-600 mt-2">Algoritma</p>
          <select className="p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500">
            <option value="">Decision Tree</option>
          </select>
        </div>

        {/* Section Footer */}
        <div className="footer pt-4 flex justify-end">
          <button className="px-4 py-2 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 transition duration-200">
            Proses
          </button>
        </div>
      </div>
    </div>
  );
};

export default Prediksi;
