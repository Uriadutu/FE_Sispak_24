import React, { useState } from "react";
import { FaBowlFood, FaGlassWater } from "react-icons/fa6";
import { Link, useNavigate } from "react-router-dom";
import { IoLogOut, IoPerson } from "react-icons/io5";
import { useDispatch } from "react-redux";
import { LogOut, reset } from "../features/authSlice";
import MenejemenAkunModal from "./modals/MenejemenAkunModal";
import { AnimatePresence } from "framer-motion";
import { IoBarChartSharp } from "react-icons/io5";
import { RiDashboardFill } from "react-icons/ri";
import { RiFolderHistoryFill } from "react-icons/ri";

const Sidebar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const logout = () => {
    dispatch(LogOut());
    dispatch(reset());
    navigate("/");
  };

  const [openAkun, setOpenAkun] = useState(false);

  const handleManajemen = () => {
    setOpenAkun(true);
  };

  return (
    <div className="hidden sm:block z-40 bg-gradient-to-t from-gray-200 to-gray-100  w-64 px-6 h-[100vh] drop-shadow-lg relative">
      <AnimatePresence>
        {openAkun && <MenejemenAkunModal setIsOpenModalAdd={setOpenAkun} />}
      </AnimatePresence>
      <div className="w-full">
        <div className="w-full">
          <Link
            to="/dasbor"
            className="mt-5 text-white rounded-md flex justify-center items-center w-full"
          >
            <svg
              className="bg-white rounded-full border border-gray-200"
              width="100"
              height="100"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="12" cy="7" r="5" fill="#8888" />
              <path
                d="M12 14c-4.42 0-8 2.24-8 5v1h16v-1c0-2.76-3.58-5-8-5z"
                fill="#8888"
              />
            </svg>
          </Link>
        </div>
        <div className="mt-[16%] grid gap-y-3">
          <Link
            to="/dasbor"
            className="rounded-md text-gray-700 flex items-center text-sm w-full text-left"
          >
            <RiDashboardFill color="black" size={15} className="mr-4" />
            Dasbor
          </Link>
          <Link
            to="/prediksi"
            className="rounded-md text-gray-700 flex items-center text-sm w-full text-left"
          >
            <IoBarChartSharp color="black" size={15} className="mr-4" />
            Prediksi
          </Link>
          <Link
            to="/riwayat"
            className="rounded-md text-gray-700 flex items-center text-sm w-full text-left"
          >
            <RiFolderHistoryFill color="black" size={15} className="mr-4" />
            Riwayat
          </Link>
          <button
            onClick={handleManajemen}
            className="rounded-md text-gray-700 flex items-center text-sm w-full text-left"
          >
            <IoPerson color="black" size={15} className="mr-4" />
            Manajemen Akun
          </button>
          <button
            onClick={logout}
            className="rounded-md text-gray-700 flex items-center text-sm w-full text-left"
          >
            <IoLogOut color="black" size={15} className="mr-4" />
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
