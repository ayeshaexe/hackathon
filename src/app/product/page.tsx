// components/ShopSection.js
import { BsTelephone} from "react-icons/bs";
import {PiEnvelopeLight } from "react-icons/pi";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaFacebook, FaTwitter } from "react-icons/fa";
import Footer from "../component/footer";
import Link from "next/link";
import Image from "next/image";
import Navbar from "../component/Header1";
export default function ShopSection() {
    const categories = [
      { title: "CLOTHS", items: 5, image: "/hair.jpg" },
      { title: "CLOTHS", items: 5, image: "/dress.jpg" },
      { title: "CLOTHS", items: 5, image: "/blond.jpg" },
      { title: "CLOTHS", items: 5, image: "/two.jpg" },
      { title: "CLOTHS", items: 5, image: "/s.jpg" },
    ];
  
    return (
        <>
        <div className="max-w-[1440px]">
            <div className="justify-between bg-[#23856D] h-[58px] text-white py-[0px] px-[40px]  tracking-[0.5px] hidden lg:flex">
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
            <Navbar/>
      <div className="bg-white py-10 px-5">
        <div className="mb-6 flex flex-col justify-center items-center text-center lg:justify-between lg:flex-row mx-[40px]">
          <h3 className="text-[24px] font-bold text-[#252B42] mb-[60px]">Shop</h3>
          <div className="flex flex-row mb-[20px]">
            <Link href="#" className="text-[14px] font-bold text-[#252B42] mr-[10px]">Home</Link>
            <Image src="/arrow1.png" alt="pic" height="0" width="15" className="h-[20px]"/>
            <h6 className="text-[14px] font-bold text-[#BDBDBD] ml-[10px]">Shop</h6>
         </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {categories.map((category, index) => (
            <div
              key={index}
              className="relative bg-gray-100 overflow-hidden shadow-md hover:shadow-lg"
            >
              <img
                src={category.image}
                alt={category.title}
                className="w-full h-60 object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-10 flex flex-col justify-center items-center">
                <h3 className="text-white text-xl font-semibold">
                  {category.title}
                </h3>
                <p className="text-white text-sm">{category.items} Items</p>
              </div>
            </div>
          ))}
        </div>
      </div>

  <div className="bg-white py-6 px-4 border-t border-b mx-[30px]">
  <div className="grid grid-cols-1 lg:grid-cols-2 justify-between items-center max-w-[1440px] gap-[30px]">
    {/* Left Section: Showing results */}
    <div className="flex justify-center items-center lg:justify-start">
      <p className="text-gray-700 text-sm">Showing all 12 results</p>
    </div>

    {/* Right Section: Filter Controls */}
    <div className="grid grid-cols-1 lg:grid-cols-[auto_auto_auto] items-center gap-[50px]">
      {/* View Icons */}
      <div className="flex items-center gap-4 text-center justify-center">
        <h6 className="text-[14px] font-bold text-[#737373] flex justify-center items-center">
          Views:
        </h6>
        <div className="h-[46px] w-[46px] border-2 border-solid border-[#ECECEC] rounded-[5px] flex justify-center items-center hover:bg-gray-200">
          <Image
            src="/four.png"
            alt="pic"
            height="0"
            width="20"
            className="h-[20px]"
          />
        </div>
        <div className="h-[46px] w-[46px] border-2 border-solid border-[#ECECEC] rounded-[5px] flex justify-center items-center hover:bg-gray-200">
          <Image src="/box.png" alt="pic" height="16" width="20" />
        </div>
      </div>

      {/* Dropdown for Popularity */}
      <div className="flex flex-row gap-2 justify-center items-center ">
        <select className="p-3 border text-[#737373] text-[14px] font-normal bg-[#F9F9F9] border-gray-300 rounded-[5px] h-[50px] w-[141px]">
          <option>Popularity</option>
          <option>Newest</option>
          <option>Price: Low to High</option>
          <option>Price: High to Low</option>
        </select>
        <div>
        <button className="p-2 bg-[#23A6F0] font-bold text-white text-sm rounded-[5px] hover:bg-blue-600 h-[50px] w-[94px]">
          Filter
        </button>
        </div>
      </div>
    </div>
  </div>
</div>
      <div className="flex flex-col md:flex-row justify-center items-center bg-[#e4e4e4] lg:gap-[70px]  md:gap-[20px] gap-[40px] py-[30px] md:mx-[0px] mt-[30px]">
        <Image src="/ho.png" alt="pic" height="33" width="109"/>
        <Image src="/ly.png" alt="pic" height="58" width="83"/>
        <Image src="/le.png" alt="pic" height="75" width="102"/>
        <Image src="/st.png" alt="pic" height="42" width="103"/>
        <Image src="/aw.png" alt="pic" height="62" width="104"/>
        <Image src="/be.png" alt="pic" height="72" width="76"/>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:mx-[20px]lg:mx-[150px] mx-[30px]">
        {/* first */}
        <div className="flex flex-col items-center justify-center">
          <Image src="/boy.png" alt="pic" height="00" width="350" className="mb-[20px] pb-[20px] pt-[20px] mt-[20px] h-[400px]"/>
          <h5 className="text-[16px] font-bold text-[#252B42]">Graphic Design</h5>
          <Link href="#" className="text-[14px] font-bold mt-[10px]">English Department</Link>
          <div className="flex flex-row gap-2 mt-[10px]">
            <h5 className="text-[16px] font-bold text-[#BDBDBD]">$16.48</h5>
            <h5 className="text-[16px] font-bold text-[#23856D]">$6.48</h5>
          </div>
          <div className="flex gap-1 mt-[15px]">
            <p className="h-[16px] w-[16px] rounded-full bg-[#23A6F0]"></p>
            <p className="h-[16px] w-[16px] rounded-full bg-[#23856D]"></p>
            <p className="h-[16px] w-[16px] rounded-full bg-[#E77C40]"></p>
            <p className="h-[16px] w-[16px] rounded-full bg-[#252B42]"></p>
          </div>
        </div>
        {/* sec */}
        <div className="flex flex-col items-center justify-center">
        <Image src="/girl.png" alt="pic" height="000" width="350"className="mb-[20px] pb-[20px] pt-[20px] mt-[20px] h-[400px]"/>
          <h5 className="text-[16px] font-bold text-[#252B42]">Graphic Design</h5>
          <Link href="#" className="text-[14px] font-bold mt-[10px]">English Department</Link>
          <div className="flex flex-row gap-2 mt-[10px]">
            <h5 className="text-[16px] font-bold text-[#BDBDBD]">$16.48</h5>
            <h5 className="text-[16px] font-bold text-[#23856D]">$6.48</h5>
          </div>
          <div  className="flex gap-1 mt-[15px]">
            <p className="h-[16px] w-[16px] rounded-full bg-[#23A6F0]"></p>
            <p className="h-[16px] w-[16px] rounded-full bg-[#23856D]"></p>
            <p className="h-[16px] w-[16px] rounded-full bg-[#E77C40]"></p>
            <p className="h-[16px] w-[16px] rounded-full bg-[#252B42]"></p>
          </div>
        </div>

      {/* third */}
      <div className="flex flex-col items-center justify-center">
          <Image src="/girl5.png" alt="pic" height="00" width="350" className="mb-[20px] pb-[20px] pt-[20px] mt-[20px] h-[400px]"/>
          <h5 className="text-[16px] font-bold text-[#252B42]">Graphic Design</h5>
          <Link href="#" className="text-[14px] font-bold mt-[10px]">English Department</Link>
          <div className="flex flex-row gap-2 mt-[10px]">
            <h5 className="text-[16px] font-bold text-[#BDBDBD]">$16.48</h5>
            <h5 className="text-[16px] font-bold text-[#23856D]">$6.48</h5>
          </div>
          <div className="flex gap-1 mt-[15px]">
            <p className="h-[16px] w-[16px] rounded-full bg-[#23A6F0]"></p>
            <p className="h-[16px] w-[16px] rounded-full bg-[#23856D]"></p>
            <p className="h-[16px] w-[16px] rounded-full bg-[#E77C40]"></p>
            <p className="h-[16px] w-[16px] rounded-full bg-[#252B42]"></p>
          </div>
       </div>
      {/* fourth */}
      <div className="flex flex-col items-center justify-center">
          <Image src="/pj.png" alt="pic" height="00" width="350" className="mb-[20px] pb-[20px] pt-[20px] mt-[20px] h-[400px]"/>
          <h5 className="text-[16px] font-bold text-[#252B42]">Graphic Design</h5>
          <Link href="#" className="text-[14px] font-bold mt-[10px]">English Department</Link>
          <div className="flex flex-row gap-2 mt-[10px]">
            <h5 className="text-[16px] font-bold text-[#BDBDBD]">$16.48</h5>
            <h5 className="text-[16px] font-bold text-[#23856D]">$6.48</h5>
          </div>
          <div className="flex gap-1 mt-[15px]">
            <p className="h-[16px] w-[16px] rounded-full bg-[#23A6F0]"></p>
            <p className="h-[16px] w-[16px] rounded-full bg-[#23856D]"></p>
            <p className="h-[16px] w-[16px] rounded-full bg-[#E77C40]"></p>
            <p className="h-[16px] w-[16px] rounded-full bg-[#252B42]"></p>
          </div>
        </div>
        {/* fourth */}
      <div className="flex flex-col items-center justify-center">
          <Image src="/bald.png" alt="pic" height="00" width="350" className="mb-[20px] pb-[20px] pt-[20px] mt-[20px] h-[400px]"/>
          <h5 className="text-[16px] font-bold text-[#252B42]">Graphic Design</h5>
          <Link href="#" className="text-[14px] font-bold mt-[10px]">English Department</Link>
          <div className="flex flex-row gap-2 mt-[10px]">
            <h5 className="text-[16px] font-bold text-[#BDBDBD]">$16.48</h5>
            <h5 className="text-[16px] font-bold text-[#23856D]">$6.48</h5>
          </div>
          <div className="flex gap-1 mt-[15px]">
            <p className="h-[16px] w-[16px] rounded-full bg-[#23A6F0]"></p>
            <p className="h-[16px] w-[16px] rounded-full bg-[#23856D]"></p>
            <p className="h-[16px] w-[16px] rounded-full bg-[#E77C40]"></p>
            <p className="h-[16px] w-[16px] rounded-full bg-[#252B42]"></p>
          </div>
        </div>
        {/* fourth */}
      <div className="flex flex-col items-center justify-center">
          <Image src="/sho.png" alt="pic" height="00" width="350" className="mb-[20px] pb-[20px] pt-[20px] mt-[20px] h-[400px]"/>
          <h5 className="text-[16px] font-bold text-[#252B42]">Graphic Design</h5>
          <Link href="#" className="text-[14px] font-bold mt-[10px]">English Department</Link>
          <div className="flex flex-row gap-2 mt-[10px]">
            <h5 className="text-[16px] font-bold text-[#BDBDBD]">$16.48</h5>
            <h5 className="text-[16px] font-bold text-[#23856D]">$6.48</h5>
          </div>
          <div className="flex gap-1 mt-[15px]">
            <p className="h-[16px] w-[16px] rounded-full bg-[#23A6F0]"></p>
            <p className="h-[16px] w-[16px] rounded-full bg-[#23856D]"></p>
            <p className="h-[16px] w-[16px] rounded-full bg-[#E77C40]"></p>
            <p className="h-[16px] w-[16px] rounded-full bg-[#252B42]"></p>
          </div>
        </div>
        {/* fourth */}
      <div className="flex flex-col items-center justify-center">
          <Image src="/hands.png" alt="pic" height="00" width="350" className="mb-[20px] pb-[20px] pt-[20px] mt-[20px] h-[400px]"/>
          <h5 className="text-[16px] font-bold text-[#252B42]">Graphic Design</h5>
          <Link href="#" className="text-[14px] font-bold mt-[10px]">English Department</Link>
          <div className="flex flex-row gap-2 mt-[10px]">
            <h5 className="text-[16px] font-bold text-[#BDBDBD]">$16.48</h5>
            <h5 className="text-[16px] font-bold text-[#23856D]">$6.48</h5>
          </div>
          <div className="flex gap-1 mt-[15px]">
            <p className="h-[16px] w-[16px] rounded-full bg-[#23A6F0]"></p>
            <p className="h-[16px] w-[16px] rounded-full bg-[#23856D]"></p>
            <p className="h-[16px] w-[16px] rounded-full bg-[#E77C40]"></p>
            <p className="h-[16px] w-[16px] rounded-full bg-[#252B42]"></p>
          </div>
        </div>
        {/* fourth */}
      <div className="flex flex-col items-center justify-center">
          <Image src="/pink.png" alt="pic" height="00" width="350" className="mb-[20px] pb-[20px] pt-[20px] mt-[20px] h-[400px]"/>
          <h5 className="text-[16px] font-bold text-[#252B42]">Graphic Design</h5>
          <Link href="#" className="text-[14px] font-bold mt-[10px]">English Department</Link>
          <div className="flex flex-row gap-2 mt-[10px]">
            <h5 className="text-[16px] font-bold text-[#BDBDBD]">$16.48</h5>
            <h5 className="text-[16px] font-bold text-[#23856D]">$6.48</h5>
          </div>
          <div className="flex gap-1 mt-[15px]">
            <p className="h-[16px] w-[16px] rounded-full bg-[#23A6F0]"></p>
            <p className="h-[16px] w-[16px] rounded-full bg-[#23856D]"></p>
            <p className="h-[16px] w-[16px] rounded-full bg-[#E77C40]"></p>
            <p className="h-[16px] w-[16px] rounded-full bg-[#252B42]"></p>
          </div>
        </div>
        {/* fourth */}
      <div className="flex flex-col items-center justify-center">
          <Image src="/jac.png" alt="pic" height="00" width="350" className="mb-[20px] pb-[20px] pt-[20px] mt-[20px] h-[400px]"/>
          <h5 className="text-[16px] font-bold text-[#252B42]">Graphic Design</h5>
          <Link href="#" className="text-[14px] font-bold mt-[10px]">English Department</Link>
          <div className="flex flex-row gap-2 mt-[10px]">
            <h5 className="text-[16px] font-bold text-[#BDBDBD]">$16.48</h5>
            <h5 className="text-[16px] font-bold text-[#23856D]">$6.48</h5>
          </div>
          <div className="flex gap-1 mt-[15px]">
            <p className="h-[16px] w-[16px] rounded-full bg-[#23A6F0]"></p>
            <p className="h-[16px] w-[16px] rounded-full bg-[#23856D]"></p>
            <p className="h-[16px] w-[16px] rounded-full bg-[#E77C40]"></p>
            <p className="h-[16px] w-[16px] rounded-full bg-[#252B42]"></p>
          </div>
        </div>
        {/* fourth */}
      <div className="flex flex-col items-center justify-center">
          <Image src="/hoo.png" alt="pic" height="00" width="350" className="mb-[20px] pb-[20px] pt-[20px] mt-[20px] h-[400px]"/>
          <h5 className="text-[16px] font-bold text-[#252B42]">Graphic Design</h5>
          <Link href="#" className="text-[14px] font-bold mt-[10px]">English Department</Link>
          <div className="flex flex-row gap-2 mt-[10px]">
            <h5 className="text-[16px] font-bold text-[#BDBDBD]">$16.48</h5>
            <h5 className="text-[16px] font-bold text-[#23856D]">$6.48</h5>
          </div>
          <div className="flex gap-1 mt-[15px]">
            <p className="h-[16px] w-[16px] rounded-full bg-[#23A6F0]"></p>
            <p className="h-[16px] w-[16px] rounded-full bg-[#23856D]"></p>
            <p className="h-[16px] w-[16px] rounded-full bg-[#E77C40]"></p>
            <p className="h-[16px] w-[16px] rounded-full bg-[#252B42]"></p>
          </div>
        </div>
        {/* fourth */}
      <div className="flex flex-col items-center justify-center">
          <Image src="/flower.png" alt="pic" height="00" width="350" className="mb-[20px] pb-[20px] pt-[20px] mt-[20px] h-[400px]"/>
          <h5 className="text-[16px] font-bold text-[#252B42]">Graphic Design</h5>
          <Link href="#" className="text-[14px] font-bold mt-[10px]">English Department</Link>
          <div className="flex flex-row gap-2 mt-[10px]">
            <h5 className="text-[16px] font-bold text-[#BDBDBD]">$16.48</h5>
            <h5 className="text-[16px] font-bold text-[#23856D]">$6.48</h5>
          </div>
          <div className="flex gap-1 mt-[15px]">
            <p className="h-[16px] w-[16px] rounded-full bg-[#23A6F0]"></p>
            <p className="h-[16px] w-[16px] rounded-full bg-[#23856D]"></p>
            <p className="h-[16px] w-[16px] rounded-full bg-[#E77C40]"></p>
            <p className="h-[16px] w-[16px] rounded-full bg-[#252B42]"></p>
          </div>
        </div>
        {/* fourth */}
      <div className="flex flex-col items-center justify-center">
          <Image src="/skirt.png" alt="pic" height="00" width="350" className="mb-[20px] pb-[20px] pt-[20px] mt-[20px] h-[400px]"/>
          <h5 className="text-[16px] font-bold text-[#252B42]">Graphic Design</h5>
          <Link href="#" className="text-[14px] font-bold mt-[10px]">English Department</Link>
          <div className="flex flex-row gap-2 mt-[10px]">
            <h5 className="text-[16px] font-bold text-[#BDBDBD]">$16.48</h5>
            <h5 className="text-[16px] font-bold text-[#23856D]">$6.48</h5>
          </div>
          <div className="flex gap-1 mt-[15px]">
            <p className="h-[16px] w-[16px] rounded-full bg-[#23A6F0]"></p>
            <p className="h-[16px] w-[16px] rounded-full bg-[#23856D]"></p>
            <p className="h-[16px] w-[16px] rounded-full bg-[#E77C40]"></p>
            <p className="h-[16px] w-[16px] rounded-full bg-[#252B42]"></p>
          </div>
        </div>
        </div>
      <div className="flex justify-center items-cente py-4 h-[74px] mt-[50px]">
      <button className="px-4 py-2 text-[#BDBDBD] bg-gray-100 rounded-lg cursor-not-allowed h-[74px]">
        First
      </button>
      <button className="px-4 py-2 text-[#23A6F0] bg-white border border-gray-200 rounded-lg h-[74px]">
        1
      </button>
      <button className="px-4 py-2 text-white bg-[#23A6F0] rounded-lg h-[74px]">2</button>
      <button className="px-4 py-2 text-[#23A6F0] bg-white border border-gray-200 rounded-lg h-[74px]">
        3
      </button>
      <button className="px-4 py-2 text-[#23A6F0] bg-white border border-gray-200 rounded-lg h-[74px]">
        Next
      </button>
    </div>
    <Footer/>
      </>
    );
  }
  