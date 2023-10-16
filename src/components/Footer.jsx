import { IconMail, IconPhoneCall } from "@tabler/icons-react";

function Footer() {
  return (
    <>
      <footer className="bg-white py-[100px]">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 text-[#010103] justify-center text-left gap-[100px]">
            <ul className="list-none max-sm:text-center">
              <li className="text-[24px] mb-4 font-normal">
                <span className="font-bold">CAR</span> Rental
              </li>
              <li className="text-[#706f7b] text-[16px] leading-10 mb-10">
                We offers a big range of vehicles for all your driving needs. We
                have the perfect car to meet your needs.
              </li>
              <li className="mb-4">
                <a
                  className="no-underline text-black transition-all duration-200 hover:text-[#ff4d30] flex items-center text-[16px] font-rubik"
                  href="tel:123456789"
                >
                  <IconPhoneCall /> &nbsp; (123) -456-789
                </a>
              </li>

              <li className="mb-4">
                <a
                  className="no-underline text-black transition-all duration-200 hover:text-[#ff4d30] flex items-center text-[16px] font-rubik"
                  href="mailto: 
                  carrental@gmail.com"
                >
                  <IconMail />
                  &nbsp; carrental@gmail.com
                </a>
              </li>

              <li className="">
                <a
                  className="no-underline text-[#010103] transition-all duration-200 hover:text-[#ff4d30] flex items-center text-[14px] font-rubik"
                  target="_blank"
                  rel="noreferrer"
                  href="https://xpeedstudio.com/"
                >
                  Design by XpeedStudio
                </a>
              </li>
            </ul>

            <ul className="list-none max-sm:text-center">
              <li className="text-[24px] mb-4 font-bold uppercase">Company</li>
              <li className="text-[16px] mb-4 ">
                <a
                  className="text-[#010103] transition-all duration-200 no-underline hover:text-[#ff4d30]"
                  href="#home"
                >
                  New York
                </a>
              </li>
              <li className="text-[16px] mb-4 ">
                <a
                  className="text-[#010103] transition-all duration-200 no-underline hover:text-[#ff4d30]"
                  href="#home"
                >
                  Careers
                </a>
              </li>
              <li className="text-[16px] mb-4">
                <a
                  className="text-[#010103] transition-all duration-200 no-underline hover:text-[#ff4d30]"
                  href="#home"
                >
                  Mobile
                </a>
              </li>
              <li className="text-[16px] mb-4">
                <a
                  className="text-[#010103] transition-all duration-200 no-underline hover:text-[#ff4d30]"
                  href="#home"
                >
                  Blog
                </a>
              </li>
              <li className="text-[16px] mb-4">
                <a
                  className="text-[#010103] transition-all duration-200 no-underline hover:text-[#ff4d30]"
                  href="#home"
                >
                  How we work
                </a>
              </li>
            </ul>

            <ul className="list-none max-sm:text-center">
              <li className="text-[24px] mb-4 font-bold uppercase">
                WORKING HOURS
              </li>
              <li className="text-[16px] mb-4 ">
                <span className="text-[#010103] transition-all duration-200 no-underline ">
                  Mon - Fri: 9:00AM - 9:00PM
                </span>
              </li>
              <li className="text-[16px] mb-4 ">
                <span className="text-[#010103] transition-all duration-200 no-underline ">
                  Sat: 9:00AM - 19:00PM
                </span>
              </li>
              <li className="text-[16px] mb-4">
                <span className="text-[#010103] transition-all duration-200 no-underline ">
                  Sun: Closed
                </span>
              </li>
            </ul>

            <ul className="list-none max-sm:text-center">
              <li className="text-[24px] mb-4 font-bold uppercase">
                SUBSCRIPTION
              </li>
              <li className="text-[16px] mb-4 ">
                <span className="text-[#010103] transition-all duration-200 no-underline ">
                  Subscribe your Email address for latest news & updates.
                </span>
              </li>
              <li className="mb-4 ">
                <input
                  type="email"
                  placeholder="Enter Email Address"
                  className="w-full bg-[#ececec] border-transparent font-rubik text-[14px] font-normal leading-7 px-12 py-6 outline-none"
                ></input>
              </li>
              <li>
                <button className="bg-[#ff4d30] border-2 border-solid border-[#ff4d30] rounded-md shadow-md text-white text-[16px] font-bold px-6 py-4 w-full">
                  Submit
                </button>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
