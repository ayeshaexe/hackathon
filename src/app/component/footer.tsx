import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
export default function Footer() {
    return (
        <>
        <div className="flex justify-center items-center mt-[50px]">
        <footer className="bg-white absolute flex flex-col justify-center">
            <section className="w-[200px] py-10 ">
                <div className="max-w-screen-xl mx-auto flex justify-between items-center gap-3">
                    <div className="flex flex-col">
                        <h1 className="text-[#252b42] text-2xl font-bold leading-loose tracking-tight ml-[50px]">Bandage</h1>
                    </div>
                    <div className="flex gap-6 mr-[90px] icon3">
                        <FaFacebook className="w-6 h-6"/> 
                        <FaInstagram className="w-6 h-6"/>
                        <FaTwitter className="w-6 h-6"/>
                    </div>
                </div>
            </section>
            <div className="border-t border-[#e6e6e6]" />
            <section className="bg-white py-12 ">
                <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-[20px]">
                    <div>
                        <h2 className="text-[#252b42] text-base font-bold ml-[50px]">Company Info</h2>
                        <nav className="flex flex-col gap-2.5 mt-3 ml-[50px]">
                            <a href="#" className="text-[#727272] text-sm font-bold">About Us</a>
                            <a href="#" className="text-[#727272] text-sm font-bold">Careers</a>
                            <a href="#" className="text-[#727272] text-sm font-bold">We Are Hiring</a>
                            <a href="#" className="text-[#727272] text-sm font-bold">Blog</a>
                        </nav>
                    </div>
                    <div>
                        <h2 className="text-[#252b42] text-base font-bold ml-[50px]">Legal</h2>
                        <nav className="flex flex-col gap-2.5 mt-3 ml-[50px]">
                            <a href="#" className="text-[#727272] text-sm font-bold">Terms of Service</a>
                            <a href="#" className="text-[#727272] text-sm font-bold">Privacy Policy</a>
                            <a href="#" className="text-[#727272] text-sm font-bold">Cookies</a>
                            <a href="#" className="text-[#727272] text-sm font-bold">Refund Policy</a>
                        </nav>
                    </div>
                    <div>
                        <h2 className="text-[#252b42] text-base font-bold ml-[50px]">Features</h2>
                        <nav className="flex flex-col gap-2.5 mt-3 ml-[50px]">
                            <a href="#" className="text-[#727272] text-sm font-bold">Business Marketing</a>
                            <a href="#" className="text-[#727272] text-sm font-bold">User Analytics</a>
                            <a href="#" className="text-[#727272] text-sm font-bold">Live Chat</a>
                            <a href="#" className="text-[#727272] text-sm font-bold">Unlimited Support</a>
                        </nav>
                    </div>
                    <div>
                        <h2 className="text-[#252b42] text-base font-bold ml-[50px]">Resources</h2>
                        <nav className="flex flex-col gap-2.5 mt-3 ml-[50px]">
                            <a href="#" className="text-[#727272] text-sm font-bold ">iOS & Android</a>
                            <a href="#" className="text-[#727272] text-sm font-bold">Watch a Demo</a>
                            <a href="#" className="text-[#727272] text-sm font-bold">Customers</a>
                            <a href="#" className="text-[#727272] text-sm font-bold">API</a>
                        </nav>
                    </div>
                    <div className="mr-[90px] ml-[50px]">
                        <h2 className="text-[#252b42] text-base font-bold">Get In Touch</h2>
                        <div className="mt-3">
                            <div className="relative mb-4">
                                <input
                                    type="email"
                                    className="lg:w-[100px] w-[50px] h-12 mx-4 border border-[#e6e6e6] rounded-lg bg-[#f8f8f8] text-[#727272] text-sm font-normal"
                                    placeholder="Your Email"
                                />
                            </div>
                            <p className="text-[#727272] text-xs">Lorem ipsum dolor sit amet</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="bg-[#f9f9f9] py-4 ml-[50px]">
                <div className="max-w-screen-xl mx-auto flex justify-between items-center">
                    <p className="text-[#727272] text-sm font-bold">Made with love by Finland. All rights reserved.</p>
                    <div className="flex gap-4">
                       
                    </div>
                </div>
            </section>
        </footer>
        </div>
        </>
    );
  }