export default function Hero () {
    return (
        <div>
            <div className="h-[600px]">
                <div><img src="/hero1.jpg" alt="pic" className="h-[600px] w-[1440px]"/></div>
                <div className="relative bottom-[450px] left-[100px] flex flex-col justify-center">
                    <h5 className="font-normal text-[16px] text-white mb-[10px]">SUMMER 2020</h5>
                    <h1 className="font-bold text-[50px] text-white">NEW COLLECTION</h1>
                    <h4 className="font-normal text-[20px] text-white my-[20px]">We know how large objects will act,<br /> 
                    but things on a small scale.</h4>
                    <button className="font-bold text-[24px] button h-[60px] w-[150px] text-white"><h3>SHOP NOW</h3></button>
                </div>
            </div>
        </div>
    )
}