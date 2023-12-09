import * as React from "react"
import { BsFillExclamationCircleFill } from 'react-icons/bs';


const Footer = () => (
    <div className="mt-[60px] mb-[30px] 2xl:mt-10">
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
        &nbsp;@ 2022,FSR. All Rights Reserved
      </p>
    </div>
  </div>
)

export default Footer