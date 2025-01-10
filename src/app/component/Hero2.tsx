import Image from "next/image"
import Link from "next/link"
import Footer from "./footer"
export default function Hero2 () {
    return (
        <>
        <div className="max-w-[1440px] mt-[50px] h-[4800px] md:h-[2700px] lg:h-[1300px] lg:mx-[150px]">
         <div className="flex flex-col justify-center items-center">
          <h4 className="text-[20px] font-medium text-[#737373]">Featured Products</h4>
          <h3 className="text-[24px] font-bold text-[#252B42]">BESTSELLER PRODUCTS</h3>
          <p className="text-[14px] font-medium text-[#737373]">Problems trying to resolve the conflict between </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:mx-[80px ]lg:mx-[150px] mx-[20px]">
        {/* first */}
        <div className="flex flex-col items-center justify-center">
          <Image src="/curl.png" alt="pic" height="00" width="350" className="mb-[20px] pb-[20px] pt-[20px] mt-[20px] h-[400px]"/>
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
        <Image src="/man1.png" alt="pic" height="000" width="350"className="mb-[20px] pb-[20px] pt-[20px] mt-[20px] h-[400px]"/>
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
          <Image src="/girl1.png" alt="pic" height="00" width="350" className="mb-[20px] pb-[20px] pt-[20px] mt-[20px] h-[400px]"/>
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
          <Image src="/girl2.png" alt="pic" height="00" width="350" className="mb-[20px] pb-[20px] pt-[20px] mt-[20px] h-[400px]"/>
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:mx-[80px ]lg:mx-[150px] mx-[20px]">
        {/* first */}
        <div className="flex flex-col items-center justify-center">
          <Image src="/man3.png" alt="pic" height="00" width="350" className="mb-[20px] pb-[20px] pt-[20px] mt-[20px] h-[400px]"/>
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
        <Image src="/man4.png" alt="pic" height="00" width="350"className="mb-[20px] pb-[20px] pt-[20px] mt-[20px] h-[400px]"/>
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
          <Image src="/man5.png" alt="pic" height="00" width="350" className="mb-[20px] pb-[20px] pt-[20px] mt-[20px] h-[400px]"/>
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
          <Image src="/man6.png" alt="pic" height="000" width="350" className="mb-[20px] pb-[20px] pt-[20px] mt-[20px] h-[400px]"/>
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
        </div> 
        <div className="flex  h-[780px] lg:h-[450px] bg-[#23856D] lg:gap-[50px] justify-center mb-[175px] lg:mb-[100px] flex-col lg:flex-row">
          {/* text  */}
          <div className="flex flex-col items-center justify-center text-center mx-[20px] mt-[20px] lg:text-left">
          <div className=" text-white flex flex-col items-center justify-center lg:place-items-start lg:ml-[50px] lg:w-[400px]">
            <h4 className="text-[20px] font-medium">SUMMER 2020</h4>
            <h1 className="text-[50px] font-bold">Vita Classic Product</h1>
            <p className="text-[14px] font-normal">We know how large objects will act&#39; We know how are objects will act&#39; We know</p>
            <div className="flex flex-row items-center gap-4 mt-[20px]">
              <h3 className="text-[24px] font-bold">$16.48</h3>
              <button className="bg-[#2DC071] text-white text-[14px] font-bold hover:bg-[#51cf8c] h-[52px] w-[180px] rounded-[5px]">ADD TO CART</button>
            </div>
          </div>
          </div>
          {/* imag  */}
          <div>
            <Image src="/boy1.png" alt="pict" height="300" width="300"/>
          </div>
        </div>

        <div className="flex h-[450px] gap-[30px] justify-center items-center mt-[50px] flex-col mb-[150px] md:mb-[50px] md:flex-row">
           {/* imag  */}
          <div>
            <Image src="/z.png" alt="pict" height="300" width="500"/>
          </div>
          {/* text  */}
          <div className="flex flex-col items-center justify-center ">
          <div className=" text-white flex flex-col items-center justify-center lg:place-items-start w-[225px] lg:w-[375px]">
            <h4 className="text-[20px] font-medium text-[#737373] w-[150px] text-center">SUMMER 2020</h4>
            <h1 className="text-[40px] font-bold text-[#252B42] leading-[50px] mt-[20px] w-[200px] text-center lg:w-[400px] lg:text-start">Part of the Neural 
            Universe</h1>
            <p className="text-[14px] font-normal text-[#737373] mt-[20px] w-[200px] text-center lg:text-start lg:w-[400px]">We know how large objects will act&#39; We know how are objects will act&#39; We know</p>
            <div className="flex flex-col lg:flex-row items-center gap-4 mt-[20px]">
            <button className="bg-[#23A6F0] lg:bg-[#2DC071] text-white text-[14px] font-bold lg:hover:bg-[#51cf8c] h-[52px] w-[180px] rounded-[5px] uppercase">Buy Now</button>
              <button className="lg:text-[#2DC071] text-[#23A6F0] text-[14px] font-bold lg:hover:bg-[#23856D] h-[52px] w-[180px] rounded-[5px] uppercase border-2 border-solid lg:border-[#2DC071] border-[#23A6F0]">Read More</button>
            </div>
          </div>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center">
        <div className="mt-[100px] w-[300px] text-center lg:mt-[50px]">
            <h6 className="text-[14px] font-bold text-[#23A6F0]">Practice Advice</h6>
            <h2 className="text-[40px] font-bold text-[#252B42]">Featured Posts</h2>
            <p className="text-[14px] font-normal text-[#737373]">Problems trying to resolve the conflict between 
            the two major realms of Classical physics: Newtonian mechanics </p>
        </div>
        </div>
        <div className="flex flex-col lg:flex-row justify-center items-center gap-3 mt-[50px] lg:mx-[50px] mx-[20px] mb-[500px] md:mb-[200px]">
          {/* first */}
          <div className="flex flex-col">
          <div className="">
          <Image src="/road.png" alt="pict" height="300" width="348"/>
          </div>
          <div className=" flex flex-col ml-[20px]">
            <div className="flex flex-row gap-3 mt-[20px]">
              <small className="text-[12px] font-normal text-[#8EC2F2]">Google</small>
              <small className="text-[12px] font-normal text-[#737373]">Trending</small>
              <small className="text-[12px] font-normal text-[#737373]">New</small>
            </div>
            <h4 className="text-[20px] font-normal text-[#252B42] w-[247px]">Loudest à la Madison #1 
            (L&apos;integral)</h4>
            <p className="text-[14px] font-normal text-[#737373] w-[250px] mt-[10px]">We focus on ergonomics and meeting 
              you where you work. It&apos;s only a 
              keystroke away.</p>
              <div className="flex flex-row lg:gap-[130px] gap-[50px] mt-[20px]">
              <div className="flex flex-row gap-1">
              <Image src="/clock.png" alt="pict" height="16" width="16"/>
              <small className="text-[12px] font-normal text-[#737373]">22 April 2021</small>
              </div>
              <div className="flex flex-row gap-1">
              <Image src="/chart.png" alt="pict" height="16" width="16"/>
              <small className="text-[12px] font-normal text-[#737373]">10 comments</small>
              </div>
              </div>
              <div className="flex flex-row gap-2 mt-[20px]">
              <h6 className="text-[14px] font-bold text-[#737373]">Learn More</h6>
              <Image src="/0.png" alt="pict" height="16" width="9"/>
              </div>
          </div>
          </div>
          {/* first */}
          <div className="flex flex-col">
          <div className="">
          <Image src="/car.png" alt="pict" height="300" width="348"/>
          </div>
          <div className=" flex flex-col ml-[20px]">
            <div className="flex flex-row gap-3 mt-[20px]">
              <small className="text-[12px] font-normal text-[#8EC2F2]">Google</small>
              <small className="text-[12px] font-normal text-[#737373]">Trending</small>
              <small className="text-[12px] font-normal text-[#737373]">New</small>
            </div>
            <h4 className="text-[20px] font-normal text-[#252B42] w-[247px]">Loudest à la Madison #1 
            (L&apos;integral)</h4>
            <p className="text-[14px] font-normal text-[#737373] w-[250px] mt-[10px]">We focus on ergonomics and meeting 
              you where you work. It&apos;s only a 
              keystroke away.</p>
              <div className="flex flex-row gap-[50px] lg:gap-[130px] mt-[20px]">
              <div className="flex flex-row gap-1">
              <Image src="/clock.png" alt="pict" height="16" width="16"/>
              <small className="text-[12px] font-normal text-[#737373]">22 April 2021</small>
              </div>
              <div className="flex flex-row gap-1">
              <Image src="/chart.png" alt="pict" height="16" width="16"/>
              <small className="text-[12px] font-normal text-[#737373]">10 comments</small>
              </div>
              </div>
              <div className="flex flex-row gap-2 mt-[20px]">
              <h6 className="text-[14px] font-bold text-[#737373]">Learn More</h6>
              <Image src="/0.png" alt="pict" height="16" width="9"/>
              </div>
          </div>
          </div>
          {/* first */}
          <div className="flex flex-col">
          <div className="">
          <Image src="/um.png" alt="pict" height="300" width="348"/>
          </div>
          <div className=" flex flex-col ml-[20px]">
            <div className="flex flex-row gap-3 mt-[20px]">
              <small className="text-[12px] font-normal text-[#8EC2F2]">Google</small>
              <small className="text-[12px] font-normal text-[#737373]">Trending</small>
              <small className="text-[12px] font-normal text-[#737373]">New</small>
            </div>
            <h4 className="text-[20px] font-normal text-[#252B42] w-[247px]">Loudest à la Madison #1 
            (L&apos;integral)</h4>
            <p className="text-[14px] font-normal text-[#737373] w-[250px] mt-[10px]">We focus on ergonomics and meeting 
              you where you work. It&apos;s only a 
              keystroke away.</p>
              <div className="flex flex-row gap-[50px] lg:gap-[130px] mt-[20px]">
              <div className="flex flex-row gap-1">
              <Image src="/clock.png" alt="pict" height="16" width="16"/>
              <small className="text-[12px] font-normal text-[#737373]">22 April 2021</small>
              </div>
              <div className="flex flex-row gap-1">
              <Image src="/chart.png" alt="pict" height="16" width="16"/>
              <small className="text-[12px] font-normal text-[#737373]">10 comments</small>
              </div>
              </div>
              <div className="flex flex-row gap-2 mt-[20px]">
              <h6 className="text-[14px] font-bold text-[#737373]">Learn More</h6>
              <Image src="/0.png" alt="pict" height="16" width="9"/>
              </div>
          </div>
          </div>
        </div>
        <Footer/>
      </>
    )
}
       