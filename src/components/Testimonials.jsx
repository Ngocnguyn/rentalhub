import { IconQuote } from "@tabler/icons-react";
import Img2 from "../images/testimonials/pfp1.jpg";
import Img3 from "../images/testimonials/pfp2.jpg";
function Testimonials() {
  return (
    <>
      <section className="bg-[#f8f8f8] py-[100px] text-black">
        <div className="container">
          <div className="flex flex-col">
            <div className="flex flex-col m-auto text-center max-w-[700px] mb-[50px]">
              <h4 className="font-rubik text-[22px] font-medium">
                Reviewed by People
              </h4>
              <h2 className="text-[42px] mb-[14px] font-bold">
                Client's Testimonials
              </h2>
              <p className="text-[#706f7b] font-rubik text-[16px]">
                Discover the positive impact we've made on the our clients by
                reading through their testimonials. Our clients have experienced
                our service and results, and they're eager to share their
                positive experiences with you.
              </p>
            </div>

            <div className="flex gap-[30px] w-full justify-center p-[30px] max-lg:p-0">
              <div className="bg-white shadow-lg w-[540px] p-[55px] relative max-lg:py-[50px] max-lg:px-[30px] rounded-3xl">
                <p className="text-[24px] font-medium">
                  "We rented a car from this website and had an amazing
                  experience! The booking was easy and the rental rates were
                  very affordable. "
                </p>
                <div className="flex mt-[30px] justify-between">
                  <div className="flex gap-[20px] items-center ">
                    <img
                      src={Img2}
                      alt="user_img"
                      className="w-[70px] h-[70px] rounded-[50%]"
                    />
                    <span>
                      <h4 className="text-[18px] font-bold">Harry Potter</h4>
                      <p className="font-normal font-rubik text-[16px]">
                        Belgrade
                      </p>
                    </span>
                  </div>
                  <span className="text-[62px] text-[#ff4d30] max-sm:hidden">
                    <IconQuote width={60} height={60} />
                  </span>
                </div>
              </div>
              <div className="bg-white shadow-lg w-[540px] p-[55px] relative max-lg:py-[50px] max-lg:px-[30px] rounded-3xl max-md:hidden">
                <p className="text-[24px] font-medium">
                  "The car was in great condition and made our trip even better.
                  Highly recommend for this car rental website!"
                </p>
                <div className="flex mt-[30px] justify-between">
                  <div className="flex gap-[20px] items-center ">
                    <img
                      src={Img3}
                      alt="user_img"
                      className="w-[70px] h-[70px] rounded-[50%]"
                    />
                    <span>
                      <h4 className="text-[18px] font-bold">Ron Rizzly</h4>
                      <p className="font-normal font-rubik text-[16px]">
                        Novi Sad
                      </p>
                    </span>
                  </div>
                  <span className="text-[62px] text-[#ff4d30] max-sm:hidden">
                    <IconQuote width={60} height={60} />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Testimonials;
