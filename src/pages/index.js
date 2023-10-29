import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { BsFillArrowRightCircleFill } from 'react-icons/bs';
import { BsFillExclamationCircleFill } from 'react-icons/bs';
import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../components/index.module.css"

const IndexPage = () => (
  <div>
  <div className="font-body antialiased text-[#41454c] bg-[#FFFFFF]">
  <div className="my-5 px-[10%]">
    <div
      className="flex justify-between flex-col items-center md:flex-row"
      data-aos="slide-down"
    >
      <div className="flex justify-between flex-1 z-[5] items-start">
        <div>
          <h1 className="font-heading text-black text-3xl font-semibold text-center xl:font-bold xl:text-left">
            FINDSOMEREVIEWS
          </h1>
          <p className="font-body font-medium text-[15px] text-center xl:text-left">
            Choose Gold Over Junk
          </p>
        </div>
        <div className="flex items-center">
          <BsFillExclamationCircleFill className="mr-2"/>
          <span className="italic font-medium m-0 p-0">Affiliate Disclosure</span>
        </div>
      </div>
    </div>
    <div
      className="flex mt-10 text-xl flex-col xl:flex-row"
      data-aos="slide-down"
    >
      <div className="flex-1 z-[5]">
        <StaticImage
          objectFit="contain"
          imgClassName="w-full"
          className="w-full"
          alt=""
          src="../images/couch_uZIZTzfr7.png"
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
        <h1 className="text-black font-heading text-3xl font-semibold text-center xl:text-[25px] xl:text-left">
          Canepilo Sofa - Single Set
        </h1>
        <p className="font-body text-center xl:text-left">
          Sub tittle goes here
        </p>
        <p className="mt-2.5 text-black text-lg text-center xl:text-left">
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
    <div className="mt-5" data-aos="slide-up">
      <h1 className="text-black font-heading mt-[25px] py-2 px-2.5 bg-gray-100 text-3xl font-semibold text-center xl:text-[25px] xl:text-left">
        Description
      </h1>
      <p className="text-black text-lg mt-[15px] ml-[15px] text-center xl:text-left">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur
        adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
        laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
        in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa
        qui officia deserunt mollit anim id est laborum.
      </p>
    </div>
    <div className="mt-5 2xl:mt-10" data-aos="slide-up">
      <div className="bg-amber-50 grid -mx-4 sm:grid-cols-2 lg:grid-cols-4">
        <div className="px-4">
          <div className="py-6">
            <h3 className="font-bold text-[#ff9900] lg:mb-4 xl:text-3xl">
              50+
            </h3>
            <h5 className="text-black text-lg font-semibold ">
              Reusable Components
            </h5>
            <p className="text-sm">
              orem ipsum dolor sit amet conse ctetur adipiscing elit
            </p>
          </div>
        </div>
        <div className="px-4">
          <div className="py-6">
            <h3 className="font-bold text-[#ff9900] lg:mb-4 xl:text-3xl">
              54%
            </h3>
            <h5 className="text-black text-lg font-semibold ">
              Fully Customizable
            </h5>
            <p className="text-sm">
              orem ipsum dolor sit amet conse ctetur adip
            </p>
          </div>
        </div>
        <div className="px-4">
          <div className="py-6">
            <h3 className="font-bold text-[#ff9900] lg:mb-4 xl:text-3xl">24</h3>
            <h5 className="text-black text-lg font-semibold ">
              Dark Mode Support
            </h5>
            <p className="text-sm">
              orem ipsum dolor sit amet conse ctetur adipiscite
            </p>
          </div>
        </div>
        <div className="px-4">
          <div className="py-6">
            <h3 className="font-bold text-[#ff9900] lg:mb-4 xl:text-3xl">
              100%
            </h3>
            <h5 className="text-black text-lg font-semibold ">
              Export Code
            </h5>
            <p className="text-sm">
              Lorem ipsum dolor sit amet conse&nbsp;aute irure dol
            </p>
          </div>
        </div>
      </div>
    </div>
    <div
      className="mt-[15px] flex flex-col xl:flex-row 2xl:mt-10"
      data-aos="slide-up"
    >
      <div className="basis-2/5">
        <h1 className="text-black font-heading mt-[25px] py-2 px-2.5 bg-gray-100 text-3xl font-semibold text-center xl:text-[25px] xl:text-left 2xl:mt-0">
          Features
        </h1>
        <ul className="mt-[15px] ml-5 list-disc list-inside">
          <li className="font-body text-black text-lg my-[15px] flex items-center gap-x-3">
            <div style={{ fontSize: "inherit", color: "inherit", padding: 2 }}>
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth={0}
                viewBox="0 0 512 512"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M256 8c137 0 248 111 248 248S393 504 256 504 8 393 8 256 119 8 256 8zm113.9 231L234.4 103.5c-9.4-9.4-24.6-9.4-33.9 0l-17 17c-9.4 9.4-9.4 24.6 0 33.9L285.1 256 183.5 357.6c-9.4 9.4-9.4 24.6 0 33.9l17 17c9.4 9.4 24.6 9.4 33.9 0L369.9 273c9.4-9.4 9.4-24.6 0-34z" />
              </svg>
            </div>
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborum.
          </li>
          <li className="font-body text-black text-lg my-[15px] flex items-center gap-x-3">
            <div style={{ fontSize: "inherit", color: "inherit", padding: 2 }}>
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth={0}
                viewBox="0 0 512 512"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M256 8c137 0 248 111 248 248S393 504 256 504 8 393 8 256 119 8 256 8zm113.9 231L234.4 103.5c-9.4-9.4-24.6-9.4-33.9 0l-17 17c-9.4 9.4-9.4 24.6 0 33.9L285.1 256 183.5 357.6c-9.4 9.4-9.4 24.6 0 33.9l17 17c9.4 9.4 24.6 9.4 33.9 0L369.9 273c9.4-9.4 9.4-24.6 0-34z" />
              </svg>
            </div>
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex.
          </li>
          <li className="font-body text-black text-lg my-[15px] flex items-center gap-x-3">
            <div style={{ fontSize: "inherit", color: "inherit", padding: 2 }}>
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth={0}
                viewBox="0 0 512 512"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M256 8c137 0 248 111 248 248S393 504 256 504 8 393 8 256 119 8 256 8zm113.9 231L234.4 103.5c-9.4-9.4-24.6-9.4-33.9 0l-17 17c-9.4 9.4-9.4 24.6 0 33.9L285.1 256 183.5 357.6c-9.4 9.4-9.4 24.6 0 33.9l17 17c9.4 9.4 24.6 9.4 33.9 0L369.9 273c9.4-9.4 9.4-24.6 0-34z" />
              </svg>
            </div>
            ea commodo consequat. Duis aute irure dolor in reprehenderit in
            voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          </li>
          <li className="font-body text-black text-lg my-[15px] flex items-center gap-x-3">
            <div style={{ fontSize: "inherit", color: "inherit", padding: 2 }}>
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth={0}
                viewBox="0 0 512 512"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M256 8c137 0 248 111 248 248S393 504 256 504 8 393 8 256 119 8 256 8zm113.9 231L234.4 103.5c-9.4-9.4-24.6-9.4-33.9 0l-17 17c-9.4 9.4-9.4 24.6 0 33.9L285.1 256 183.5 357.6c-9.4 9.4-9.4 24.6 0 33.9l17 17c9.4 9.4 24.6 9.4 33.9 0L369.9 273c9.4-9.4 9.4-24.6 0-34z" />
              </svg>
            </div>
            Cras adipiscing enim eu turpis egestas. Lobortis elementum nibh
            tellus molestie nunc. Porttitor lacus luctus.
          </li>
          <li className="font-body text-black text-lg my-[15px] flex items-center gap-x-3">
            <div style={{ fontSize: "inherit", color: "inherit", padding: 2 }}>
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth={0}
                viewBox="0 0 512 512"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M256 8c137 0 248 111 248 248S393 504 256 504 8 393 8 256 119 8 256 8zm113.9 231L234.4 103.5c-9.4-9.4-24.6-9.4-33.9 0l-17 17c-9.4 9.4-9.4 24.6 0 33.9L285.1 256 183.5 357.6c-9.4 9.4-9.4 24.6 0 33.9l17 17c9.4 9.4 24.6 9.4 33.9 0L369.9 273c9.4-9.4 9.4-24.6 0-34z" />
              </svg>
            </div>
            Id interdum velit laoreet id donec ultrices tincidunt arcu non.
          </li>
          <li className="font-body text-black text-lg my-[15px] flex items-center gap-x-3">
            <div style={{ fontSize: "inherit", color: "inherit", padding: 2 }}>
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth={0}
                viewBox="0 0 512 512"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M256 8c137 0 248 111 248 248S393 504 256 504 8 393 8 256 119 8 256 8zm113.9 231L234.4 103.5c-9.4-9.4-24.6-9.4-33.9 0l-17 17c-9.4 9.4-9.4 24.6 0 33.9L285.1 256 183.5 357.6c-9.4 9.4-9.4 24.6 0 33.9l17 17c9.4 9.4 24.6 9.4 33.9 0L369.9 273c9.4-9.4 9.4-24.6 0-34z" />
              </svg>
            </div>
            Eleifend donec pretium vulputate sapien nec. At tellus at urna
            condimentum.
          </li>
          <li className="font-body text-black text-lg my-[15px] flex items-center gap-x-3">
            <div style={{ fontSize: "inherit", color: "inherit", padding: 2 }}>
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth={0}
                viewBox="0 0 512 512"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M256 8c137 0 248 111 248 248S393 504 256 504 8 393 8 256 119 8 256 8zm113.9 231L234.4 103.5c-9.4-9.4-24.6-9.4-33.9 0l-17 17c-9.4 9.4-9.4 24.6 0 33.9L285.1 256 183.5 357.6c-9.4 9.4-9.4 24.6 0 33.9l17 17c9.4 9.4 24.6 9.4 33.9 0L369.9 273c9.4-9.4 9.4-24.6 0-34z" />
              </svg>
            </div>
            Lectus sit amet est placerat in egestas erat imperdiet sed. Sed
            ullamcorper morbi tincidunt ornare massa eget.
          </li>
        </ul>
      </div>
      <div className="basis-3/5 ml-5 flex flex-col">
        <h1 className="text-black font-heading mt-[25px] py-2 px-2.5 bg-gray-100 mb-2.5 text-3xl font-semibold text-center xl:text-[25px] xl:text-right 2xl:mt-0">
          Trending Products
        </h1>
        <div className="flex flex-wrap -m-4 2xl:m-0">
          <a className="p-4 block md:w-1/3" href="#">
            <div className="h-full border-2 border-gray-200 border-opacity-60 overflow-hidden rounded-globa">
              <StaticImage
                className="w-full object-cover object-center transition-all ease-in duration-200 hover:scale-105 bg-gray-50 md:h-36 lg:h-48"
                alt="No alt"
                src="../images/photo_1499750310107_5fef28a66643.jpeg"
              />
              <div className="p-6">
                <h1 className="title-font text-lg font-medium text-gray-900 mb-3 ">
                  The Catalyzer
                </h1>
                <p className="leading-relaxed mb-3">
                  Photo booth fam kinfolk cold-pressed sriracha leggings
                  jianbing microdosing tousled waistcoat.
                </p>
                <div className="justify-between flex items-center flex-wrap text-primary-500 mt-2">
                <BsFillArrowRightCircleFill size="1.25em" color="#ff9900"/>
                  <div className="flex">
                    <span className="text-[#ff9900]">
                      <div
                        style={{
                          fontSize: "inherit",
                          color: "inherit",
                          padding: 2
                        }}
                      >
                        <svg
                          stroke="currentColor"
                          fill="currentColor"
                          strokeWidth={0}
                          viewBox="0 0 576 512"
                          height="1em"
                          width="1em"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z" />
                        </svg>
                      </div>
                    </span>
                    <span className="text-[#ff9900]">
                      <div
                        style={{
                          fontSize: "inherit",
                          color: "inherit",
                          padding: 2
                        }}
                      >
                        <svg
                          stroke="currentColor"
                          fill="currentColor"
                          strokeWidth={0}
                          viewBox="0 0 576 512"
                          height="1em"
                          width="1em"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z" />
                        </svg>
                      </div>
                    </span>
                    <span className="text-[#ff9900]">
                      <div
                        style={{
                          fontSize: "inherit",
                          color: "inherit",
                          padding: 2
                        }}
                      >
                        <svg
                          stroke="currentColor"
                          fill="currentColor"
                          strokeWidth={0}
                          viewBox="0 0 576 512"
                          height="1em"
                          width="1em"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z" />
                        </svg>
                      </div>
                    </span>
                    <span className="text-[#ff9900]">
                      <div
                        style={{
                          fontSize: "inherit",
                          color: "inherit",
                          padding: 2
                        }}
                      >
                        <svg
                          stroke="currentColor"
                          fill="currentColor"
                          strokeWidth={0}
                          viewBox="0 0 576 512"
                          height="1em"
                          width="1em"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z" />
                        </svg>
                      </div>
                    </span>
                    <span className="text-[#ff9900]">
                      <div
                        style={{
                          fontSize: "inherit",
                          color: "inherit",
                          padding: 2
                        }}
                      >
                        <svg
                          stroke="currentColor"
                          fill="currentColor"
                          strokeWidth={0}
                          viewBox="0 0 576 512"
                          height="1em"
                          width="1em"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z" />
                        </svg>
                      </div>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </a>
          <a className="p-4 block md:w-1/3" href="#">
            <div className="h-full border-2 border-gray-200 border-opacity-60 overflow-hidden rounded-global ">
              <StaticImage
                className="w-full object-cover object-center transition-all ease-in duration-200 hover:scale-105 bg-gray-50 md:h-36 lg:h-48"
                alt="No alt"
                src="../images/photo_1522199755839_a2bacb67c546.jpeg"
              />
              <div className="p-6">
                <h1 className="title-font text-lg font-medium text-gray-900 mb-3 ">
                  The 400 Blows
                </h1>
                <p className="leading-relaxed mb-3">
                  Photo booth fam kinfolk cold-pressed sriracha leggings
                  jianbing microdosing tousled waistcoat.
                </p>
                <div className="justify-between flex items-center flex-wrap text-primary-500 mt-2">
                <BsFillArrowRightCircleFill size="1.25em" color="#ff9900"/>

                  <div className="flex">
                    <span className="text-[#ff9900]">
                      <div
                        style={{
                          fontSize: "inherit",
                          color: "inherit",
                          padding: 2
                        }}
                      >
                        <svg
                          stroke="currentColor"
                          fill="currentColor"
                          strokeWidth={0}
                          viewBox="0 0 576 512"
                          height="1em"
                          width="1em"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z" />
                        </svg>
                      </div>
                    </span>
                    <span className="text-[#ff9900]">
                      <div
                        style={{
                          fontSize: "inherit",
                          color: "inherit",
                          padding: 2
                        }}
                      >
                        <svg
                          stroke="currentColor"
                          fill="currentColor"
                          strokeWidth={0}
                          viewBox="0 0 576 512"
                          height="1em"
                          width="1em"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z" />
                        </svg>
                      </div>
                    </span>
                    <span className="text-[#ff9900]">
                      <div
                        style={{
                          fontSize: "inherit",
                          color: "inherit",
                          padding: 2
                        }}
                      >
                        <svg
                          stroke="currentColor"
                          fill="currentColor"
                          strokeWidth={0}
                          viewBox="0 0 576 512"
                          height="1em"
                          width="1em"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z" />
                        </svg>
                      </div>
                    </span>
                    <span className="text-[#ff9900]">
                      <div
                        style={{
                          fontSize: "inherit",
                          color: "inherit",
                          padding: 2
                        }}
                      >
                        <svg
                          stroke="currentColor"
                          fill="currentColor"
                          strokeWidth={0}
                          viewBox="0 0 576 512"
                          height="1em"
                          width="1em"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z" />
                        </svg>
                      </div>
                    </span>
                    <span className="text-[#ff9900]">
                      <div
                        style={{
                          fontSize: "inherit",
                          color: "inherit",
                          padding: 2
                        }}
                      >
                        <svg
                          stroke="currentColor"
                          fill="currentColor"
                          strokeWidth={0}
                          viewBox="0 0 576 512"
                          height="1em"
                          width="1em"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z" />
                        </svg>
                      </div>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </a>
          <a className="p-4 block md:w-1/3" href="#">
            <div className="h-full border-2 border-gray-200 border-opacity-60 overflow-hidden rounded-global ">
              <StaticImage
                className="w-full object-cover object-center transition-all ease-in duration-200 hover:scale-105 bg-gray-50 md:h-36 lg:h-48"
                alt="No alt"
                src="../images/premium_photo_1661558928174_a04b38beba2f.jpeg"
              />
              <div className="p-6">
                <h1 className="title-font text-lg font-medium text-gray-900 mb-3 ">
                  Shooting Stars
                </h1>
                <p className="leading-relaxed mb-3">
                  Photo booth fam kinfolk cold-pressed sriracha leggings
                  jianbing microdosing tousled waistcoat.
                </p>
                <div className="justify-between flex items-center flex-wrap text-primary-500 mt-2">
                <BsFillArrowRightCircleFill size="1.25em" color="#ff9900"/>

                  <div className="flex">
                    <span className="text-[#ff9900]">
                      <div
                        style={{
                          fontSize: "inherit",
                          color: "inherit",
                          padding: 2
                        }}
                      >
                        <svg
                          stroke="currentColor"
                          fill="currentColor"
                          strokeWidth={0}
                          viewBox="0 0 576 512"
                          height="1em"
                          width="1em"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z" />
                        </svg>
                      </div>
                    </span>
                    <span className="text-[#ff9900]">
                      <div
                        style={{
                          fontSize: "inherit",
                          color: "inherit",
                          padding: 2
                        }}
                      >
                        <svg
                          stroke="currentColor"
                          fill="currentColor"
                          strokeWidth={0}
                          viewBox="0 0 576 512"
                          height="1em"
                          width="1em"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z" />
                        </svg>
                      </div>
                    </span>
                    <span className="text-[#ff9900]">
                      <div
                        style={{
                          fontSize: "inherit",
                          color: "inherit",
                          padding: 2
                        }}
                      >
                        <svg
                          stroke="currentColor"
                          fill="currentColor"
                          strokeWidth={0}
                          viewBox="0 0 576 512"
                          height="1em"
                          width="1em"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z" />
                        </svg>
                      </div>
                    </span>
                    <span className="text-[#ff9900]">
                      <div
                        style={{
                          fontSize: "inherit",
                          color: "inherit",
                          padding: 2
                        }}
                      >
                        <svg
                          stroke="currentColor"
                          fill="currentColor"
                          strokeWidth={0}
                          viewBox="0 0 576 512"
                          height="1em"
                          width="1em"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z" />
                        </svg>
                      </div>
                    </span>
                    <span className="text-[#ff9900]">
                      <div
                        style={{
                          fontSize: "inherit",
                          color: "inherit",
                          padding: 2
                        }}
                      >
                        <svg
                          stroke="currentColor"
                          fill="currentColor"
                          strokeWidth={0}
                          viewBox="0 0 576 512"
                          height="1em"
                          width="1em"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z" />
                        </svg>
                      </div>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
    <div
      className="flex w-full mt-5 flex-col xl:flex-row 2xl:mt-10"
      data-aos="slide-up"
    >
      <div className="flex-1 flex items-center bg-gray-100 mr-2.5">
        <StaticImage
          className="w-full p-[60px] object-cover h-[300px] mb-5 sm:h-[450px] md:h-[550px] lg:h-[650px] xl:h-[400px] 2xl:h-[550px]"
          alt=""
          src="../images/couch_uZIZTzfr7.png"
        />
      </div>
      <div className="basis-3/5 ml-2.5 mt-[30px]">
        <div className="max-w-2xl mx-auto mb-10 lg:mb-14 xl:mb-0">
          <h2 className="text-2xl font-bold  md:text-4xl md:leading-tight xl:text-xl">
            Frequently Asked Questions
          </h2>
        </div>
        <div className="max-w-2xl mx-auto divide-y divide-gray-200 ">
          <div className="first:pt-0 last:pb-0 xl:py-0">
            <div className="py-2.5 flex gap-x-5">
              <span className="flex-shrink-0 mt-1 w-6 h-6 text-gray-500">
                <svg
                  className="flex-shrink-0 mt-1 w-6 h-6 text-gray-500"
                  xmlns="http://www.w3.org/2000/svg"
                  width={16}
                  height={16}
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                  <path d="M5.255 5.786a.237.237 0 0 0 .241.247h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286zm1.557 5.763c0 .533.425.927 1.01.927.609 0 1.028-.394 1.028-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94z" />
                </svg>
              </span>
              <div className="">
                <h3 className="md:text-lg font-semibold text-gray-800 ">
                  Can I cancel at anytime?
                </h3>
                <p className="mt-1 text-gray-500">
                  Yes, you can cancel anytime no questions are asked while you
                  cancel but we would highly appreciate if you will give us some
                  feedback.
                </p>
              </div>
            </div>
          </div>
          <div className="first:pt-0 last:pb-0 xl:py-0">
            <div className="py-2.5 flex gap-x-5">
              <span className="flex-shrink-0 mt-1 w-6 h-6 text-gray-500">
                <svg
                  className="flex-shrink-0 mt-1 w-6 h-6 text-gray-500"
                  xmlns="http://www.w3.org/2000/svg"
                  width={16}
                  height={16}
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                  <path d="M5.255 5.786a.237.237 0 0 0 .241.247h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286zm1.557 5.763c0 .533.425.927 1.01.927.609 0 1.028-.394 1.028-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94z" />
                </svg>
              </span>
              <div className="">
                <h3 className="md:text-lg font-semibold text-gray-800">
                  My team has credits. How do we use them?
                </h3>
                <p className="mt-1 text-gray-500">
                  Once your team signs up for a subscription plan. This is where
                  we sit down, grab a cup of coffee and dial in the details.
                </p>
              </div>
            </div>
          </div>
          <div className="first:pt-0 last:pb-0 xl:py-0">
            <div className="py-2.5 flex gap-x-5">
              <span className="flex-shrink-0 mt-1 w-6 h-6 text-gray-500">
                <svg
                  className="flex-shrink-0 mt-1 w-6 h-6 text-gray-500"
                  xmlns="http://www.w3.org/2000/svg"
                  width={16}
                  height={16}
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                  <path d="M5.255 5.786a.237.237 0 0 0 .241.247h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286zm1.557 5.763c0 .533.425.927 1.01.927.609 0 1.028-.394 1.028-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94z" />
                </svg>
              </span>
              <div className="">
                <h3 className="md:text-lg font-semibold text-gray-800 ">
                  How does Preline's pricing work?
                </h3>
                <p className="mt-1 text-gray-500">
                  Our subscriptions are tiered. Understanding the task at hand
                  and ironing out the wrinkles is key.
                </p>
              </div>
            </div>
          </div>
          <div className="first:pt-0 last:pb-0 xl:py-0">
            <div className="py-2.5 flex gap-x-5">
              <span className="flex-shrink-0 mt-1 w-6 h-6 text-gray-500">
                <svg
                  className="flex-shrink-0 mt-1 w-6 h-6 text-gray-500"
                  xmlns="http://www.w3.org/2000/svg"
                  width={16}
                  height={16}
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                  <path d="M5.255 5.786a.237.237 0 0 0 .241.247h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286zm1.557 5.763c0 .533.425.927 1.01.927.609 0 1.028-.394 1.028-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94z" />
                </svg>
              </span>
              <div className="">
                <h3 className="md:text-lg font-semibold text-gray-800 ">
                  How secure is Preline?
                </h3>
                <p className="mt-1 text-gray-500">
                  Protecting the data you trust to Preline is our first
                  priority. This part is really crucial in keeping the project
                  in line to completion.
                </p>
              </div>
            </div>
          </div>
          <div className="first:pt-0 last:pb-0 xl:py-0">
            <div className="py-2.5 flex gap-x-5">
              <span className="flex-shrink-0 mt-1 w-6 h-6 text-gray-500">
                <svg
                  className="flex-shrink-0 mt-1 w-6 h-6 text-gray-500"
                  xmlns="http://www.w3.org/2000/svg"
                  width={16}
                  height={16}
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                  <path d="M5.255 5.786a.237.237 0 0 0 .241.247h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286zm1.557 5.763c0 .533.425.927 1.01.927.609 0 1.028-.394 1.028-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94z" />
                </svg>
              </span>
              <div className="">
                <h3 className="md:text-lg font-semibold text-gray-800 ">
                  How do I get access to a theme I purchased?
                </h3>
                <p className="mt-1 text-gray-500">
                  If you lose the link for a theme you purchased, don't panic!
                  We've got you covered. You can login to your account, tap your
                  avatar in the upper right corner, and tap Purchases. If you
                  didn't create a login or can't remember the information, you
                  can use our handy Redownload page, just remember to use the
                  same email you originally made your purchases with.
                </p>
              </div>
            </div>
          </div>
          <div className="first:pt-0 last:pb-0 xl:py-[5px]">
            <div className="py-2.5 flex gap-x-5">
              <span className="flex-shrink-0 mt-1 w-6 h-6 text-gray-500">
                <svg
                  className="flex-shrink-0 mt-1 w-6 h-6 text-gray-500"
                  xmlns="http://www.w3.org/2000/svg"
                  width={16}
                  height={16}
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                  <path d="M5.255 5.786a.237.237 0 0 0 .241.247h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286zm1.557 5.763c0 .533.425.927 1.01.927.609 0 1.028-.394 1.028-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94z" />
                </svg>
              </span>
              <div className="">
                <h3 className="md:text-lg font-semibold text-gray-800 ">
                  Upgrade License Type
                </h3>
                <p className="mt-1 text-gray-500">
                  There may be times when you need to upgrade your license from
                  the original type you purchased and we have a solution that
                  ensures you can apply your original purchase cost to the new
                  license purchase.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="mt-5 2xl:mt-10" data-aos="slide-up">
      <h1 className="text-black font-heading mt-[25px] py-2 px-2.5 bg-gray-100 text-3xl font-semibold text-center xl:text-[25px] xl:text-left">
        Reviews
      </h1>
      <div className="my-5">
        <div className="grid gap-8 sm:max-w-sm sm:mx-auto max-w-full lg:grid-cols-3 lg:max-w-full">
          <div className="flex">
            <div className="pt-1 mr-6 text-center">
              <div className="px-2 pb-1 mb-1 border-b border-gray-400">
                <p className="text-sm text-blue-gray-700">Jul</p>
              </div>
              <div className="px-2">
                <p className="text-lg font-bold">18</p>
              </div>
            </div>
            <div className="">
              <div className="mb-2">
                <a
                  className="font-semibold tracking-wide uppercase transition-colors duration-200 hover:text-deep-purple-800 text-primary-500 text-[#ff9900]"
                  href="#"
                >
                  FROM AMAZON
                </a>
              </div>
              <div className="mb-2">
                <a
                  className="inline-block text-2xl font-bold leading-5 text-black transition-colors duration-200 hover:text-deep-purple-accent-400  lg:text-xl"
                  href="#"
                >
                  Why I love Laravel
                </a>
              </div>
              <p className="mb-5">
                {" "}
                Sed ut perspiciatis unde omnis iste natus error sit sed quia
                consequuntur magni voluptatem doloremque.{" "}
              </p>
              <div className="flex items-center">
                <a className="mr-3" href="#">
                  <StaticImage
                    className="object-cover w-10 h-10 rounded-full shadow-sm"
                    alt="No alt"
                    src="../images/pexels_photo_220453.jpeg"
                  />
                </a>
                <div className="">
                  <a
                    className="ml-0.5 font-semibold text-gray-800 transition-colors duration-200 hover:text-deep-purple-accent-400 "
                    href="#"
                  >
                    Petru Vîrtos
                  </a>
                  <div className="flex">
                    <span className="text-[#ff9900]">
                      <div
                        style={{
                          fontSize: "inherit",
                          color: "inherit",
                          padding: 2
                        }}
                      >
                        <svg
                          stroke="currentColor"
                          fill="currentColor"
                          strokeWidth={0}
                          viewBox="0 0 576 512"
                          height="1em"
                          width="1em"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z" />
                        </svg>
                      </div>
                    </span>
                    <span className="text-[#ff9900]">
                      <div
                        style={{
                          fontSize: "inherit",
                          color: "inherit",
                          padding: 2
                        }}
                      >
                        <svg
                          stroke="currentColor"
                          fill="currentColor"
                          strokeWidth={0}
                          viewBox="0 0 576 512"
                          height="1em"
                          width="1em"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z" />
                        </svg>
                      </div>
                    </span>
                    <span className="text-[#ff9900]">
                      <div
                        style={{
                          fontSize: "inherit",
                          color: "inherit",
                          padding: 2
                        }}
                      >
                        <svg
                          stroke="currentColor"
                          fill="currentColor"
                          strokeWidth={0}
                          viewBox="0 0 576 512"
                          height="1em"
                          width="1em"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z" />
                        </svg>
                      </div>
                    </span>
                    <span className="text-[#ff9900]">
                      <div
                        style={{
                          fontSize: "inherit",
                          color: "inherit",
                          padding: 2
                        }}
                      >
                        <svg
                          stroke="currentColor"
                          fill="currentColor"
                          strokeWidth={0}
                          viewBox="0 0 576 512"
                          height="1em"
                          width="1em"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z" />
                        </svg>
                      </div>
                    </span>
                    <span className="text-[#ff9900]">
                      <div
                        style={{
                          fontSize: "inherit",
                          color: "inherit",
                          padding: 2
                        }}
                      >
                        <svg
                          stroke="currentColor"
                          fill="currentColor"
                          strokeWidth={0}
                          viewBox="0 0 576 512"
                          height="1em"
                          width="1em"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z" />
                        </svg>
                      </div>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex">
            <div className="pt-1 mr-6 text-center">
              <div className="px-2 pb-1 mb-1 border-b border-gray-400">
                <p className="text-sm text-blue-gray-700">May</p>
              </div>
              <div className="px-2">
                <p className="text-lg font-bold">6</p>
              </div>
            </div>
            <div className="">
              <div className="mb-2">
                <a
                  className="font-semibold tracking-wide uppercase transition-colors duration-200 hover:text-deep-purple-800 text-primary-500 text-[#ff9900]"
                  href="#"
                >
                  FROM AMAZON
                </a>
              </div>
              <div className="mb-2">
                <a
                  className="inline-block text-2xl font-bold leading-5 text-black transition-colors duration-200 hover:text-deep-purple-accent-400  lg:text-xl"
                  href="#"
                >
                  Pizza, should try it
                </a>
              </div>
              <p className="mb-5">
                {" "}
                Sed ut perspiciatis unde omnis iste natus error sit sed quia
                consequuntur magni voluptatem doloremque.{" "}
              </p>
              <div className="flex items-center">
                <a className="mr-3" href="#">
                  <StaticImage
                    className="object-cover w-10 h-10 rounded-full shadow-sm"
                    alt="No alt"
                    src="../images/pexels_photo_91227.jpeg"
                  />
                </a>
                <div className="">
                  <a
                    className="font-semibold text-gray-800 transition-colors duration-200 hover:text-deep-purple-accent-400 "
                    href="#"
                  >
                    Alex Stratulat
                  </a>
                  <div className="flex">
                    <span className="text-[#ff9900]">
                      <div
                        style={{
                          fontSize: "inherit",
                          color: "inherit",
                          padding: 2
                        }}
                      >
                        <svg
                          stroke="currentColor"
                          fill="currentColor"
                          strokeWidth={0}
                          viewBox="0 0 576 512"
                          height="1em"
                          width="1em"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z" />
                        </svg>
                      </div>
                    </span>
                    <span className="text-[#ff9900]">
                      <div
                        style={{
                          fontSize: "inherit",
                          color: "inherit",
                          padding: 2
                        }}
                      >
                        <svg
                          stroke="currentColor"
                          fill="currentColor"
                          strokeWidth={0}
                          viewBox="0 0 576 512"
                          height="1em"
                          width="1em"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z" />
                        </svg>
                      </div>
                    </span>
                    <span className="text-[#ff9900]">
                      <div
                        style={{
                          fontSize: "inherit",
                          color: "inherit",
                          padding: 2
                        }}
                      >
                        <svg
                          stroke="currentColor"
                          fill="currentColor"
                          strokeWidth={0}
                          viewBox="0 0 576 512"
                          height="1em"
                          width="1em"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z" />
                        </svg>
                      </div>
                    </span>
                    <span className="text-[#ff9900]">
                      <div
                        style={{
                          fontSize: "inherit",
                          color: "inherit",
                          padding: 2
                        }}
                      >
                        <svg
                          stroke="currentColor"
                          fill="currentColor"
                          strokeWidth={0}
                          viewBox="0 0 576 512"
                          height="1em"
                          width="1em"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z" />
                        </svg>
                      </div>
                    </span>
                    <span className="text-[#ff9900]">
                      <div
                        style={{
                          fontSize: "inherit",
                          color: "inherit",
                          padding: 2
                        }}
                      >
                        <svg
                          stroke="currentColor"
                          fill="currentColor"
                          strokeWidth={0}
                          viewBox="0 0 576 512"
                          height="1em"
                          width="1em"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z" />
                        </svg>
                      </div>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex">
            <div className="pt-1 mr-6 text-center">
              <div className="px-2 pb-1 mb-1 border-b border-gray-400">
                <p className="text-sm text-blue-gray-700">Feb</p>
              </div>
              <div className="px-2">
                <p className="text-lg font-bold">27</p>
              </div>
            </div>
            <div className="">
              <div className="mb-2">
                <a
                  className="font-semibold tracking-wide uppercase transition-colors duration-200 hover:text-deep-purple-800 text-primary-500 text-[#ff9900]"
                  href="#"
                >
                  FROM GOOGLE REVIEWS
                </a>
              </div>
              <div className="mb-2">
                <a
                  className="inline-block text-2xl font-bold leading-5 text-black transition-colors duration-200 hover:text-deep-purple-accent-400  lg:text-xl"
                  href="#"
                >
                  Whatever, just feed
                </a>
              </div>
              <p className="mb-5">
                {" "}
                Sed ut perspiciatis unde omnis iste natus error sit sed quia
                consequuntur magni voluptatem doloremque.{" "}
              </p>
              <div className="flex items-center">
                <a className="mr-3" href="#">
                  <StaticImage
                    className="object-cover w-10 h-10 rounded-full shadow-sm"
                    alt="No alt"
                    src="../images/cat_pet_animal_domestic_104827.jpeg"
                  />
                </a>
                <div className="">
                  <a
                    className="font-semibold text-gray-800 transition-colors duration-200 hover:text-deep-purple-accent-400"
                    href="#"
                  >
                    Susie the Cat
                  </a>
                  <div className="flex">
                    <span className="text-[#ff9900]">
                      <div
                        style={{
                          fontSize: "inherit",
                          color: "inherit",
                          padding: 2
                        }}
                      >
                        <svg
                          stroke="currentColor"
                          fill="currentColor"
                          strokeWidth={0}
                          viewBox="0 0 576 512"
                          height="1em"
                          width="1em"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z" />
                        </svg>
                      </div>
                    </span>
                    <span className="text-[#ff9900]">
                      <div
                        style={{
                          fontSize: "inherit",
                          color: "inherit",
                          padding: 2
                        }}
                      >
                        <svg
                          stroke="currentColor"
                          fill="currentColor"
                          strokeWidth={0}
                          viewBox="0 0 576 512"
                          height="1em"
                          width="1em"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z" />
                        </svg>
                      </div>
                    </span>
                    <span className="text-[#ff9900]">
                      <div
                        style={{
                          fontSize: "inherit",
                          color: "inherit",
                          padding: 2
                        }}
                      >
                        <svg
                          stroke="currentColor"
                          fill="currentColor"
                          strokeWidth={0}
                          viewBox="0 0 576 512"
                          height="1em"
                          width="1em"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z" />
                        </svg>
                      </div>
                    </span>
                    <span className="text-[#ff9900]">
                      <div
                        style={{
                          fontSize: "inherit",
                          color: "inherit",
                          padding: 2
                        }}
                      >
                        <svg
                          stroke="currentColor"
                          fill="currentColor"
                          strokeWidth={0}
                          viewBox="0 0 576 512"
                          height="1em"
                          width="1em"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z" />
                        </svg>
                      </div>
                    </span>
                    <span className="text-[#ff9900]">
                      <div
                        style={{
                          fontSize: "inherit",
                          color: "inherit",
                          padding: 2
                        }}
                      >
                        <svg
                          stroke="currentColor"
                          fill="currentColor"
                          strokeWidth={0}
                          viewBox="0 0 576 512"
                          height="1em"
                          width="1em"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z" />
                        </svg>
                      </div>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="mt-[60px] 2xl:mt-10">
    <div className="text-black text-center max-w-7xl mx-auto xl:py-0">
      <p className="border-solid border-t border-gray-200 pt-5 text-gray-700 text-sm w-4/5 mx-auto italic md:w-3/5 lg:w-4/5 xl:w-full">
        Findsomereviews.com is a participant in the Amazon Services LLC
        Associates Program, an affiliate advertising program designed to provide
        a means for sites to earn advertising fees by advertising and linking
        reviews to Amazon. As an Amazon associate, I earn from qualifying
        purchases. Additionally, Findsomereviews.com may participates in various
        other affiliate programs, and we may get a commission through purchases
        made through our links.
      </p>
      <p className="text-gray-600 w-4/5 mx-auto my-5 text-sm leading-5 xl:leading-[0px]">
        &nbsp;@ 2022, Chai Page Builder. All Rights Reserved
      </p>
    </div>
  </div>
  </div>
  <div className="w-[15%] h-[500px] bg-gray-100 absolute right-[10%] z-[0] top-0" />
  <div className="w-[15%] h-[500px] bg-gray-100 absolute z-[0] left-[10%] top-[10%]" />
</div>

)

export default IndexPage