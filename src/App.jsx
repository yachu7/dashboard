import "./App.css";
import Navbar from "./component/Navbar";
import Middle from "./component/Middle";
import Right from "./component/Right";
function App() {
  return (
    <div className=" min-h-screen flex flex-row ">
      <div className="flex w-1/6 min-h-screen bg-[#fcfcfd]">
        <Navbar />
      </div>
      <div className="flex-1  w-1/2  min-h-screen  bg-[#f2f2f2]">
        <Middle />
      </div>
      <div className="flex flex-col  w-1/5 min-h-screen   bg-[#f2f2f2]">
        <Right />
      </div>
    </div>
  );
}

export default App;
