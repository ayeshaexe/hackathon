export default function Hero () {
    return (
        <div>
             {/* Hero Section */}
      <section className="relative text-white">
        {/* Image Section */}
        <div className="relative w-full">
          {/* Large Screen Image */}
          <img
            src="/hero1.jpg" // Replace with the path to your first image
            alt="New Collection"
            className="hidden md:block w-full h-full object-cover"
          />
          {/* Small Screen Image */}
          <img
            src="/hero.jpg" // Replace with the path to your second image
            alt="New Collection"
            className="block md:hidden w-full h-full object-cover"
          />
          {/* Overlay Text */}
          <div className="absolute inset-0 flex flex-col justify-center items-center text-center lg:place-items-start lg:ml-[200px]">
            <h5 className="text-[16px] font-bold">SUMMER 2020</h5>
            <h1 className="text-3xl md:text-[58px] font-bold my-7">New Collection</h1>
            <h4 className="mb-6 font-normal text-[20px] w-[276px] lg:w-[376px] lg:text-left">We know how large objects will act, but things on a small scale.</h4>
            <a href="#" className="bg-[#2DC071] text-white py-2 px-4 rounded hover:bg-green-600 h-[62px] w-[221px]"><h3 className="text-[24px] font-bold">Shop Now</h3></a>
          </div>
        </div>
      </section>
        </div>
    )
}





