import MainImg from "../images/chooseUs/main.png";
import Box1 from "../images/chooseUs/icon1.png";
import Box2 from "../images/chooseUs/icon2.png";
import Box3 from "../images/chooseUs/icon3.png";
import { IconChevronRight } from "@tabler/icons-react";

function ChooseUs() {
  return (
    <>
      <section className="bg-white pt-[20px] pb-[100px] bg-[url('/src/images/chooseUs/bg.png')] bg-cover bg-no-repeat ">
        <div className="container">
          <div className="flex flex-col">
            <img
              className="w-[90%] h-auto m-auto max-sm:w-full"
              src={MainImg}
              alt="car_img"
            />
            <div className="flex justify-around mt-[30px] w-full max-lg:flex-col max-lg:items-center max-lg:text-center max-lg:gap-[55px]">
              <div className="text-left flex flex-col max-w-[500px] text-black max-lg:items-center max-lg:text-center">
                <h4 className="text-[22px] font-semibold mb-[7px] font-rubik">
                  Why Choose Us
                </h4>
                <h2 className="text-[42px] mb-[20px] leading-[42px] font-bold">
                  Best valued deals you will ever find
                </h2>
                <p className="text-[#706f7b] font-rubik text-[16px] mb-[33px]">
                  Discover the best deals you'll ever find with our unbeatable
                  offers. We're dedicated to providing you with the best value
                  for your money, so you can enjoy top-quality services and
                  products without breaking the bank. Our deals are designed to
                  give you the ultimate renting experience, so don't miss out on
                  your chance to save big.
                </p>
                <a
                  href="#home"
                  className="no-underline flex text-white font-bold bg-[#ff4d30] py-[15px] px-[25px] rounded shadow-md transition-all duration-300 border-solid border-2 border-[#ff4d30] text-[16px] w-fit hover:shadow-lg hover:bg-[#fa4226]"
                >
                  Find Details &nbsp;
                  <IconChevronRight />
                </a>
              </div>
              <div className="flex flex-col gap-[45px] max-w-[440px]">
                <div className="flex max-sm:flex-col max-sm:items-center">
                  <img
                    src={Box1}
                    alt="car-img"
                    className="w-[110px] h-[110px] mr-[11px]"
                  />
                  <div className="flex flex-col gap-[10px] justify-center">
                    <h4 className="text-[24px] font-bold">
                      Cross Country Drive
                    </h4>
                    <p className="text-[#706f7b] font-rubik text-[16px] ">
                      Take your driving experience to the next level with our
                      top-notch vehicles for your cross-country adventures.
                    </p>
                  </div>
                </div>
                <div className="flex max-sm:flex-col max-sm:items-center">
                  <img
                    src={Box2}
                    alt="coin-img"
                    className="w-[110px] h-[110px] mr-[11px]"
                  />
                  <div className="flex flex-col gap-[10px] justify-center">
                    <h4 className="text-[24px] font-bold">
                      All Inclusive Pricing
                    </h4>
                    <p className="text-[#706f7b] font-rubik text-[16px] ">
                      Get everything you need in one convenient, transparent
                      price with our all-inclusive pricing policy.
                    </p>
                  </div>
                </div>
                <div className="flex max-sm:flex-col max-sm:items-center">
                  <img
                    src={Box3}
                    alt="coin-img"
                    className="w-[110px] h-[110px] mr-[11px]"
                  />
                  <div className="flex flex-col gap-[10px] justify-center">
                    <h4 className="text-[24px] font-bold">No Hidden Charges</h4>
                    <p className="text-[#706f7b] font-rubik text-[16px] ">
                      Enjoy peace of mind with our no hidden charges policy. We
                      believe in transparent and honest pricing.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ChooseUs;
