export default function Hero1() {
    return (
      <>
        <section className="bg-[#FAFAFA] py-12">
          <div className="text-center mb-[30px]">
            <h3 className="text-[24px] font-bold text-[#252B42]">EDITOR’S PICK</h3>
            <p  className="text-[14px] font-normal text-[#737373]">Problems trying to resolve the conflict between </p>
          </div>
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 mx-[20px]">
          {/* Men */}
          <div className="relative">
            <img
              src="/boy.png" // Replace with actual image path
              alt="Men"
              className="w-full h-[400px] object-cover rounded-md"
            />
            <div className="absolute bottom-4 left-4 bg-white px-6 py-2 shadow-md">
              <h3 className="text-black text-lg font-semibold">MEN</h3>
            </div>
          </div>

          {/* Women */}
          <div className="relative">
            <img
              src="/girl.png" // Replace with actual image path
              alt="Women"
              className="w-full h-[400px] object-cover"
            />
            <div className="absolute bottom-4 left-4 bg-white px-6 py-2  shadow-md">
              <h3 className="text-black text-lg font-semibold">WOMEN</h3>
            </div>
          </div>

          {/* Accessories */}
          <div className="relative">
            <img
              src="/sweater.png" // Replace with actual image path
              alt="Accessories"
              className="w-full h-[400px] object-cover"
            />
            <div className="absolute bottom-4 left-4 bg-white px-6 py-2 shadow-md">
              <h3 className="text-black text-lg font-semibold">
                ACCESSORIES
              </h3>
            </div>
          </div>

          {/* Kids */}
          <div className="relative">
            <img
              src="/kid.png" // Replace with actual image path
              alt="Kids"
              className="w-full h-[400px] object-cover"
            />
            <div className="absolute bottom-4 left-4 bg-white px-6 py-2 shadow-md">
              <h3 className="text-black text-lg font-semibold">KIDS</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
      </>
    );
  }
  