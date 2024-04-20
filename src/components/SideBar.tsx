const SideBar = ({ show }: { show: boolean }) => {
  return (
    <>
      <div
        className={`fixed h-[100%] flex flex-col justify-between items-center py-[8rem] transition-all duration-700 ease-in-out  ${
          show
            ? "w-[80%] lg:w-[24rem] fixed z-30 bg-[#252525] bg-opacity-50 backdrop-blur-md duration-700 ease-in-out"
            : "w-0 z-30 lg:w-[4rem] bg-primary transition-all duration-700 ease-in-out"
        }`}
      >
        {!show ? (
          <>
            <div
              className={`h-10 w-10 lg:flex justify-center items-center border-[2px] border-solid border-white rounded-[50%] ${
                show ? "flex" : "hidden"
              }`}
            >
              <img className="h-4" src="/images/twitter.svg" alt="twitter" />
            </div>
            <div
              className={`h-10 w-10 lg:flex justify-center items-center border-[2px] border-solid border-white rounded-[50%] ${
                show ? "flex" : "hidden"
              }`}
            >
              <img className="h-5" src="/images/facebook.svg" alt="facebook" />
            </div>{" "}
            <div
              className={`h-10 w-10 lg:flex justify-center items-center border-[2px] border-solid border-white rounded-[50%] ${
                show ? "flex" : "hidden"
              }`}
            >
              <img
                className="h-5"
                src="/images/instagram.svg"
                alt="instagram"
              />
            </div>{" "}
            <div
              className={`h-10 w-10 lg:flex justify-center items-center border-[2px] border-solid border-white rounded-[50%] ${
                show ? "flex" : "hidden"
              }`}
            >
              <img
                className="h-4 pl-1"
                src="/images/youtube.svg"
                alt="youtube"
              />
            </div>
          </>
        ) : (
          <>
            <div className="lg:hidden text-center">
              <img className="h-10" src="/images/logo.svg" alt="Logo" />
            </div>
            <div
              className={`text-white flex justify-around items-center flex-col gap-2 ${
                show
                  ? "transition delay-400 duration-400 ease-in-out"
                  : "transition delay-300 duration-300 ease-in-out"
              }`}
            >
              <p className="text-[1.2rem] lg:text-[1.5rem] text-center hover:scale-110">
                ARTISTS
              </p>
              <p className="text-[1.2rem] lg:text-[1.5rem] text-center hover:scale-110">
                SERVICES
              </p>
              <p className="text-[1.2rem] lg:text-[1.5rem] text-center hover:scale-110">
                DISCOGRAPHY
              </p>
              <p className="text-[1.2rem] lg:text-[1.5rem] text-center hover:scale-110">
                ABOUT
              </p>
              <p className="text-[1.2rem] lg:text-[1.5rem] text-center hover:scale-110">
                CONTACT
              </p>
            </div>
            <div className="w-[60%] flex justify-between items-center">
              <img
                className="h-4 hover:scale-110"
                src="/images/twitter.svg"
                alt="twitter"
              />

              <img
                className="h-5 hover:scale-110"
                src="/images/facebook.svg"
                alt="facebook"
              />

              <img
                className="h-5 hover:scale-110"
                src="/images/instagram.svg"
                alt="instagram"
              />

              <img
                className="h-4 hover:scale-110 pl-1"
                src="/images/youtube.svg"
                alt="youtube"
              />
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default SideBar;
