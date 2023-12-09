import * as React from "react"
import { BsFillExclamationCircleFill } from 'react-icons/bs';


const Header = () => (
    <div className="flex justify-between flex-col items-center md:flex-row">
        <div className="flex justify-between flex-1 z-[5] items-start">
            <div>
            <h1 className="font-heading text-black text-3xl font-semibold text-center xl:font-bold xl:text-left">
                FINDSOMEREVIEWS
            </h1>
            <p className="font-body font-medium text-[15px] text-center xl:text-left">
                Choose Gold Over Junk
            </p>
            </div>
            <div className="items-center hidden md:flex">
            <BsFillExclamationCircleFill className="mr-2"/>
            <span className="italic font-medium m-0 p-0">Affiliate Disclosure</span>
            </div>
        </div>
    </div>
)

export default Header