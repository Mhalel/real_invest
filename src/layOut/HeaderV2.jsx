import React from "react";
import { MdHomeFilled } from "react-icons/md";
import { BiLineChart } from "react-icons/bi";
import { PiBookmarkBold } from "react-icons/pi";
import { RiSettings4Line } from "react-icons/ri";
import { Link } from "react-router-dom";

const HeaderV2 = () => {
  return (
    <header className="bg-[#5D1D6D] my-[15px] mx-2 md:mx-[64px] text-white rounded-[32px] px-8 py-4 flex items-center justify-between  ">
      <div className="flex items-center space-x-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="12"
          height="12"
          viewBox="0 0 12 12"
          fill="none"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M0 0H12L10 6L12 12H0L2 6L0 0Z"
            fill="white"
          />
        </svg>
        <span className="font-semibold">Real Investment</span>
      </div>

      <div className="flex items-center space-x-4">
        {/* Profile image with border and custom rounding */}
        <img
          src="/manAvatar.jpg" // Replace with actual image URL
          alt="User Avatar"
          className="w-8 h-8 rounded-[20px] border-2 border-[#FFFAFA]"
        />

        {/* Icons (use any icon library or emoji for now) */}

        <Link to="/" className="text-lg">
          <MdHomeFilled />
        </Link>

        <Link to="/Dashboard" className="text-lg">
          <BiLineChart />
        </Link>
        <span className="text-lg">
          <PiBookmarkBold />
        </span>
        <Link to="/Settings" className="text-lg">
          <RiSettings4Line />
        </Link>
      </div>
    </header>
  );
};

export default HeaderV2;
