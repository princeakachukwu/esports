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
import b8 from "../../assets/images/8.jpg"



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