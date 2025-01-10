import Navbar1 from "../component/Navbar"
import Footer from "../component/footer";
import { FaTwitter } from "react-icons/fa";
import { IoLogoFacebook } from "react-icons/io";
import { FaInstagram , FaLinkedin} from "react-icons/fa";
import Image from "next/image";
export default function Contact () {
    return (
        <>
        <div>
            <Navbar1/>
        </div>
        <div className="max-w-[1440px] flex flex-col justify-center mt-[30px] gap-3 lg:gap-[100px] lg:flex-row lg:mx-auto">
            {/* text */}
            <div className="flex flex-col justify-center items-center lg:items-baseline lg:justify-start m-auto lg:mx-[80px] mx-[20px]">
                <h5 className="text-[16px] font-bold text-[#252B42]">CONTACT US</h5>
                <h1 className="text-[40px] lg:text-[50px] font-bold text-[#252B42] mt-[15px] text-center lg:text-start">Get in touch
                today!</h1>
                <h4 className="text-[20px] font-medium text-[#737373] mt-[15px] text-center lg:text-start">We know how large objects will act&rsquo; but things 
                on a small scale just do 
                not act that way.</h4>
                <h3 className="text-[24px] font-bold text-[#252B42] mt-[15px] text-start">Phone ; +451 215 215 </h3>
                <h3 className="text-[24px] font-bold text-[#252B42] mt-[10px]">Fax : +451 215 215 </h3>
                <div className="flex flex-row gap-3 mt-[15px]">
                <FaTwitter className="h-[30px] w-[24px] text-[#252B42]"/>
                <IoLogoFacebook className="h-[30px] w-[24px] text-[#252B42]"/>
                <FaInstagram className="h-[30px] w-[24px] text-[#252B42]"/>
                <FaLinkedin className="h-[30px] w-[24px] text-[#252B42]"/>
                </div>
            </div>
            {/* picture */}
            <div className="lg:mr-[50px] m-auto">
                <Image src="/none.png" alt="none" height="512" width="632"/>
            </div>
        </div>

        <div className="max-w-[1440px] h-[1500px] md:bg-white md:mt-[20px] bg-[#f0f0f0] md:h-[600px]">
            {/* text */}
            <div className="flex flex-col justify-center items-center mt-[20px] mx-[20px]">
                <h6 className="text-[14px] font-bold text-[#252B42]">VISIT OUR OFFICE</h6>
                <h2 className="text-[40px] font-bold text-[#252B42] text-center">We help small businesses 
                with big ideas</h2>
            </div>
        <div className="flex flex-col justify-center items-center md:flex-row md:mt-[50px]">
            <div className="h-[400px] w-[300px] mx-[20px] md:mx-0 bg-white flex flex-col justify-center items-center text-center mt-[15px] lg:h-[400px] lg:w-[428px]">
            <Image src="/v.png" alt="pic" height="72" width="72" className="mb-[20px]"/>
            <div>
                <h6 className="text-[14px] font-bold text-[#252B42]">georgia.young@example.com</h6>
                <h6 className="text-[14px] font-bold text-[#252B42] mt-[5px]">georgia.young@ple.com</h6>
                <h5 className="text-[16px] font-bold text-[#252B42] mt-[15px]">Get Support</h5>
            </div>
            <div className="h-[54px] w-[190px] rounded-[37px] border-2 border-solid border-[#23A6F0] flex items-center justify-center mt-[20px]">
                <h6 className="text-[14px] font-bold text-[#23A6F0]">Submit Request</h6>
            </div>
            </div>
            {/* sec */}
            <div className="h-[400px] w-[300px] mx-[20px] md:mx-0 bg-[#252B42] flex flex-col justify-center items-center text-center lg:h-[400px] lg:w-[428px]">
            <Image src="/vv.png" alt="pic" height="72" width="72" className="mb-[20px]"/>
            <div>
                <h6 className="text-[14px] font-bold text-white">georgia.young@example.com</h6>
                <h6 className="text-[14px] font-bold text-white mt-[5px]">georgia.young@ple.com</h6>
                <h5 className="text-[16px] font-bold text-white mt-[15px]">Get Support</h5>
            </div>
            <div className="h-[54px] w-[190px] rounded-[37px] border-2 border-solid border-[#23A6F0] flex items-center justify-center mt-[20px]">
                <h6 className="text-[14px] font-bold text-[#23A6F0]">Submit Request</h6>
            </div>
            </div>
            {/* third */}
            <div className="h-[400px] w-[300px] mx-[20px] md:mx-0 bg-white flex flex-col justify-center items-center text-center mt-[15px] lg:h-[400px] lg:w-[428px]">
            <Image src="/vvv.png" alt="pic" height="72" width="72" className="mb-[20px]"/>
            <div>
                <h6 className="text-[14px] font-bold text-[#252B42]">georgia.young@example.com</h6>
                <h6 className="text-[14px] font-bold text-[#252B42] mt-[5px]">georgia.young@ple.com</h6>
                <h5 className="text-[16px] font-bold text-[#252B42] mt-[15px]">Get Support</h5>
            </div>
            <div className="h-[54px] w-[190px] rounded-[37px] border-2 border-solid border-[#23A6F0] flex items-center justify-center mt-[20px]">
                <h6 className="text-[14px] font-bold text-[#23A6F0]">Submit Request</h6>
            </div>
            </div>
        </div>
        </div>
        {/* last part */}
        <div className="flex flex-col justify-center items-center text-center mt-[20px]">
            <Image src="/arrow.png" alt="pic" height="20" width="70"/>
            <h5 className="text-[16px] font-bold text-[#252B42] mt-[30px]">WE Can't WAIT TO MEET YOU</h5>
            <h1 className="text-[50px] font-bold text-[#252B42] mt-[15px]">Let&apos;s Talk</h1>
            <div className="h-[52px] w-[190px] rounded-[5px] bg-[#23A6F0] flex justify-center mt-[15px] mb-[500px] lg:mb-[200px]">
                   <button className="text-[14px] font-bold">Try it free now</button>
            </div>
        </div>
        <Footer/>
        </>
    )
}