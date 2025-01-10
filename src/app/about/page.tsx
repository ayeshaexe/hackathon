import Image from "next/image";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import Navbar1 from "../component/Navbar";
import Footer from "../component/footer";
export default function About () {
    return (
       <>
        <div>
            <Navbar1/>
        </div>
        <div className="max-w-[1440px] flex flex-col justify-center mt-[30px] gap-3 lg:gap-[100px] lg:flex-row lg:mx-auto">
        {/* text */}
            <div className="flex flex-col justify-center items-center lg:items-baseline lg:justify-start m-auto lg:mx-[80px] mx-[20px]">
                <h5 className="text-[16px] font-bold text-[#252B42]">ABOUT COMPANY</h5>
                <h1 className="text-[40px] lg:text-[50px] font-bold text-[#252B42] mt-[15px] text-center lg:text-start">ABOUT US</h1>
                <h4 className="text-[20px] font-medium text-[#737373] mt-[15px] text-center lg:text-start">We know how large objects will act, 
                but things on a small scale</h4>
                <div className="h-[52px] w-[200px] bg-[#23A6F0] text-white text-center flex justify-center items-center text-[14px] font-bold rounded-[5px] mt-[20px] hover:bg-[#8EC2F2] cursor-pointer">Get Quote Now</div>
            </div>
        {/* picture */}
            <div className="lg:mr-[50px] m-auto">
                <Image src="/shop.png" alt="none" height="512" width="632"/>
            </div>
        </div>
        {/* sec two */}
        <div className="mt-[30px] mx-[30px]">
            <div className="flex flex-col">
                <p className="text-[14px] font-noraml text-[#E74040] lg:ml-[50px] w-[100px] text-center">Problems trying</p>
                <div className="flex flex-col lg:flex-row lg:gap-[160px] gap-3 justify-center mt-[20px]">
                <h3 className="text-[24px] font-bold text-[#252B42] lg:w-[450px] lg:text-left">Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.</h3>
                <p className="text-[14px] font-noraml text-[#737373] lg:w-[450px]">Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics </p>
                </div>
            </div>
        </div>
        <div className="flex flex-col justify-center items-center text-center gap-5 my-10 md:flex-row lg:flex-row lg:gap-[150px] lg:my-[70px]">
            <div>
                <h1 className="text-[50px] font-bold text-[#252B42]">15K</h1>
                <h5 className="text-[16px] font-bold text-[#737373] ">Happy Customers</h5>
            </div>
            <div>
                <h1 className="text-[50px] font-bold text-[#252B42]">150K</h1>
                <h5 className="text-[16px] font-bold text-[#737373] ">Monthly Visitors</h5>
            </div>
            <div>
                <h1 className="text-[50px] font-bold text-[#252B42]">15</h1>
                <h5 className="text-[16px] font-bold text-[#737373] ">Countries  Worldwide</h5>
            </div>
            <div>
                <h1 className="text-[50px] font-bold text-[#252B42]">100+</h1>
                <h5 className="text-[16px] font-bold text-[#737373] ">Top Partners</h5>
            </div>
        </div>
        <div className="flex justify-center items-center mx-[20px]">
        <div className="relative w-full max-w-3xl aspect-video">
        <iframe
          src="https://www.youtube.com/embed/VlPiVmYuoqw"
          title="Responsive Video"
          className="absolute top-0 left-0 w-full h-full rounded-[20px]"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
        </div>
        </div>
        <div>
            <div className="flex flex-col justify-center items-center text-center mx-[40px] my-[50px]">
                <div className="w-[225px] lg:w-[450px]">
                    <h2 className="text-[40px] font-bold text-[#252B42]">Meet Our Team</h2>
                    <p className="text-[14px] font-normal text-[#737373]">Problems trying to resolve the conflict between 
                    the two major realms of Classical physics: Newtonian mechanics </p>
                </div>
            </div>
            <div className="flex flex-col lg:flex-row justify-center items-center gap-5 mx-[20px]">
                <div className="flex flex-col justify-center items-center text-center">
                    <Image src="/coffee.jpg" alt="pic" height="33" width="316" className="h-[230px]"/>
                    <h5 className="text-[16px] font-bold text-[#252B42] mt-[20px]">Username</h5>
                    <h6 className="text-[14px] font-bold text-[#737373] mt-[10px]">Profession</h6>
                    <div className="flex flex-row text-[#23A6F0] gap-4 mt-2">
                        <FaFacebook className="w-6 h-6"/> 
                        <FaInstagram className="w-6 h-6"/>
                        <FaTwitter className="w-6 h-6"/>
                    </div>
                </div>
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
                    <Image src="/glass.png" alt="pic" height="33" width="316" className="h-[230px]"/>
                    <h5 className="text-[16px] font-bold text-[#252B42] mt-[20px]">Username</h5>
                    <h6 className="text-[14px] font-bold text-[#737373] mt-[10px]">Profession</h6>
                    <div className="flex flex-row text-[#23A6F0] gap-3 mt-2">
                        <FaFacebook className="w-6 h-6"/> 
                        <FaInstagram className="w-6 h-6"/>
                        <FaTwitter className="w-6 h-6"/>
                    </div>
                </div>
            </div>
        </div>
        <div className="flex flex-col justify-center items-center my-[50px]">
            <h2 className="text-[40px] font-bold text-[#252B42] text-center">Big Companies Are Here</h2>
            <p className="text-[14px] font-normal w-[250px] lg:w-[427px] text-[#737373] justify-center items-center text-center mt-[15px]">
            Problems trying to resolve the conflict between 
            the two major realms of Classical physics: Newtonian mechanics </p>
            <div className="flex flex-col md:flex-row justify-center items-center lg:gap-[70px]  md:gap-[20px] gap-[40px] pt-[30px] md:mx-[30px]">
            <Image src="/ho.png" alt="pic" height="33" width="109"/>
            <Image src="/ly.png" alt="pic" height="58" width="83"/>
            <Image src="/le.png" alt="pic" height="75" width="102"/>
            <Image src="/st.png" alt="pic" height="42" width="103"/>
            <Image src="/aw.png" alt="pic" height="62" width="104"/>
            <Image src="/be.png" alt="pic" height="72" width="76"/>
        </div>
        </div>
        <div className="flex items-center bg-blue-500">
      <div className="container px-4 lg:px-20 lg:mb-[150px] mb-[500px]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-9 items-center my-6">
          {/* Left Content */}
          <div className="text-white text-center">
            <h3 className="uppercase text-sm font-semibold mb-4 tracking-widest">Work with us</h3>
            <h1 className="text-4xl font-bold mb-6">
              Now Let’s grow <span className="block">Yours</span>
            </h1>
            <p className="text-lg mb-6">
              The gradual accumulation of information about atomic and small-scale behavior
              during the first quarter of the 20th century.
            </p>
            <button className="px-6 py-2 bg-transparent border-2 border-white text-white rounded hover:bg-white hover:text-blue-500 transition">
              Button
            </button>
          </div>

          {/* Right Image */}
          <div className="hidden lg:flex">
            <img
              src="/short.png"
              alt="Model"
              className="object-cover w-full"
            />
          </div>
        </div>
      </div>
    </div>
    <Footer/>
        </>
    )
}