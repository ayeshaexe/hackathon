import { BsTelephone} from "react-icons/bs";
import {PiEnvelopeLight } from "react-icons/pi";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaFacebook, FaTwitter } from "react-icons/fa";
export default function Top () {
    return (
        <div className="max-w-[1440px]">
            <div className="justify-between bg-[#252B42] h-[58px] text-white py-[0px] px-[40px]  tracking-[0.5px] hidden lg:flex">
               
               <div className="flex items-center gap-4">
               <div className="flex gap-1 items-center">
                    <BsTelephone className="h-4 w-4"/>
                    <h6 className="font-bold text-[14px]">(225) 555-0118</h6>
                </div>
                <div className="flex gap-1 items-center ">
                    <PiEnvelopeLight />
                    <h6 className="font-bold text-[14px]">michelle.rivera@example.com</h6>
                </div>

                </div>
                <div className="flex items-center">
                    <h6 className="font-bold text-[14px]">Follow Us  and get a chance to win 80% off</h6>
                </div>
                <div className="flex items-center gap-3">
                    <div>
                        <h6 className="font-bold text-[14px]">Follow Us :</h6>
                    </div>
                    <div className="flex gap-3 ">
                        <FaInstagram />
                        <FaYoutube />
                        <FaFacebook />
                        <FaTwitter />
                    </div>
                </div>
            </div>
        </div>
    )
}
// h-[58px] bg-[#252B42]