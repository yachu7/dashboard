import React from "react";
import {
  MdDashboard,
  MdNewspaper,
  MdContacts,
  MdBookmarkBorder,
  MdAdjust,
  MdSettings,
  MdHelpCenter,
} from "react-icons/md";
const Navbar = () => {
  return (
    <div className="flex flex-col h-screen p-4 w-1/6 fixed left-0 top-0">
      <div className="flex  mt-5 text-2xl items-center ">
        <span className="flex justify-center items-center">
          <img
            src="https://cdn-icons-png.freepik.com/256/2387/2387545.png?ga=GA1.1.1332621318.1708002106&"
            className="w-20 h-15"
          />
        </span>
        <span className="ml-3">VNcovid</span>
      </div>
      <div className="flex flex-col justify-between flex-grow mt-5">
        <ul>
          <li className="mb-2 flex hover:bg-[#2175bf] hover:text-white p-2 rounded-md">
            <span className="flex justify-center items-center">
              <MdDashboard size={25} />
            </span>
            <span className="ml-3">DashBoard</span>
          </li>
          <li className="mb-2 flex p-2 hover:bg-[#2175bf] hover:text-white rounded-md">
            <span className="flex justify-center  items-center">
              <MdNewspaper size={25} />
            </span>
            <span className="ml-3">News</span>
          </li>
          <li className="mb-2 flex p-2 hover:bg-[#2175bf] hover:text-white rounded-md">
            <span className="flex justify-center items-center">
              <MdContacts size={25} />
            </span>
            <span className="ml-3">Contact</span>
          </li>
          <li className="mb-2 flex p-2 hover:bg-[#2175bf] hover:text-white rounded-md">
            <span className="flex justify-center items-center">
              <MdBookmarkBorder size={25} />
            </span>
            <span className="ml-3">Instruction</span>
          </li>
          <li className="mb-2 flex p-2 hover:bg-[#2175bf] hover:text-white rounded-md">
            <span className="flex justify-center items-center">
              <MdAdjust size={25} />
            </span>
            <span className="ml-3">Donate Location</span>
          </li>
        </ul>
        <div className="flex w-full">
          <ul className="w-full">
            <li className="mb-2 flex p-2 hover:bg-[#2175bf] hover:text-white rounded-md">
              <span className="flex justify-center items-center">
                <MdSettings size={25} />
              </span>
              <span className="ml-3">Setting</span>
            </li>
            <li className="mb-2 flex p-2 hover:bg-[#2175bf] hover:text-white rounded-md">
              <span className="flex justify-center items-center">
                <MdHelpCenter size={25} />
              </span>
              <span className="ml-3">Help Center</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
