import CarBox from "./Carbox";
import { CAR_DATA } from "./CarData";
import { useState } from "react";

function PickCar() {
  const [active, setActive] = useState("FirstCar");
  const [colorBtn, setColorBtn] = useState("btn1");

  const btnID = (id) => {
    setColorBtn(colorBtn === id ? "" : id);
  };

  const coloringButton = (id) => {
    return colorBtn === id ? "!bg-[#ff4d30] text-white" : "";
  };

  return (
    <>
      <section className="py-[100px]">
        <div className="container">
          <div className="flex flex-col">
            <div className="text-center max-w-[500px] mx-auto mb-[50px]">
              <h3 className="font-rubik text-[24px] font-medium">
                Vehicle Models
              </h3>
              <h2 className="text-[42px] font-bold">Our rental fleet</h2>
              <p className="text-[16px] font-rubik text-[#706f7b]">
                Choose from a variety of our amazing vehicles to rent for your
                next adventure or business trip
              </p>
            </div>
            <div className="flex justify-between gap-[10px] max-lg:flex-col max-lg:gap-[50px]">
              <div className="flex flex-col gap-[7px]">
                <button
                  className={`${coloringButton(
                    "btn1"
                  )} text-[20px] font-poppins font-semibold border-none cursor-pointer py-[15px] px-[25px] bg-[#e9e9e9] transition-all duration-200 text-left`}
                  onClick={() => {
                    setActive("FirstCar");
                    btnID("btn1");
                  }}
                >
                  Audi A1 S-Line
                </button>
                <button
                  className={`${coloringButton(
                    "btn2"
                  )} text-[20px] font-poppins font-semibold border-none cursor-pointer py-[15px] px-[25px] bg-[#e9e9e9] transition-all duration-200 text-left`}
                  id="btn2"
                  onClick={() => {
                    setActive("SecondCar");
                    btnID("btn2");
                  }}
                >
                  VW Golf 6
                </button>
                <button
                  className={`${coloringButton(
                    "btn3"
                  )} text-[20px] font-poppins font-semibold border-none cursor-pointer py-[15px] px-[25px] bg-[#e9e9e9] transition-all duration-200 text-left`}
                  id="btn3"
                  onClick={() => {
                    setActive("ThirdCar");
                    btnID("btn3");
                  }}
                >
                  Toyota Camry
                </button>
                <button
                  className={`${coloringButton(
                    "btn4"
                  )} text-[20px] font-poppins font-semibold border-none cursor-pointer py-[15px] px-[25px] bg-[#e9e9e9] transition-all duration-200 text-left`}
                  id="btn4"
                  onClick={() => {
                    setActive("FourthCar");
                    btnID("btn4");
                  }}
                >
                  BMW 320 ModernLine
                </button>
                <button
                  className={`${coloringButton(
                    "btn5"
                  )} text-[20px] font-poppins font-semibold border-none cursor-pointer py-[15px] px-[25px] bg-[#e9e9e9] transition-all duration-200 text-left`}
                  id="btn5"
                  onClick={() => {
                    setActive("FifthCar");
                    btnID("btn5");
                  }}
                >
                  Mercedes-Benz GLK
                </button>
                <button
                  className={`${coloringButton(
                    "btn6"
                  )} text-[20px] font-poppins font-semibold border-none cursor-pointer py-[15px] px-[25px] bg-[#e9e9e9] transition-all duration-200 text-left`}
                  id="btn6"
                  onClick={() => {
                    setActive("SixthCar");
                    btnID("btn6");
                  }}
                >
                  VW Passat CC
                </button>
              </div>

              {active === "FirstCar" && <CarBox data={CAR_DATA} carID={0} />}
              {active === "SecondCar" && <CarBox data={CAR_DATA} carID={1} />}
              {active === "ThirdCar" && <CarBox data={CAR_DATA} carID={2} />}
              {active === "FourthCar" && <CarBox data={CAR_DATA} carID={3} />}
              {active === "FifthCar" && <CarBox data={CAR_DATA} carID={4} />}
              {active === "SixthCar" && <CarBox data={CAR_DATA} carID={5} />}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default PickCar;
