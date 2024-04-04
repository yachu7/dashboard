import React from "react";
import { MdOutlineSearch } from "react-icons/md";
import graph from "../assets/graph.png";
import { Doughnut } from "react-chartjs-2";
import { Chart, ArcElement, Tooltip, Title } from "chart.js";
Chart.register(ArcElement, Tooltip, Title);
Chart.defaults.plugins.tooltip.backgroundColor = "rgb(0, 0, 156)";

const vacinaated = {
  datasets: [
    {
      labels: ["No. of People Vaccinated", "pending"],
      data: [87.5, 12.5],
      backgroundColor: ["rgb(0, 197, 0)", "rgb(234, 234, 234)"],
      borderWidth: 1,
      radius: "80%",
    },
  ],
};
const quarantine = {
  datasets: [
    {
      labels: ["No. of People quarantined", "pending"],
      data: [12.5, 87.5],
      backgroundColor: ["rgb(255, 195, 2)", "rgb(234, 234, 234)"],
      borderWidth: 1,
      radius: "80%",
    },
  ],
  text: "12.5%",
};
const textCenter = {
  id: "textCenter",
  beforeDatasetsDraw(chart, args, pluginOptions) {
    const { ctx, vacinaated } = chart;
    ctx.save();
    ctx.font = "bolder 50px sans—serif";
    ctx.fillSty1e = "red";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText(
      vacinaated,
      chart.getDatasetMeta(O).data[0].x,
      chart.getDatasetMeta(0).data[0].y
    );
  },
};

const middle = () => {
  return (
    <>
      <div className="flex justify-between">
        <span className="text-3xl font-bold mt-5 ml-5"> Dashboard</span>
        <div className="mr-5 mt-5 flex bg-gray-300 relative rounded-md ">
          <span className="p-2">
            <MdOutlineSearch size={25} />
          </span>
          <input
            type="text"
            className=" bg-gray-300 h-18 rounded-md w-60 outline-none"
            placeholder="Search City"
          />
        </div>
      </div>
      <div className="flex flex-row justify-between mt-8 w-auto">
        <div className="text-lg bg-[#fcfcfd]  hover:bg-[#2175bf] hover:text-white ml-5 p-4 flex rounded-md w-1/2">
          <span className="ml-2">
            <img
              src="https://cdn-icons-png.freepik.com/256/3088/3088063.png?ga=GA1.1.1332621318.1708002106&"
              alt="Medicine"
              className="w-12"
            />
          </span>
          <span className=" ml-6">
            Number of <br />
            Cases of Covid
          </span>
        </div>
        <div className="text-lg p-4 flex bg-[#fcfcfd] rounded-md ml-4 mr-4 w-1/2 hover:bg-[#2175bf] hover:text-white">
          <span className="ml-2">
            <img
              src="https://cdn-icons-png.freepik.com/256/647/647237.png?ga=GA1.1.1332621318.1708002106&"
              alt="Medicine"
              className="w-12"
            />
          </span>
          <span className=" ml-6">
            Number of <br /> Cured Cases
          </span>
        </div>
        <div className="text-lg mr-5 p-4 flex bg-[#fcfcfd] rounded-md  w-1/2 hover:bg-[#2175bf] hover:text-white">
          <span className="ml-2">
            <img
              src="https://cdn-icons-png.freepik.com/256/12436/12436903.png?ga=GA1.1.1332621318.1708002106&"
              alt="Dead"
              className="w-12"
            />
          </span>
          <span className=" ml-6">
            Number of <br />
            Deaths
          </span>
        </div>
      </div>
      <img src={graph} className="p-4 flex justify-center w-full mt-2 " />
      <div className="flex m-2">
        <div className="flex-col  mt-2 ml-2 p-2 bg-[#fcfcfd] w-1/2 h-128 mb-4 ">
          <div className="flex justify-between m-2 p-2">
            <span className=" font-bold">Number of People Vacinaated</span>
            <span className="text-[#649ed2] font-bold">87.5%</span>
          </div>
          <div className="flex flex-col m-2 p-2 items-center ">
            <Doughnut data={vacinaated} plugins={textCenter} />

            <span className="text-sm flex justify-center text-gray-400 font-bold ">
              Until Now
            </span>
          </div>
        </div>
        <div className="flex-col  mt-2 ml-6 p-2 bg-[#fcfcfd] w-1/2 h-128 mb-4 mr-2">
          <div className="flex justify-between m-2 p-2">
            <span className=" font-bold">Number of People in Quarantine</span>
            <span className="text-[#649ed2] font-bold">12.5%</span>
          </div>
          <div className="m-2 p-2 flex flex-col items-center">
            <Doughnut data={quarantine} />
            <span className="text-sm flex justify-center text-gray-400 font-bold ">
              Until Now
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default middle;
