import logo from "../../assets/images/eslogo.svg";
import { FaFacebookF } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { LuTwitch } from "react-icons/lu";
import { FaTiktok } from "react-icons/fa6";





function Footer() {
  return (
    <div className="h-[100vh] flex gap-4 items-center justify-center px-14  w-full pt-40 bg-gray-950">
        <div className="w-[100vw] gap-10 flex ">
            <figure className="w-[30%] h-[100%] flex  flex-col "> 
                <img src={logo} className="w-[250px]"/>  
                <p className="text-white"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio possimus   </p>
            </figure>
            <div className="w-[70%] gap-3 flex justify-between">
                <div className="flex-1 flex flex-col h-[100%] gap-4 text-left">
                    <h1 className="font-bold text-red-500 text-xl">PAGES</h1>
                    <div className="flex gap-4 text-white text-lg font-bold">
                        <ul className="text-left flex flex-col gap-4">
                            <li>HOME</li>
                            <li>ABOUT</li>
                            <li>TEAM</li>
                            <li>TEAM INDIVIDUAL</li>
                            <li>NEWS</li>
                            <li>NEWS INDIVIDUAL</li>
                        </ul>
                        <ul className="text-left flex flex-col gap-4">
                            <li>SHOP</li>
                            <li>SHOP CMS</li>
                            <li>CONTACT</li>
                            <li>SPONSORS</li>
                        </ul>
                    </div>    
                </div>
                <div className="flex-1 flex flex-col text-white font-bold h-[100%] gap-3">
                    <h1 className="font-bold text-red-500 text-xl text-left">UTILITIES</h1>
                    <ul className="text-left flex flex-col gap-4">
                        <li>STYLE GUIDE</li>
                        <li>START HERE</li>
                        <li>404 NOT FOUND</li>
                        <li>PASSWORD PROTECTED</li>
                        <li>LICENCES</li>
                        <li>CHANGELOG</li>
                        <li>BROWSE MORE TEMPLATES</li>
                    </ul>
                </div>
                <div className="flex-1 flex flex-col gap-4">
                <h1 className="font-bold text-red-500 text-xl text-left">FOLLOW US</h1>
                <div className="flex flex-col gap-4">
                    <figure className="flex items-center gap-2 font-bold">
                        <div className="bg-red-500 p-2"><FaFacebookF className="text-white" /> </div>
                        <figcaption className="text-white">FACEBOOK</figcaption>
                    </figure>
                    <figure className=" flex items-center gap-2 font-bold">
                        <div className="bg-red-500 p-2"><FaTwitter  className="text-white"  /></div>
                        <figcaption className="text-white">TWITTER</figcaption>
                    </figure>
                    <figure className=" flex items-center gap-2 font-bold">
                        <div className="bg-red-500 p-2"><FaInstagram className="text-white"  /></div>
                        <figcaption className="text-white">INSTAGRAM</figcaption>
                    </figure>
                    <figure className=" flex items-center gap-2 font-bold">
                        <div className="bg-red-500 p-2"><FaYoutube className="text-white"  /></div>
                        <figcaption className="text-white">YOUTUBE</figcaption>
                    </figure>
                    <figure className=" flex items-center gap-2 font-bold">
                        <div className="bg-red-500 p-2"><LuTwitch className="text-white" /></div>
                        <figcaption className="text-white">TWITCH</figcaption>
                    </figure>
                    <figure className=" flex items-center gap-2 font-bold">
                        <div className="bg-red-500 p-2"> <FaTiktok className="text-white" /></div>
                        <figcaption className="text-white">TIKTOK</figcaption>
                    </figure>
                </div>

                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer