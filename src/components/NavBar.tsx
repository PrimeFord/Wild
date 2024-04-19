type IShow = { show: boolean; setShow: (show: boolean) => void };

const NavBar = ({ show, setShow }: IShow) => {
  return (
    <div
      className={`w-[100%] z-20 lg:w-[95%] h-[5rem] fixed flex items-center px-[2rem]`}
    >
      <div className="flex-1">
        <img className=" h-8" src="/images/logo.svg" alt="Logo" />
      </div>
      <div className="flex items-center gap-6">
        <img
          className="hidden lg:flex h-5"
          src="/images/search.svg"
          alt="Search"
        />
        {/* <img
          onClick={() => {
            setShow(!show);
          }}
          className=" h-8"
          src="/images/menu.svg"
          alt="Menu"
        /> */}
        <div
          className="flex flex-col gap-[0.3rem] w-5"
          onClick={() => {
            setShow(!show);
          }}
        >
          <span
            aria-hidden="true"
            className={`block h-0.5 w-5 bg-white transform transition duration-500 ease-in-out ${
              show ? "rotate-45 translate-y-1.5" : ""
            }`}
          ></span>
          <span
            aria-hidden="true"
            className={`block h-0.5 w-5 bg-white transform transition duration-500 ease-in-out ${
              show ? "opacity-0" : ""
            }`}
          ></span>
          <span
            aria-hidden="true"
            className={`block h-0.5 bg-white transform transition duration-500 ease-in-out ${
              show ? "w-5 -rotate-45 -translate-y-1.5" : " w-3"
            }`}
          ></span>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
