import React from "react";
import {
  FaYoutube,
  FaBell,
  FaPersonPraying,
  FaAngleDown,
} from "react-icons/fa6";
import QRCode from "react-qr-code";

const right = () => {
  return (
    
    <div className="h-screen fixed w-1/5 top-0 hover:overflow-y-scroll">
      <div className="flex flex-row justify-end ">
        <img src="https://cdn-icons-png.freepik.com/256/1384/1384060.png?ga=GA1.1.1332621318.1708002106&" alt="youtube" className="m-4 p2 w-8 h-8" />
        <img src="https://cdn-icons-png.freepik.com/256/8567/8567654.png?ga=GA1.1.1332621318.1708002106&" alt="bell" className="m-4 p2 w-8 h-8" />
        <img src="https://cdn-icons-png.freepik.com/256/814/814824.png?ga=GA1.1.1332621318.1708002106&" alt="photo" className="m-4 p2 w-10" />
        
      </div>
      <div className="bg-[#fcfcfd] rounded-md flex justify-between p-1 mr-2 mt-6">
        <p className="mt-2 font-semibold p-2">Ho Chi Minh City</p>
        <span>
          <FaAngleDown size={15} className="m-4 " />
        </span>
      </div>
      <div className="bg-[#fcfcfd] rounded-md flex mt-4 mr-2 flex-col">
        <h2 className="ml-4 py-2 font-bold text-xl">Partitions</h2>
        <div className="flex justify-between ml-4 py-2 font-semibold items-center">
          <p>District 1</p>
          <div className="bg-red-800 w-5 h-2 rounded-full mr-4 "></div>
        </div>
        <div className="flex justify-between ml-4 py-2 font-semibold items-center">
          <p>District 2</p>
          <div className="bg-yellow-400 w-5 h-2 rounded-full mr-4 "></div>
        </div>
        <div className="flex justify-between ml-4 py-2 font-semibold items-center">
          <p>District 3</p>
          <div className="bg-green-600 w-5 h-2 rounded-full mr-4 "></div>
        </div>
        <div className="flex flex-row justify-evenly mt-4">
          <div className="flex flex-col items-center ">
            <div className="bg-red-800 w-3 h-3 rounded-full flex justify-center "></div>
            <p className="my-1 text-sm">Red Zone</p>
          </div>
          <div>
            <div className="flex flex-col items-center ">
              <div className="bg-yellow-400 w-3 h-3 rounded-full "></div>
              <p className="my-1 text-sm">Warning Zone</p>
            </div>
          </div>
          <div>
            <div className=" flex flex-col items-center">
              <div className="bg-green-600 w-3 h-3 rounded-full "></div>
              <p className="my-1 text-sm">Stop Zone</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col w-auto gap-2 bg-[#fcfcfd] mt-4 mr-2 p-4 rounded-md">
        <h2 className="font-bold text-x">
          Number of Imported <br /> Vaccine
        </h2>
        <div className=" flex flex-col items- gap-4 mt-4">
          <div className=" mr-auto text-right w-full">
            <p className="bg-indigo-700 hover:brightness-110 text-white p-1 rounded-md pr-2">
              AstraZeneca
            </p>
          </div>
          <div className=" mr-auto text-right w-full">
            <p className="w-[90%] bg-indigo-600 hover:brightness-110 text-white p-1 rounded-md pr-2">
              Gam-COVID-Vac
            </p>
          </div>
          <div className=" mr-auto text-right w-full">
            <p className="bg-indigo-500 hover:brightness-110 text-white p-1 rounded-md w-[80%] pr-2">
              Vero Cell
            </p>
          </div>
          <div className="  mr-auto text-right w-full">
            <p className="bg-indigo-400 hover:brightness-110 text-white p-1 rounded-md w-[60%] pr-2">
              Comimaty
            </p>
          </div>
          <div className=" mr-auto text-right w-full">
            <p className="bg-indigo-300 hover:brightness-110 text-white p-1 rounded-md w-[50%] pr-2">
              SpikeVax
            </p>
          </div>
          <div className=" mr-auto text-right w-full">
            <p className="bg-indigo-200 hover:brightness-110 text-white p-1 rounded-md w-[40%] pr-2">
              Janssen
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col w-auto gap-2 bg-[#fcfcfd] mt-4 mr-2 p-4 justify-center items-center rounded-md">
        <div className="w-50 h-50">
          <QRCode size={100} value="Tapli Kahile Suru Garne" />
        </div>
        <p className="font-bold">Health Declaration </p>
      </div>
      </div>
   
  );
};

export default right;
