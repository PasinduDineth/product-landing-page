import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { BsFillArrowRightCircleFill } from 'react-icons/bs';
import { BsFillExclamationCircleFill } from 'react-icons/bs';


const Feature = () => (
  <div className="mt-[15px] flex flex-col xl:flex-row 2xl:mt-10">
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

)

export default Feature