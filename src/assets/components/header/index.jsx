import React from "react";
import "./styles.css";
import { useNavigate } from "react-router";
function Header() {
  const navigate = useNavigate();
  return (
    <header className=" w-full flex items-center justify-center min-h-screen relative">
      <div className="header-bg-overlay-div absolute h-full w-full z-0"></div>
      <section className=" max-w-max-width-of-section w-full flex items-center justify-center z-[1]">
        <div className=" w-width-of-component flex items-center justify-center text-white font-poppins">
          <div className=" w-full flex items-center justify-center flex-col leading-none">
            <h1 className=" text-h1 font-h1 text-center screen-970px:text-h2 screen-750px:text-h3 screen-580px:text-h4 screen-518px:text-h5 screen-480px:text-h6 screen-420px:text-btn1 screen-370px:text-btn2">
              Are You a Supplier?
            </h1>
            <h2 className=" text-h1 font-p2 text-center mt-3 screen-970px:text-h2 screen-750px:text-h3 screen-580px:text-h4 screen-518px:text-h5 screen-480px:text-h6 screen-420px:text-btn1 screen-420px:leading-7 screen-370px:text-btn2">
              Explore Matching Opportunities.
            </h2>
            <div className=" text-black w-full text-p2 font-p3 flex items-center justify-center gap-3 my-6 screen-970px:text-p3 screen-750px:text-p4 screen-750px:flex-wrap screen-750px:gap-[2%] screen-750px:gap-y-3 screen-420px:text-p5">
              <div className=" w-96 flex items-center justify-center bg-white relative rounded-md overflow-hidden screen-970px:w-72 screen-750px:w-49% screen-518px:w-full">
                <img
                  src="/header-service-input-icon.png"
                  alt="Service Icon"
                  className="absolute w-5 left-3 screen-970px:w-4 screen-970px:left-2 screen-750px:w-3 screen-750px:left-1"
                />
                <input
                  className=" py-2 w-full focus:outline-none pl-11 pr-3 screen-970px:pl-8 screen-970px:pr-2 screen-764px:pr-1 screen-750px:pl-5"
                  type="text"
                  placeholder="Search your required service here"
                />
              </div>
              <div className=" w-96 flex items-center justify-center bg-white relative rounded-md overflow-hidden screen-970px:w-72 screen-750px:w-49% screen-518px:w-full">
                <img
                  src="/header-location-input-icon.png"
                  alt="Location Icon"
                  className="absolute w-5 left-2 screen-970px:w-4 screen-970px:left-1 screen-750px:w-3 screen-750px:left-[2px]"
                />
                <input
                  className=" py-2 w-full focus:outline-none pl-9 pr-3 screen-970px:pl-6 screen-970px:pr-2 screen-764px:pr-1 screen-750px:pl-4"
                  type="text"
                  placeholder="Search your desired location here"
                />
              </div>
              <button className="text-p2 font-bold font-inter bg-nav-button-color text-white py-2 px-6 rounded-md hover:bg-white hover:text-nav-button-color transition-colors duration-200 ease-in-out screen-970px:text-p3 screen-750px:text-p4 screen-420px:text-p5">
                Search
              </button>
            </div>
            <div className=" text-p1 flex items-center justify-center gap-4 screen-970px:text-p2 screen-750px:text-p3 screen-750px:gap-3 screen-580px:flex screen-580px:items-center screen-580px:justify-center screen-580px:flex-col screen-580px:w-full screen-480px:text-center screen-420px:text-p4 screen-420px:gap-1 screen-370px:text-p5">
              <b className=" font-h1">Are you a buyer?</b>
              <span
                onClick={() => navigate("/")}
                className=" cursor-pointer font-p2 underline underline-offset-2"
              >
                Click here if you are looking to post a requirements
              </span>
            </div>
          </div>
        </div>
      </section>
    </header>
  );
}

export default Header;
