import * as React from "react"
import { BsFillExclamationCircleFill } from 'react-icons/bs';
import JSONData from "../server/data/header.json"
import Editable from "../utils/editable";
import useJsonFileWriter from '../utils/useJsonFileWriter';
const Header = () => {

    const { saveJsonToFile, error } = useJsonFileWriter();
    const onSave = (text, key) => {
        const fileName = '/data/header.json';
        saveJsonToFile([key], text, fileName);
    }
    return (
    <div className="flex justify-between flex-col items-center md:flex-row">
        <div className="flex justify-between flex-1 z-[5] items-start">
            <div>
            <Editable initialText={JSONData.website_name} onSave={(editedText) => onSave(editedText, "website_name")}>
                <h1 className="font-heading text-black text-3xl font-semibold text-center xl:font-bold xl:text-left">
                    {JSONData.website_name}
                </h1>
            </Editable>
            <p className="font-body font-medium text-[15px] text-center xl:text-left">
                {JSONData.slogan}
            </p>
            </div>
            <div className="items-center hidden md:flex">
            <BsFillExclamationCircleFill className="mr-2"/>
            <span className="italic font-medium m-0 p-0"><a href={JSONData.right_side_link}>{JSONData.right_side_link_name}</a></span>
            </div>
        </div>
        {error && <div>Error: {error.message}</div>}
    </div>
    )
}

export default Header