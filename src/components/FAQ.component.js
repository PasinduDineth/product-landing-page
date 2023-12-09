import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"



const FAQ = () => (
  <div
  className="flex w-full mt-5 flex-col xl:flex-row 2xl:mt-10"
  
>
  <div className="flex-1 flex items-center bg-gray-100 mr-2.5 object-contain">
    <StaticImage
      className="w-full object-contain"
      alt=""
      src="../images/1.png"
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

)

export default FAQ