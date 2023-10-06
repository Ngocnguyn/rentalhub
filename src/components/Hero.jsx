import { Link } from "react-router-dom";
import BgShape from "../images/hero/hero-bg.png";
import HeroCar from "../images/hero/main-car.png";
import { IconChevronRight, IconCircleCheck } from "@tabler/icons-react";

function Hero() {
  return (
    <>
      <section id="home" className="relative w-full h-screen bg-white">
        <div className="container">
          <img
            src={BgShape}
            alt="bg-shape"
            className="hidden md:block absolute top-0 right-0 z-10"
          />
          <div className="relative w-full h-screen flex items-center max-md:justify-center">
            <div className="flex flex-col z-30 max-w-[50rem] mt-[5rem] max-md:text-center max-md:items-center">
              <h4 className="text-[2.2rem] font-bold font-rubik">
                Plan your trip now
              </h4>
              <h1 className="text-black font-poppins text-[5.2rem] font-bold mb-[2.3rem] mt-4 leading-[60px]">
                Save <span className="text-[#ff4d30]">big</span> with our car
                rental
              </h1>
              <p className="text-[#706f7b] font-rubik text-[1.6rem] leading-[20px] mb-[4rem]">
                Rent the car of your dreams. Unbeatable prices, unlimited miles,
                flexible pick-up options and much more.
              </p>
              <div className="flex font-rubik text-[1.6rem] gap-8">
                <Link
                  to="/"
                  className="flex font-bold text-white no-underline items-center bg-[#ff4d30] border px-12 py-7 transition-all duration-300 shadow-md hover:bg-[#fa4226]"
                >
                  Book Ride &nbsp; <IconCircleCheck />
                </Link>
                <Link
                  to="/"
                  className="flex font-bold text-white no-underline items-center bg-[#010103] border-2 border-black px-12 py-7  transition-all duration-300 hover:bg-transparent hover:text-black"
                >
                  Learn More &nbsp; <IconChevronRight />
                </Link>
              </div>
            </div>
            <img
              src={HeroCar}
              alt="herocar"
              className="absolute right-0 w-[65%] mt-[5rem] z-20 max-md:hidden"
            />
          </div>
        </div>
      </section>
    </>
  );
}
export default Hero;
