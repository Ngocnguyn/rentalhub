function Banner() {
  return (
    <>
      <section className="w-full h-auto flex bg-[#2d2d2d] my-[80px] py-[60px] text-center">
        <div className="container">
          <div className="text-white flex justify-center w-full h-full items-center">
            <div className="flex flex-col gap-[15px]">
              <h2 className="text-[52px] font-bold max-sm:text-[42px]">
                Save big with our cheap car rental!
              </h2>
              <p className="text-[24px] max-sm:text-[20px]">
                Top Airports. Local Suppliers.{" "}
                <span className="text-[#ff4d30] font-medium">24/7</span>{" "}
                Support.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Banner;
