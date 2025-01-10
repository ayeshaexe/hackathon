import Navbar1 from "../component/Navbar";
import Footer from "../component/footer";
import { FaTwitter } from "react-icons/fa";
import { IoLogoFacebook } from "react-icons/io";
import { FaInstagram , FaLinkedin} from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
export default function Pricing () {
    return (
        <>
        <Navbar1/>
        <div className="h-[1162px] max-w-[1440px] ">
        {/* text */}
        <div className="flex flex-col justify-center items-center text-center my-[50px]">
         <h5 className="text-[16px] font-bold text-[#737373]">PRICING</h5>
         <h1 className="text-[40px] lg:text-[50px] font-bold text-[#252B42]">Simple Pricing</h1>
         <div className="flex flex-row">
            <Link href="#" className="text-[14px] font-bold text-[#252B42] mr-[10px]">Home</Link>
            <Image src="/arrow1.png" alt="pic" height="4" width="9"/>
            <h6 className="text-[14px] font-bold text-[#737373] ml-[10px]">Pricing</h6>
         </div>
        </div>
        {/* sec */}
        <div className="h-[2600px] md:h-[2100px] lg:h-[1100px] bg-[#f1f0f0] px-[10px]">
            {/* text */}
            <div className="flex flex-col justify-center items-center text-center">
            <h2 className="text-[40px] font-bold text-[#252B42] mt-[30px]">Pricing</h2>
            <p className="text-[14px] font-normal text-[#737373]">Problems trying to resolve the conflict between <br />
            the two major realms of Classical physics: Newtonian mechanics </p>
            </div>
            {/* sec */}
            <div className="flex flex-row justify-center items-center gap-3 mt-[30px]">
                <h5 className="text-[16px] font-bold text-[#252B42]">Monthly</h5>
                <div className="h-[30px] w-[50px] rounded-[16px] border-2 border-solid border-[#23A6F0] bg-[#FFFFFF]">
                    <div className="rounded-[50px] bg-[#bdbdbd] h-[19px] w-[19px] ml-1 mt-1"></div>
                </div>
                <h5 className="text-[16px] font-bold text-[#252B42]">Yearly</h5>
                <div className="h-[44px] w-[110px] bg-[#B2E3FF] rounded-[37px] flex flex-col justify-center items-center text-center ">
                    <h6 className="text-[15px] font-bold text-[#23A6F0] text-center">Save 25%</h6>
                </div>
            </div>
            {/* sec1 */}
            <div className="flex flex-col justify-center items-center lg:flex-row mt-[50px] gap-4 lg:gap-0">
            <div className="h-[500px] w-[300px] md:w-[400px] mx-[30px] lg:mx-0 bg-white flex flex-col items-center justify-center text-center border-2 border-solid border-[#23A6F0] lg:rounded-[10px]">
                <div>
                    <h3 className="text-[24px] font-bold text-[#252B42]">FREE</h3>
                    <h5 className="text-[16px] font-bold text-[#737373]">Organize across all 
                    apps by hand</h5>
                    <div className="flex justify-center items-center gap-2">
                        <h2 className="text-[40px] font-bold text-[#23A6F0]">0</h2>
                        <div className="flex flex-col text-left">
                            <h3 className="text-[24px] font-bold text-[#23A6F0]">$</h3>
                            <h6 className="text-[14px] font-semibold text-[#8EC2F2]">Per Month</h6>
                        </div>
                    </div>
                    {/* part1 */}
                    <div>
                        <div className="flex flex-row items-center gap-2">
                        <div className="bg-[#2DC071] h-[32px] w-[32px] rounded-[50%]">
                        <Image src="/check.png" alt="pic" height="11" width="25" className="py-2 pl-1 text-white"/></div>
                        <h6 className="text-[14px] font-bold text-[#252B42]">Unlimited product updates</h6>
                        </div>

                        <div className="flex flex-row items-center gap-2 mt-2">
                        <div className="bg-[#2DC071] h-[32px] w-[32px] rounded-[50%]">
                        <Image src="/check.png" alt="pic" height="11" width="25" className="py-2 pl-1 text-white"/></div>
                        <h6 className="text-[14px] font-bold text-[#252B42]">Unlimited product updates</h6>
                        </div>

                        <div className="flex flex-row items-center gap-2 mt-2">
                        <div className="bg-[#2DC071] h-[32px] w-[32px] rounded-[50%]">
                        <Image src="/check.png" alt="pic" height="11" width="25" className="py-2 pl-1 text-white"/></div>
                        <h6 className="text-[14px] font-bold text-[#252B42]">Unlimited product updates</h6>
                        </div>

                        <div className="flex flex-row items-center gap-2 mt-2">
                        <div className="bg-[#BDBDBD] h-[32px] w-[32px] rounded-[50%]">
                        <Image src="/check.png" alt="pic" height="11" width="25" className="py-2 pl-1 text-white"/></div>
                        <h6 className="text-[14px] font-bold text-[#252B42]">1GB Cloud Storage</h6>
                        </div>

                        <div className="flex flex-row items-center gap-2 mt-2">
                        <div className="bg-[#BDBDBD] h-[32px] w-[32px] rounded-[50%]">
                        <Image src="/check.png" alt="pic" height="11" width="25" className="py-2 pl-1 text-white"/></div>
                        <h6 className="text-[14px] font-bold text-[#252B42]">Email and community support</h6>
                        </div>
                        <div className="h-[52px] w-[246px] bg-[#23A6F0] text-white text-center flex justify-center items-center text-[14px] font-bold rounded-[5px] mt-[20px] hover:bg-[#8EC2F2] cursor-pointer">Try for Free</div>
                    </div>
                </div>
            </div>
            {/* sec2 */}
            <div className="h-[550px] w-[300px] md:w-[400px] mx-[30px] lg:mx-0 bg-[#252B42] flex flex-col items-center justify-center text-center border-2 border-solid border-[#23A6F0] lg:rounded-[10px]">
                <div>
                    <h3 className="text-[24px] font-bold text-white">STANDARD</h3>
                    <h5 className="text-[16px] font-bold text-white">Organize across all 
                    apps by hand</h5>
                    <div className="flex justify-center items-center gap-2">
                        <h2 className="text-[40px] font-bold text-[#23A6F0]">9.99</h2>
                        <div className="flex flex-col text-left">
                            <h3 className="text-[24px] font-bold text-[#23A6F0]">$</h3>
                            <h6 className="text-[14px] font-semibold text-[#8EC2F2]">Per Month</h6>
                        </div>
                    </div>
                    {/* part1 */}
                    <div>
                        <div className="flex flex-row items-center gap-2">
                        <div className="bg-[#2DC071] h-[32px] w-[32px] rounded-[50%]">
                        <Image src="/check.png" alt="pic" height="11" width="25" className="py-2 pl-1 text-white"/></div>
                        <h6 className="text-[14px] font-bold text-white">Unlimited product updates</h6>
                        </div>

                        <div className="flex flex-row items-center gap-2 mt-2">
                        <div className="bg-[#2DC071] h-[32px] w-[32px] rounded-[50%]">
                        <Image src="/check.png" alt="pic" height="11" width="25" className="py-2 pl-1 text-white"/></div>
                        <h6 className="text-[14px] font-bold text-white">Unlimited product updates</h6>
                        </div>

                        <div className="flex flex-row items-center gap-2 mt-2">
                        <div className="bg-[#2DC071] h-[32px] w-[32px] rounded-[50%]">
                        <Image src="/check.png" alt="pic" height="11" width="25" className="py-2 pl-1 text-white"/></div>
                        <h6 className="text-[14px] font-bold text-white">Unlimited product updates</h6>
                        </div>

                        <div className="flex flex-row items-center gap-2 mt-2">
                        <div className="bg-[#BDBDBD] h-[32px] w-[32px] rounded-[50%]">
                        <Image src="/check.png" alt="pic" height="11" width="25" className="py-2 pl-1 text-white"/></div>
                        <h6 className="text-[14px] font-bold text-white">1GB Cloud Storage</h6>
                        </div>

                        <div className="flex flex-row items-center gap-2 mt-2">
                        <div className="bg-[#BDBDBD] h-[32px] w-[32px] rounded-[50%]">
                        <Image src="/check.png" alt="pic" height="11" width="25" className="py-2 pl-1 text-white"/></div>
                        <h6 className="text-[14px] font-bold text-white">Email and community support</h6>
                        </div>
                        <div className="h-[52px] w-[246px] bg-[#23A6F0] text-white text-center flex justify-center items-center text-[14px] font-bold rounded-[5px] mt-[20px] hover:bg-[#8EC2F2] cursor-pointer">Try for Free</div>
                    </div>
                </div>
            </div>
            
            {/* sec3 */}
            <div className="h-[500px] w-[300px] md:w-[400px] mx-[30px] lg:mx-0 bg-white flex flex-col items-center justify-center text-center border-2 border-solid border-[#23A6F0] lg:rounded-[10px]">
                <div>
                    <h3 className="text-[24px] font-bold text-[#252B42]">PREMIUM</h3>
                    <h5 className="text-[16px] font-bold text-[#737373]">Organize across all 
                    apps by hand</h5>
                    <div className="flex justify-center items-center gap-2">
                        <h2 className="text-[40px] font-bold text-[#23A6F0]">19.99</h2>
                        <div className="flex flex-col text-left">
                            <h3 className="text-[24px] font-bold text-[#23A6F0]">$</h3>
                            <h6 className="text-[14px] font-semibold text-[#8EC2F2]">Per Month</h6>
                        </div>
                    </div>
                    {/* part1 */}
                    <div>
                        <div className="flex flex-row items-center gap-2">
                        <div className="bg-[#2DC071] h-[32px] w-[32px] rounded-[50%]">
                        <Image src="/check.png" alt="pic" height="11" width="25" className="py-2 pl-1 text-white"/></div>
                        <h6 className="text-[14px] font-bold text-[#252B42]">Unlimited product updates</h6>
                        </div>

                        <div className="flex flex-row items-center gap-2 mt-2">
                        <div className="bg-[#2DC071] h-[32px] w-[32px] rounded-[50%]">
                        <Image src="/check.png" alt="pic" height="11" width="25" className="py-2 pl-1 text-white"/></div>
                        <h6 className="text-[14px] font-bold text-[#252B42]">Unlimited product updates</h6>
                        </div>

                        <div className="flex flex-row items-center gap-2 mt-2">
                        <div className="bg-[#2DC071] h-[32px] w-[32px] rounded-[50%]">
                        <Image src="/check.png" alt="pic" height="11" width="25" className="py-2 pl-1 text-white"/></div>
                        <h6 className="text-[14px] font-bold text-[#252B42]">Unlimited product updates</h6>
                        </div>

                        <div className="flex flex-row items-center gap-2 mt-2">
                        <div className="bg-[#BDBDBD] h-[32px] w-[32px] rounded-[50%]">
                        <Image src="/check.png" alt="pic" height="11" width="25" className="py-2 pl-1 text-white"/></div>
                        <h6 className="text-[14px] font-bold text-[#252B42]">1GB Cloud Storage</h6>
                        </div>

                        <div className="flex flex-row items-center gap-2 mt-2">
                        <div className="bg-[#BDBDBD] h-[32px] w-[32px] rounded-[50%]">
                        <Image src="/check.png" alt="pic" height="11" width="25" className="py-2 pl-1 text-white"/></div>
                        <h6 className="text-[14px] font-bold text-[#252B42]">Email and community support</h6>
                        </div>
                        <div className="h-[52px] w-[246px] bg-[#23A6F0] text-white text-center flex justify-center items-center text-[14px] font-bold rounded-[5px] mt-[20px] hover:bg-[#8EC2F2] cursor-pointer">Try for Free</div>
                    </div>
                </div>
            </div>
            </div>
        {/* 3 */}
        <div className="pt-[70px]">
            <h4 className="text-[20px] font-normal text-[#252B42] flex justify-center items-center text-center">Trusted By Over 4000 Big Companies</h4>
            <div className="flex flex-col md:flex-row justify-center items-center lg:gap-[70px]  md:gap-[20px] gap-[40px] pt-[30px] md:mx-[30px]">
              <Image src="/ho.png" alt="pic" height="33" width="109"/>
              <Image src="/ly.png" alt="pic" height="58" width="83"/>
              <Image src="/le.png" alt="pic" height="75" width="102"/>
              <Image src="/st.png" alt="pic" height="42" width="103"/>
              <Image src="/aw.png" alt="pic" height="62" width="104"/>
              <Image src="/be.png" alt="pic" height="72" width="76"/>
            </div>
        </div>
        </div>

        <div>
            <div className="flex flex-col justify-center items-center text-center mt-[50px] m-[50px]">
            <div className="w-[500px] hidden md:flex flex-col">
            <h2 className="text-[40px] font-bold text-[#252B42]">Pricing FAQs</h2>
            <h4 className="text-[20px] font-normal text-[#737373]">Problems trying to resolve the conflict between 
            the two major realms of Classical physics</h4>
            </div>
            </div>
        </div>
        <div>
            <div className="flex flex-col justify-center items-center text-center mt-[50px] m-[50px]">
            <div className="w-[300px] md:hidden">
            <h2 className="text-[40px] font-bold text-[#252B42]">Pricing FAQs</h2>
            <h4 className="text-[20px] font-normal text-[#737373]">
                We focus on ergonomics and meeting 
                you where you work. It&apos;s only 
                a keystroke away.
            </h4>
            </div>
            </div>
        </div>
            {/* first  gap-[80px] mx-[50px] mt-8*/}
    <div className="flex items-center justify-center">
    <div className="lg:grid lg:grid-cols-2 gap-[100px] hidden">
       <div className="w-[400px] ">
        <div className="flex flex-row items-center gap-2">
        <Image src="/vvvv.png" alt="pic" height="4" width="10" />
        <h5 className="text-[16px] font-bold text-[#252B42]">
        the quick fox jumps over the lazy dog
        </h5>
        </div>
        <p className="text-[14px] font-normal text-[#737373] ml-5">
        Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
        RELIT official consequent door ENIM RELIT Mollie. Excitation venial
        consequent sent nostrum met.
        </p>
        </div>
        <div className="w-[400px]">
        <div className="flex flex-row items-center gap-2">
        <Image src="/vvvv.png" alt="pic" height="4" width="10" />
        <h5 className="text-[16px] font-bold text-[#252B42]">
        the quick fox jumps over the lazy dog
        </h5>
        </div>
        <p className="text-[14px] font-normal text-[#737373] ml-5">
        Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
        RELIT official consequent door ENIM RELIT Mollie. Excitation venial
        consequent sent nostrum met.
        </p>
        </div>
        <div className="w-[400px]">
        <div className="flex flex-row items-center gap-2">
        <Image src="/vvvv.png" alt="pic" height="4" width="10" />
        <h5 className="text-[16px] font-bold text-[#252B42]">
        the quick fox jumps over the lazy dog
        </h5>
        </div>
        <p className="text-[14px] font-normal text-[#737373] ml-5">
        Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
        RELIT official consequent door ENIM RELIT Mollie. Excitation venial
        consequent sent nostrum met.
        </p>
        </div>
        <div className="w-[400px]">
        <div className="flex flex-row items-center gap-2">
        <Image src="/vvvv.png" alt="pic" height="4" width="10" />
        <h5 className="text-[16px] font-bold text-[#252B42]">
        the quick fox jumps over the lazy dog
        </h5>
        </div>
        <p className="text-[14px] font-normal text-[#737373] ml-5">
        Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
        RELIT official consequent door ENIM RELIT Mollie. Excitation venial
        consequent sent nostrum met.
        </p>
        </div>
        <div className="w-[400px]">
        <div className="flex flex-row items-center gap-2">
        <Image src="/vvvv.png" alt="pic" height="4" width="10" />
        <h5 className="text-[16px] font-bold text-[#252B42]">
        the quick fox jumps over the lazy dog
        </h5>
        </div>
        <p className="text-[14px] font-normal text-[#737373] ml-5">
        Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
        RELIT official consequent door ENIM RELIT Mollie. Excitation venial
        consequent sent nostrum met.
        </p>
        </div>
        <div className="w-[400px]">
        <div className="flex flex-row items-center gap-2">
        <Image src="/vvvv.png" alt="pic" height="4" width="10" />
        <h5 className="text-[16px] font-bold text-[#252B42]">
        the quick fox jumps over the lazy dog
        </h5>
        </div>
        <p className="text-[14px] font-normal text-[#737373] ml-5">
        Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
        RELIT official consequent door ENIM RELIT Mollie. Excitation venial
        consequent sent nostrum met.
        </p>
        </div>
    </div>
    </div>
    <div className="hidden lg:flex lg:flex-col justify-center items-center text-center text-[20px] font-normal text-[#737373] mt-[50px]">
        <h4>Haven&apos;t got your answer? Contact our support</h4>
    </div>
    {/* part2 */}
    <div className="flex items-center justify-center mt-[30px]">
    <div className="grid grid-cols-1 gap-[50px] lg:hidden ">
       <div className="w-[300px] md:w-[400px]">
        <h5 className="text-[16px] font-bold text-[#252B42] ml-5">
        Work better together
        </h5>
        <p className="text-[14px] font-normal text-[#737373] ml-5">
        Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
        RELIT official consequent door ENIM RELIT Mollie. Excitation venial
        consequent sent nostrum met.
        </p>
        </div>
        <div className="w-[300px] md:w-[400px]">
        <h5 className="text-[16px] font-bold text-[#252B42] ml-5">
        OpenType features and 
        Variable fonts
        </h5>
        <p className="text-[14px] font-normal text-[#737373] ml-5">
        Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
        RELIT official consequent door ENIM RELIT Mollie. Excitation venial
        consequent sent nostrum met.
        </p>
        </div>
        <div className="w-[300px] md:w-[400px]">
        <h5 className="text-[16px] font-bold text-[#252B42] ml-5">
        Start working faster today
        </h5>
        <p className="text-[14px] font-normal text-[#737373] ml-5">
        Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
        RELIT official consequent door ENIM RELIT Mollie. Excitation venial
        consequent sent nostrum met.
        </p>
        </div>
        <div className="w-[300px] md:w-[400px]">
        <h5 className="text-[16px] font-bold text-[#252B42] ml-5">
        Work at the speed of thought.
        </h5>
        <p className="text-[14px] font-normal text-[#737373] ml-5">
        Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
        RELIT official consequent door ENIM RELIT Mollie. Excitation venial
        consequent sent nostrum met.
        </p>
        </div>
        <div className="w-[300px] md:w-[400px]">
        <h5 className="text-[16px] font-bold text-[#252B42] ml-5">
        The Fastest way to organize
        </h5>
        <p className="text-[14px] font-normal text-[#737373] ml-5">
        Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
        RELIT official consequent door ENIM RELIT Mollie. Excitation venial
        consequent sent nostrum met.
        </p>
        </div>
        <div className="w-[300px] md:w-[400px]">
        <h5 className="text-[16px] font-bold text-[#252B42] ml-5">
        The Fastest way to navigate
        </h5>
        <p className="text-[14px] font-normal text-[#737373] ml-5">
        Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
        RELIT official consequent door ENIM RELIT Mollie. Excitation venial
        consequent sent nostrum met.
        </p>
        </div>
    </div>
    </div>
    <div className="flex flex-col lg:hidden justify-center items-center text-center text-[20px] font-normal text-[#737373] mt-[50px] mx-5">
        <h4>Haven&apos;t got your answer? Contact our support</h4>
    </div>
        <div className="h-[300px] flex flex-col justify-center items-center text-center">
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
        <Footer/>
    </div>
        </>
    )
}