import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"



const Reviews = () => (

      <div className="mt-5 2xl:mt-10" >
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
)
export default Reviews