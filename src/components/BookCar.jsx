import {
  IconCalendarEvent,
  IconCar,
  IconMapPinFilled,
} from "@tabler/icons-react";

function BookCar() {
  return (
    <>
      <section className=" bg-white relative">
        <div className="container">
          <div className="m-auto mb-40">
            <div className="bg-white w-full p-16 md:p-18 lg:p-20 shadow-md rounded-md bg-center bg-repeat  relative z-40 text-black bg-cover flex flex-col ">
              <h2 className="text-[26px] font-poppins font-bold mb-5">
                Book a car
              </h2>
              <form className="box-form grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="flex flex-col">
                  <label className="flex items-center text-[16px] font-semibold mb-5 ">
                    <IconCar className="" /> &nbsp; Select Your Car Type
                    <b className="text-[#ff4d30]">*</b>
                  </label>
                  <select className="border border-[#ccd7e6] font-rubik text-[#ababab] rounded font-normal outline-none p-4 text-[16px]">
                    <option>Select your car type</option>
                    <option>Audi</option>
                    <option>Mercedes</option>
                    <option>BMW</option>
                    <option>Opel</option>
                    <option>Reno</option>
                    <option>Nissan</option>
                  </select>
                </div>
                <div className="flex flex-col">
                  <label className="flex items-center text-[16px] font-semibold mb-5 ">
                    <IconMapPinFilled /> &nbsp;Pick-up
                    <b className="text-[#ff4d30]">*</b>
                  </label>
                  <select className="border border-[#ccd7e6] font-rubik text-[#ababab] rounded font-normal outline-none p-4 text-[16px]">
                    <option>Select pick up location</option>
                    <option>Belgrade</option>
                    <option>Novi Sad</option>
                    <option>Nis</option>
                    <option>Kragujevac</option>
                    <option>Subotica</option>
                  </select>
                </div>
                <div className="flex flex-col">
                  <label className="flex items-center text-[16px] font-semibold mb-5 ">
                    <IconMapPinFilled /> &nbsp; Drop-of
                    <b className="text-[#ff4d30]">*</b>
                  </label>
                  <select className="border border-[#ccd7e6] font-rubik text-[#ababab] rounded font-normal outline-none p-4 text-[16px]">
                    <option>Select drop off location</option>
                    <option>Novi Sad</option>
                    <option>Belgrade</option>
                    <option>Nis</option>
                    <option>Kragujevac</option>
                    <option>Subotica</option>
                  </select>
                </div>
                <div className="flex flex-col">
                  <label className="flex items-center text-[16px] font-semibold mb-5 ">
                    <IconCalendarEvent /> &nbsp; Pick-up
                    <b className="text-[#ff4d30]">*</b>
                  </label>
                  <input
                    id="droptime"
                    type="date"
                    className="border border-[#ccd7e6] font-rubik text-[#ababab] rounded font-normal outline-none p-4 text-[16px]"
                  ></input>
                </div>
                <div className="flex flex-col">
                  <label className="flex items-center text-[16px] font-semibold mb-5 ">
                    <IconCalendarEvent /> &nbsp; Drop-of
                    <b className="text-[#ff4d30]">*</b>
                  </label>
                  <input
                    id="droptime"
                    type="date"
                    className="border border-[#ccd7e6] font-rubik text-[#ababab] rounded font-normal outline-none p-4 text-[16px]"
                  ></input>
                </div>

                <button
                  type="submit"
                  className="self-end bg-[#ff4d30] border-none shadow-sm text-white cursor-pointer font-rubik text-[20px] p-4 font-mediumt"
                >
                  Search
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default BookCar;
