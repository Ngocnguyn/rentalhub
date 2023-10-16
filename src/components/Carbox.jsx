import { useState } from "react";

function CarBox({ data, carID }) {
  const [carLoad, setCarLoad] = useState(true);
  return (
    <>
      {data[carID].map((car, id) => (
        <div
          key={id}
          className="flex justify-between gap-[110px] max-lg:gap-[20px] max-md:flex-col max-md:items-center max-md:justify-center max-md:gap-[50px]"
        >
          <div className="relative w-[500px] max-md:w-full">
            {carLoad && <span className="loader"></span>}
            <img
              className="w-full mt-[60px]"
              style={{ display: carLoad ? "none" : "block" }}
              src={car.img}
              alt="car_img"
              onLoad={() => setCarLoad(false)}
            />
          </div>
          <div className="w-[250px] ">
            <div className="w-full bg-[#ff4d30] text-[18px] flex items-center gap-[15px] text-white py-[4px] px-[20px]">
              <span className="text-[28px] font-bold">${car.price}</span>/ rent
              per day
            </div>
            <div className="grid grid-cols-1 text-[14px] ">
              <div className="grid grid-cols-2 text-center py-[9px] px-[5px] border-b-2 border-r-2 border-l-2 border-solid border-[#706f7b] ">
                <span className="border-r-2 border-solid border-[#706f7b]">
                  Model
                </span>
                <span>{car.model}</span>
              </div>

              <div className="grid grid-cols-2 text-center py-[9px] px-[5px] border-b-2 border-r-2 border-l-2 border-solid border-[#706f7b] ">
                <span className="border-r-2 border-solid border-[#706f7b]">
                  Mark
                </span>
                <span>{car.mark}</span>
              </div>

              <div className="grid grid-cols-2 text-center py-[9px] px-[5px] border-b-2 border-r-2 border-l-2 border-solid border-[#706f7b] ">
                <span className="border-r-2 border-solid border-[#706f7b]">
                  Year
                </span>
                <span>{car.year}</span>
              </div>

              <div className="grid grid-cols-2 text-center py-[9px] px-[5px] border-b-2 border-r-2 border-l-2 border-solid border-[#706f7b] ">
                <span className="border-r-2 border-solid border-[#706f7b]">
                  Doors
                </span>
                <span>{car.doors}</span>
              </div>

              <div className="grid grid-cols-2 text-center py-[9px] px-[5px] border-b-2 border-r-2 border-l-2 border-solid border-[#706f7b] ">
                <span className="border-r-2 border-solid border-[#706f7b]">
                  AC
                </span>
                <span>{car.air}</span>
              </div>

              <div className="grid grid-cols-2 text-center py-[9px] px-[5px] border-b-2 border-r-2 border-l-2 border-solid border-[#706f7b] ">
                <span className="border-r-2 border-solid border-[#706f7b]">
                  Transmission
                </span>
                <span>{car.transmission}</span>
              </div>

              <div className="grid grid-cols-2 text-center py-[9px] px-[5px] border-b-2 border-r-2 border-l-2 border-solid border-[#706f7b] ">
                <span className="border-r-2 border-solid border-[#706f7b]">
                  Fuel
                </span>
                <span>{car.fuel}</span>
              </div>
            </div>
            <a
              className="text-[20px]  uppercase no-underline font-semibold text-white font-poppins bg-[#ff4d30] p-[10px] flex justify-center mt-[14px] transition-all duration-300 shadow-md hover:bg-[#e9381d]"
              href="#booking-section"
            >
              Reserve Now
            </a>
          </div>
        </div>
      ))}
    </>
  );
}

export default CarBox;
