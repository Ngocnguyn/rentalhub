import SelectCar from "../images/plan/icon1.png";
import Contact from "../images/plan/icon2.png";
import Drive from "../images/plan/icon3.png";

function PlanTrip() {
  return (
    <>
      <section className=" bg-white py-[50px] relative">
        <div className="container">
          <div className="flex flex-col">
            <div className="m-auto text-center text-black">
              <h3 className="font-medium font-rubik text-[24px]">
                Plan your trip now
              </h3>
              <h2 className="text-[42px] mt-4 mb-8 font-bold">
                Quick & easy car rental
              </h2>
            </div>

            <div className="grid grid-cols-3 max-lg:grid-cols-2 max-md:grid-cols-1 mt-9 px-8">
              <div className="text-center py-[10px] px-[140px]">
                <img src={SelectCar} alt="" className="h-auto w-[170px]" />
                <h3 className="font-bold text-[26px] mb-[10px]">Select Car</h3>
                <p className="font-rubik text-[14px] text-[#706f7b] ">
                  We offers a big range of vehicles for all your driving needs.
                  We have the perfect car to meet your needs
                </p>
              </div>
              <div className="text-center py-[10px] px-[140px]">
                <img src={Contact} alt="" className="h-auto w-[170px]" />
                <h3 className="font-bold text-[26px] mb-[10px]">
                  Contact Operator
                </h3>
                <p className="font-rubik text-[14px] text-[#706f7b] ">
                  Our knowledgeable and friendly operators are always ready to
                  help with any questions or concerns
                </p>
              </div>
              <div className="text-center py-[10px] px-[140px]">
                <img src={Drive} alt="" className="h-auto w-[170px]" />
                <h3 className="font-bold text-[26px] mb-[10px]">Let's Drive</h3>
                <p className="font-rubik text-[14px] text-[#706f7b] ">
                  Whether you're hitting the open road, we've got you covered
                  with our wide range of cars
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default PlanTrip;
