import Navbar1 from "../component/Navbar"
import Link from "next/link"
import Image from "next/image"
import { FaInstagram , FaLinkedin} from "react-icons/fa";
import { FaFacebook, } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { IoLogoFacebook } from "react-icons/io";
export default function Team () {
    return (
        <>
        <Navbar1/>
        <div className="max-w-[1440px]">
        <div className="flex flex-col justify-center items-center text-center my-[50px]">
         <h5 className="text-[16px] font-bold text-[#737373]">WHAT WE DO</h5>
         <h1 className="text-[40px] lg:text-[50px] font-bold text-[#252B42]">Innovation tailored for you</h1>
         <div className="flex flex-row mt-[20px]">
            <Link href="#" className="text-[14px] font-bold text-[#252B42] mr-[10px]">Home</Link>
            <Image src="/arrow1.png" alt="pic" height="4" width="9"/>
            <h6 className="text-[14px] font-bold text-[#737373] ml-[10px]">Team</h6>
         </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mx-[20px]">
            <div className="lg:ml-[20px]">
                <Image src="/heel.png" alt="pic" height="530" width="700"/>
            </div>
            <div className="grid grid-cols-2 gap-3 lg:mr-[20px]">
             <div className="flex justify-center items-center">
               <Image src="/bag.png" alt="pic" height={360} width={260} className="object-contain w-full h-full"/>
             </div>
            <div className="flex justify-center items-center">
                 <Image src="/white.png" alt="pic" height={360} width={260} className="object-contain w-full h-full "/>
            </div>
              <div className="flex justify-center items-center">
                  <Image src="/black.png" alt="pic" height={361} width={260} className="object-contain w-full h-full"/>
               </div>
            <div className="flex justify-center items-center">
                <Image src="/green.png" alt="pic" height={360} width={260} className="object-contain  w-full h-full"/>
            </div>
            </div>
        </div>
        <div className="flex justify-center items-center text-center">
        <h2 className="text-[40px] font-bold text-[#252B42] my-[30px] w-[300px]">Meet our Team</h2>
        </div>
        <div className="flex flex-col lg:flex-row justify-center items-center gap-5 my-[30px]">
                        <div className="flex flex-col justify-center items-center text-center">
                            <Image src="/1.jpg" alt="pic" height="33" width="316" className="h-[230px]"/>
                            <h5 className="text-[16px] font-bold text-[#252B42] mt-[20px]">Username</h5>
                            <h6 className="text-[14px] font-bold text-[#737373] mt-[10px]">Profession</h6>
                            <div className="flex flex-row text-[#23A6F0] gap-4 mt-2">
                                <FaFacebook className="w-6 h-6"/> 
                                <FaInstagram className="w-6 h-6"/>
                                <FaTwitter className="w-6 h-6"/>
                            </div>
                        </div>
                        <div className="flex flex-col justify-center items-center text-center">
                            <Image src="/2.jpg" alt="pic" height="33" width="316" className="h-[230px]"/>
                            <h5 className="text-[16px] font-bold text-[#252B42] mt-[20px]">Username</h5>
                            <h6 className="text-[14px] font-bold text-[#737373] mt-[10px]">Profession</h6>
                            <div className="flex flex-row text-[#23A6F0] gap-3 mt-2">
                                <FaFacebook className="w-6 h-6"/> 
                                <FaInstagram className="w-6 h-6"/>
                                <FaTwitter className="w-6 h-6"/>
                            </div>
                        </div>
                        <div className="flex flex-col justify-center items-center text-center">
                            <Image src="/3.jpg" alt="pic" height="33" width="316" className="h-[230px]"/>
                            <h5 className="text-[16px] font-bold text-[#252B42] mt-[20px]">Username</h5>
                            <h6 className="text-[14px] font-bold text-[#737373] mt-[10px]">Profession</h6>
                            <div className="flex flex-row text-[#23A6F0] gap-3 mt-2">
                                <FaFacebook className="w-6 h-6"/> 
                                <FaInstagram className="w-6 h-6"/>
                                <FaTwitter className="w-6 h-6"/>
                            </div>
                        </div>
        </div>
        <div className="flex flex-col lg:flex-row justify-center items-center gap-5 my-[30px]">
                        <div className="flex flex-col justify-center items-center text-center">
                            <Image src="/glass.png" alt="pic" height="33" width="316" className="h-[230px]"/>
                            <h5 className="text-[16px] font-bold text-[#252B42] mt-[20px]">Username</h5>
                            <h6 className="text-[14px] font-bold text-[#737373] mt-[10px]">Profession</h6>
                            <div className="flex flex-row text-[#23A6F0] gap-4 mt-2">
                                <FaFacebook className="w-6 h-6"/> 
                                <FaInstagram className="w-6 h-6"/>
                                <FaTwitter className="w-6 h-6"/>
                            </div>
                        </div>
                        <div className="flex flex-col justify-center items-center text-center">
                            <Image src="/4.png" alt="pic" height="33" width="316" className="h-[230px]"/>
                            <h5 className="text-[16px] font-bold text-[#252B42] mt-[20px]">Username</h5>
                            <h6 className="text-[14px] font-bold text-[#737373] mt-[10px]">Profession</h6>
                            <div className="flex flex-row text-[#23A6F0] gap-3 mt-2">
                                <FaFacebook className="w-6 h-6"/> 
                                <FaInstagram className="w-6 h-6"/>
                                <FaTwitter className="w-6 h-6"/>
                            </div>
                        </div>
                        <div className="flex flex-col justify-center items-center text-center">
                            <Image src="/coffee.jpg" alt="pic" height="33" width="316" className="h-[230px]"/>
                            <h5 className="text-[16px] font-bold text-[#252B42] mt-[20px]">Username</h5>
                            <h6 className="text-[14px] font-bold text-[#737373] mt-[10px]">Profession</h6>
                            <div className="flex flex-row text-[#23A6F0] gap-3 mt-2">
                                <FaFacebook className="w-6 h-6"/> 
                                <FaInstagram className="w-6 h-6"/>
                                <FaTwitter className="w-6 h-6"/>
                            </div>
                        </div>
        </div>
        <div className="flex flex-col lg:flex-row justify-center items-center gap-5 my-[30px]">
                        <div className="flex flex-col justify-center items-center text-center">
                            <Image src="/eye.png" alt="pic" height="33" width="316" className="h-[230px]"/>
                            <h5 className="text-[16px] font-bold text-[#252B42] mt-[20px]">Username</h5>
                            <h6 className="text-[14px] font-bold text-[#737373] mt-[10px]">Profession</h6>
                            <div className="flex flex-row text-[#23A6F0] gap-4 mt-2">
                                <FaFacebook className="w-6 h-6"/> 
                                <FaInstagram className="w-6 h-6"/>
                                <FaTwitter className="w-6 h-6"/>
                            </div>
                        </div>
                        <div className="flex flex-col justify-center items-center text-center">
                            <Image src="/5.png" alt="pic" height="33" width="316" className="h-[230px]"/>
                            <h5 className="text-[16px] font-bold text-[#252B42] mt-[20px]">Username</h5>
                            <h6 className="text-[14px] font-bold text-[#737373] mt-[10px]">Profession</h6>
                            <div className="flex flex-row text-[#23A6F0] gap-3 mt-2">
                                <FaFacebook className="w-6 h-6"/> 
                                <FaInstagram className="w-6 h-6"/>
                                <FaTwitter className="w-6 h-6"/>
                            </div>
                        </div>
                        <div className="flex flex-col justify-center items-center text-center">
                            <Image src="/6.jpg" alt="pic" height="33" width="316" className="h-[230px]"/>
                            <h5 className="text-[16px] font-bold text-[#252B42] mt-[20px]">Username</h5>
                            <h6 className="text-[14px] font-bold text-[#737373] mt-[10px]">Profession</h6>
                            <div className="flex flex-row text-[#23A6F0] gap-3 mt-2">
                                <FaFacebook className="w-6 h-6"/> 
                                <FaInstagram className="w-6 h-6"/>
                                <FaTwitter className="w-6 h-6"/>
                            </div>
                        </div>
        </div>
        <div className="h-[300px] flex flex-col justify-center items-center text-center my-[40px]">
                    <h2 className="text-[40px] font-bold text-[#252B42]">Start your 14 days free trial</h2>
                    <p className="text-[14px] font-normal text-[#737373] mt-[30px] w-[250px] lg:w-[400px]">Met minim Mollie non desert Alamo est sit cliquey dolor 
                    do met sent. RELIT official consequent.</p>
                    <div className="h-[52px] w-[186px] bg-[#23A6F0] hover:bg-[#0e1d25] text-white text-center flex justify-center items-center text-[14px] font-bold rounded-[5px] mt-[20px] cursor-pointer">Try it Free now</div>
                    <div className="flex flex-row gap-10 mt-[30px]">
                        <FaTwitter className="h-[30px] w-[24px] text-[#55ACEE]"/>
                        <IoLogoFacebook className="h-[30px] w-[24px] text-[#395185]"/>
                        <FaInstagram className="h-[30px] w-[24px] text-[#000000]"/>
                        <FaLinkedin className="h-[30px] w-[24px] text-[#0A66C2]"/>
                    </div>
                </div>
        </div>
        </>
    )
}