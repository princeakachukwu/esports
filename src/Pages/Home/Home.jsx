import e1 from "../../assets/images/eb.svg";
import e2 from "../../assets/images/ec.svg"
import e3 from "../../assets/images/ee.svg";
import e4 from "../../assets/images/es.svg";
// import b1 from "../../assets/images/b1.svg";
// import b2 from "../../assets/images/b2.svg";
// import b3 from "../../assets/images/b3.svg";
// import b4 from "../../assets/images/b4.svg";
// import b11 from "../../assets/images/11.jpg"
import b10 from "../../assets/images/10.jpg";
import b9 from "../../assets/images/9.jpg";
import b8 from "../../assets/images/8.jpg";
import evideo from "../../assets/images/EVIDEO.jpeg";
import { FaPlay } from "react-icons/fa";
import { GoClock } from "react-icons/go";
import { FiTwitch } from "react-icons/fi";
import lored from "../../assets/images/lored.svg";
import loblue from "../../assets/images/loblue.svg";
import losky from "../../assets/images/losky.svg";
import loblack from "../../assets/images/loblack.svg"



function Home() {
  return (
    <div>
        <div className="div1 h-[140vh] flex ps-14 gap-2 flex-col items-start justify-center text-white">
            <h1 className="font-bold text-6xl w-full mt-52  text-left">NEXT-GENERATION</h1>
            <h1 className="font-bold text-6xl w-full  text-left">ESPORTS TEAM</h1>
            <h2 className="text-left  w-full text-2xl ">Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> Qui ipsum porro, tempore natus ut minima </h2>
            <div className="flex gap-5 mt-10">
                <button className="py-6 px-14 font-bold text-xl bg-red-500 hover:border-2 hover:border-red-500"> BUY MERCH </button>
                <button className="py-6 px-14 font-bold text-xl border-white border-2 hover:bg-red-500 hover:border-none"> MEET THE TEAM   </button>
            </div>
            <div className="flex items-center justify-between h-[20vh] border-t-white border-t-2 self-start w-[95%] mt-44">
                <h1>SPONSORED BY</h1>
                <figure className="flex">
                    <img src={e1} className=""/>  
                    <img src={e2} className=""/> 
                    <img src={e3} className=""/> 
                    <img src={e4} className=""/> 
                </figure>
            </div>
        </div>
        <div className="h-[100vh] flex items-center justify-between px-10 relative mt-20 mb-32">
            <div className="flex-1 flex flex-col text-left gap-6">
                <h1 className="text-white font-bold text-6xl z-40">ABOUT THE DRAGO <br /> ESPORTS TEAM</h1>
                <p className="text-white font-bold pr-7 z-40"> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam iste laborum possimus odit sapiente, mollitia, soluta obcaecati dolorum laboriosam optio maxime illo. </p>
                <button className="bg-red-500 button w-[18vw] text-white py-6     font-bold">MEET THE TEAM</button>
            </div>
            <div className="flex-1 z-50"> <img src={evideo} className=""/> </div>
            <div className=" w-[60vw] h-[75%] absolute bg-gray-800 z-10 right-0 top-40"></div>
            <div className="play1 flex items-center justify-center absolute z-50 right-80 bg-slate-300 opacity-45 ">  </div>
            <FaPlay className="playButton text-white font-bold text-3xl absolute z-50 " />
        </div>
        <div className="relative flex gap-10 px-10 flex-col items-center justify-center">
            <div className="w-[60vw] py-3 flex flex-col gap-4 items-center justify-center z-50"> 
                <h1 className="text-white font-bold text-5xl"> UPCOMING MATCHES  </h1>
                <p className="text-center px-32 text-white"> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatibus at architecto, voluptates dolore tempora  voluptates dolore tempora  </p>
            </div>
            <div className="s1 backposition px-5 h-[35vh] cursor-pointer flex items-center justify-center w-full z-50">
                <div className="flex-1 flex flex-col gap-2 text-white font-bold text-left cursor-pointer"> 
                    <h1> Terra </h1>
                    <h2 className="text-3xl hover:text-red-500 ">INTERNATIONAL TOURNAMENT 2022</h2>
                    <div className="flex items-center justify-start gap-40">
                        <figure className="flex gap-3 items-center justify-start">
                            <GoClock />
                            <figcaption> Decemer 12, 2022, 12:00 PM</figcaption>
                        </figure>
                        <figure className="flex gap-3 items-center justify-start">
                            <FiTwitch />
                            <figcaption> Watch stream</figcaption>
                        </figure>
                    </div>
                </div>
                <div className="flex-1 flex gap-8 items-center justify-end">
                    <img src={lored} className=""/> 
                    <h1 className="text-white font-bold text-3xl">VS</h1> 
                    <img src={loblue} className=""/> 
                </div>
            </div>
            <div className="s2 backposition px-5 h-[35vh] cursor-pointer flex items-center justify-center w-full z-50">
                <div className="flex-1 flex px-5 flex-col gap-2 text-white font-bold text-left cursor-pointer"> 
                    <h1> Solaris</h1>
                    <h2 className="text-3xl hover:text-red-500 ">INTERNATIONAL TOURNAMENT 2022</h2>
                    <div className="flex items-center justify-start gap-40">
                        <figure className="flex gap-3 items-center justify-start">
                            <GoClock />
                            <figcaption> Decemer 12, 2022, 12:00 PM</figcaption>
                        </figure>
                        <figure className="flex gap-3 items-center justify-start">
                            <FiTwitch />
                            <figcaption> Watch stream</figcaption>
                        </figure>
                    </div>
                </div>
                <div className="flex-1 flex gap-8 items-center justify-end">
                    <img src={lored} className=""/> 
                    <h1 className="text-white font-bold text-3xl">VS</h1> 
                    <img src={losky} className=""/> 
                </div>
            </div>
            <div className="s3 backposition px-5 h-[35vh] flex items-center justify-center w-full cursor-pointer z-50">
                <div className="flex-1 flex flex-col gap-2 text-white font-bold text-left cursor-pointer"> 
                    <h1> Fire Attack </h1>
                    <h2 className="text-3xl hover:text-red-500 ">INTERNATIONAL TOURNAMENT 2022</h2>
                    <div className="flex items-center justify-start gap-40">
                        <figure className="flex gap-3 items-center justify-start">
                            <GoClock />
                            <figcaption> Decemer 12, 2022, 12:00 PM</figcaption>
                        </figure>
                        <figure className="flex gap-3 items-center justify-start">
                            <FiTwitch />
                            <figcaption> Watch stream</figcaption>
                        </figure>
                    </div>
                </div>
                <div className="flex-1 flex gap-8 items-center justify-end">
                    <img src={lored} className=""/> 
                    <h1 className="text-white font-bold text-3xl">VS</h1> 
                    <img src={loblack} className=""/> 
                </div>
            </div>
            <h1 className="text-white font-bold text-xl z-50"> FOLLOW US ON TWITCH TO GET NOTIFICATIONS <br /> ABOUT OUR UPCOMING MATCHES</h1>
            <button className="text-white font-bold bg-red-500 py-6 px-10 z-50">FOLLOW US</button>
            <div className="absolute right-0 w-[40vw] h-[145vh] bg-gray-800 z-0"></div>
        </div>
        <div className=" mt-40 h-[180vh] flex gap-5 flex-col items-start relative">
            <div className=" mt-40 flex z-50 items-center h-[20vh] w-full justify-between px-10 ">
                <h1 className="text-white font-bold text-5xl">ARTICLES AND NEWS</h1>
                <button className=" bg-red-500 px-9 py-6 font-bold text-white">BROWSE NEWS</button>
            </div>
            <div className=" flex  z-50 items-start justify-between h-[80vh] gap-5 text-white px-10"> 
                <div className="w-[60%] z-50 flex gap-10 flex-col items-center justify-start h-[100%]">
                    <div className="earpiece w-full h-[90%] py-3"></div>
                    <div className="h-[10%] w-full flex  flex-col items-center justify-center ">
                        <div className="flex h-[50%] items-center justify-between  w-full">
                            <button className="bg-red-500 font-bold flex items-center justify-center px-4 py-3">MERCH</button>
                            <h1 className="font-bold">SEPTEMBER 1, 2022</h1>
                        </div>
                    </div>
                </div>
                <div className=" w-[40%] z-50 h-[100%] flex flex-wrap  gap-3 items-start  justify-between">
                    <div className="w-[48%] h-[50%] flex gap-4 flex-col items-center justify-start">
                        <div className="side1 w-full h-[60%]"></div>
                        <h1 className="flex  items-center justify-start font-bold text-left text-xl">THE BEST KEYBOARD FOR HIGH-END GAMING</h1>
                    </div>
                    <div className="w-[48%] h-[50%] flex gap-4 flex-col items-center justify-start">
                        <div className="side1 w-full h-[60%]"></div>
                        <h1 className="flex items-center justify-start font-bold text-left text-xl">THE BEST KEYBOARD FOR HIGH-END GAMING</h1>
                    </div>
                    <div className="w-[48%] h-[50%] flex gap-4 flex-col items-center justify-start">
                        <div className="side1 w-full h-[60%]"></div>
                        <h1 className="flex  items-center justify-start font-bold text-left text-xl">THE BEST KEYBOARD FOR HIGH-END GAMING</h1>
                    </div>
                    <div className="w-[48%] h-[50%] flex gap-4 flex-col items-center justify-start">
                       <div className="side1 w-full h-[60%]"></div>
                        <h1 className="flex  items-center justify-start font-bold text-left text-xl">THE BEST KEYBOARD FOR HIGH-END GAMING</h1>
                    </div>
                </div>
            </div>
            <h1 className="z-50 py-4 px-10 flex items-center justify-start text-3xl font-bold w-full text-white text-left">OUR NEW BRANDED HEADPHONES ARE NOW FOR <br /> SALE</h1>
            <div className="absolute z-0 w-[45vw] h-[180vh] bg-gray-800 left-0 top-0"></div>
        </div>
        <div className="center h-[60vh] flex items-center justify-between mt-20 w-full px-10 bg-red-300 text-white">
            <h1 className="text-left font-bold text-5xl">GET OUR MERCH <br />& SUPPORT OUR TEAM</h1>
            <button className="text-red-500 font-bold bg-white px-9 py-6 hover:bg-red-500 hover:text-white">GET MERCH</button>
        </div>







        {/* <div className="h-[100vh] flex flex-col items-center justify-center text-white bg-slate-900 mb-28">
            <div className="h-[50%] w-full flex gap-10 flex-col items-center justify-center text-white">
                <h1 className="text-6xl font-bold"> GOLD SPONSORS</h1>
                <div className="flex w-full gap-20 items-center justify-center"> 
                    <img src={e1} className=""/>  
                    <img src={e2} className=""/> 
                    <img src={e3} className=""/> 
                    <img src={e4} className=""/> 
                </div>
            </div>
            <div className="h-[50%] w-full flex gap-10 flex-col items-center justify-center text-white">
                <h1 className="text-6xl font-bold">SILVER SPONSORS</h1>
                <div className="flex w-full gap-20 items-center justify-center">
                    <img src={b1} className=""/>  
                    <img src={b2} className=""/> 
                    <img src={b3} className=""/> 
                    <img src={b4} className=""/> 
                </div>
            </div>
        </div> */}
        <div className="flex gap-10 flex-col h-[70vh] items-center justify-center">
            {/* <h1 className="text-white font-bold text-3xl">FOLLOW US ON <span className="text-red-500">INSTAGRAM</span></h1> */}
            <div className="flex w-[100vw]">
                <figure className="flex-1 b11">
                </figure>
                <figure className="flex-1">
                    <img src={b10} className="w-[100%]"/> 
                </figure>
                <figure className="flex-1">
                    <img src={b9} className="w-[100%]"/> 
                </figure>
                <figure className="flex-1">
                    <img src={b8} className="w-[100%]"/> 
                </figure>
            </div>
        </div>
    </div>
  )
}

export default Home