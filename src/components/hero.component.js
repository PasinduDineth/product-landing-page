import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"



const Hero = () => (
    <>
    <div className="flex mt-10 text-xl flex-col xl:flex-row">
    <div className="flex-1 z-[5]">
      <StaticImage
        objectFit="contain"
        imgClassName="w-full"
        className="w-full"
        alt=""
        src="../images/2.png"
      />
      <div className="flex justify-between">
        <StaticImage
                objectFit="contain"
                imgClassName="w-full"
          alt=""
          src="../images/1.png"
        />
        <StaticImage
                objectFit="contain"
                imgClassName="w-full"
          alt=""
          src="../images/2.png"
        />
        <StaticImage
                objectFit="contain"
                imgClassName="w-full"
          alt=""
          src="../images/3.png"
        />
        <StaticImage
                objectFit="contain"
                imgClassName="w-full"
          alt=""
          src="../images/4.png"
        />
      </div>
    </div>
    <div className="flex-1 m-5 flex flex-col items-center xl:justify-center xl: xl:items-start z-[5]">
      <h1 className="text-black font-heading text-xl font-semibold text-center xl:text-[25px] xl:text-left">
        Canepilo Sofa - Single Set
      </h1>
      <p className="font-body text-center text-[18px] xl:text-left">
        Sub tittle goes here
      </p>
      <p className="mt-2.5 text-black text-[16px] text-center xl:text-justify">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
        minim veniam, quis nostrud exercitation ullamco laboris nisi ut
        aliquip ex ea commodo consequat. Duis aute irure dolor in
        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
        culpa qui officia deserunt mollit anim id est laborum.
      </p>
      <div className="flex flex-col items-center lg:justify-center xl:items-start xl:">
        <p className="font-body mt-5 text-black font-semibold text-center xl:text-left">
          Promotion Available
        </p>
        <div className="flex items-center my-[12px] justify-center">
          <p className="font-body font-semibold text-3xl text-red-500 text-center 2xl:font-normal">
            -25%
          </p>
          <p className="font-body font-semibold text-gray-500 text-3xl ml-5 text-center 2xl:font-medium 2xl:text-black 2xl:text-[50px]">
            $82.99
          </p>
        </div>
        <button
          id="szbqvr"
          className="font-body font-bold mt-2.5 text-white px-4 rounded-global py-4 bg-[#ff9900] w-fit text-center flex justify-center items-center"
        >
          Go To Amazon
        </button>
      </div>
    </div>
  </div>
    {/* Hero absolute boxes */}
    <div className="w-[15%] h-[500px] bg-gray-100 absolute right-[10%] z-[0] top-0" />
    <div className="w-[15%] h-[500px] bg-gray-100 absolute z-[0] left-[10%] top-[10%]" />
    </>

)

export default Hero