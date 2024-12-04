import React, { useState } from "react";

function BuySupply() {
  const [buyAndSupplyDataCondition, setBuyAndSupplyDataCondition] =
    useState(false);
  return (
    <main className=" w-full flex items-center justify-center pb-16 screen-750px:pb-12">
      <section className=" max-w-max-width-of-section w-full flex items-center justify-center">
        <div className="w-width-of-component flex items-center justify-between bg-buy-supply-bg-color py-16 px-8 font-poppins screen-750px:py-12 screen-750px:px-4 screen-580px:flex-col screen-580px:px-8 screen-580px:gap-6 screen-370px:px-2">
          <div className=" w-48% flex items-center justify-center relative screen-580px:w-full">
            <img
              src="/buyer-supplier-req-bg-img.png"
              alt="Buy Supply Bg Img"
              className=" w-full"
            />
            <a
              href="https://youtu.be/i8tgRHXx4oQ?feature=shared"
              target="_blank"
              rel="noopener noreferrer"
              className=" flex items-center justify-center absolute w-20 screen-970px:w-16 screen-750px:w-12 screen-580px:w-16 screen-420px:w-12"
            >
              <img
                src="/youtube-btn-red-icon.png"
                alt="Youtube Icon"
                className=" w-full"
              />
            </a>
          </div>
          <div className=" w-48% flex items-center justify-start flex-col screen-580px:w-full">
            <div className=" w-full flex items-center justify-between text-p2 font-h1 screen-970px:text-p3 screen-750px:text-p4 screen-420px:text-p5">
              <span
                onClick={() => setBuyAndSupplyDataCondition(false)}
                className={`${
                  !buyAndSupplyDataCondition
                    ? "text-header-serch-icon-color border-header-serch-icon-color"
                    : " text-white border-buy-supply-bg-color"
                } w-49% text-center py-1 border-b-2 cursor-pointer hover:text-header-serch-icon-color hover:border-header-serch-icon-color screen-420px:border-b`}
              >
                Buyer
              </span>
              <span
                onClick={() => setBuyAndSupplyDataCondition(true)}
                className={`${
                  buyAndSupplyDataCondition
                    ? "text-header-serch-icon-color border-header-serch-icon-color"
                    : " text-white border-buy-supply-bg-color"
                } w-49% text-center py-1 border-b-2 cursor-pointer hover:text-header-serch-icon-color hover:border-header-serch-icon-color screen-420px:border-b`}
              >
                Supplier
              </span>
            </div>
            {!buyAndSupplyDataCondition ? (
              <div className=" w-full flex items-start justify-center flex-col text-p2 font-h2 text-white gap-2 pt-8 screen-970px:text-p3 screen-970px:pt-6 screen-750px:text-p4 screen-750px:pt-4 screen-420px:text-p5">
                <p className=" flex items-center justify-start pl-7 relative screen-750px:pl-4">
                  <img
                    src="/checked-green-icon.png"
                    alt="Checked Icon"
                    className=" w-4 absolute top-[5px] left-0 screen-970px:top-[3px] screen-750px:w-3 screen-420px:top-[2px]"
                  />
                  <span>Post your requirements.</span>
                </p>
                <p className=" flex items-center justify-start pl-7 relative screen-750px:pl-4">
                  <img
                    src="/checked-green-icon.png"
                    alt="Checked Icon"
                    className=" w-4 absolute top-[5px] left-0 screen-970px:top-[3px] screen-750px:w-3 screen-420px:top-[2px]"
                  />
                  <span>Sit back for multiple suppliers to contact you.</span>
                </p>
                <p className=" flex items-center justify-start pl-7 relative screen-750px:pl-4">
                  <img
                    src="/checked-green-icon.png"
                    alt="Checked Icon"
                    className=" w-4 absolute top-[5px] left-0 screen-970px:top-[3px] screen-750px:w-3 screen-420px:top-[2px]"
                  />
                  <span>
                    Choose among the suppliers based on the ratings and reviews.
                  </span>
                </p>
              </div>
            ) : (
              <div className=" w-full flex items-start justify-center flex-col text-p2 font-h2 text-white gap-2 pt-8 screen-970px:text-p3 screen-970px:pt-6 screen-750px:text-p4 screen-750px:pt-4 screen-420px:text-p5">
                <p className=" flex items-center justify-start pl-7 relative screen-750px:pl-4">
                  <img
                    src="/checked-green-icon.png"
                    alt="Checked Icon"
                    className=" w-4 absolute top-[5px] left-0 screen-970px:top-[3px] screen-750px:w-3 screen-420px:top-[2px]"
                  />
                  <span>
                    Choose among the suppliers based on the ratings and reviews.
                  </span>
                </p>
                <p className=" flex items-center justify-start pl-7 relative screen-750px:pl-4">
                  <img
                    src="/checked-green-icon.png"
                    alt="Checked Icon"
                    className=" w-4 absolute top-[5px] left-0 screen-970px:top-[3px] screen-750px:w-3 screen-420px:top-[2px]"
                  />
                  <span>Sit back for multiple suppliers to contact you.</span>
                </p>
                <p className=" flex items-center justify-start pl-7 relative screen-750px:pl-4">
                  <img
                    src="/checked-green-icon.png"
                    alt="Checked Icon"
                    className=" w-4 absolute top-[5px] left-0 screen-970px:top-[3px] screen-750px:w-3 screen-420px:top-[2px]"
                  />
                  <span>Post your requirements.</span>
                </p>
              </div>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}

export default BuySupply;
