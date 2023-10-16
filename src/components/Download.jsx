import Img1 from "../images/download/appstore.svg";
import Img2 from "../images/download/googleapp.svg";
function Download() {
  return (
    <>
      <section className="bg-[url('/src/images/banners/bg02.png')] bg-[#f8f8f8] bg-top bg-no-repeat bg-cover h-auto py-[100px] w-full max-md:bg-none">
        <div className="container">
          <div className="flex flex-col gap-[20px] max-w-[550px] text-left max-md:text-center max-md:m-auto">
            <h2 className="text-black text-[42px] font-bold">
              Download our app to get most out of it
            </h2>
            <p className="text-[#706f7b] font-rubik text-[16px]">
              Thrown shy denote ten ladies though ask saw. Or by to he going
              think order event music. Incommode so intention defective at
              convinced. Led income months itself and houses you.
            </p>
            <div className="flex gap-[30px] mt-[20px] max-md:justify-center max-sm:flex-col max-sm:items-center">
              <img
                className="w-[40%] cursor-pointer max-md:w-[220px]"
                alt="download_img"
                src={Img2}
              />
              <img
                className="w-[40%] cursor-pointer max-md:w-[220px]"
                alt="download_img"
                src={Img1}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Download;
