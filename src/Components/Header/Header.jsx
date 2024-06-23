import logo from "../../assets/images/eslogo.svg";
import { HiMenu } from "react-icons/hi";
import { NavLink } from 'react-router-dom'




function Header() {
  return (
   <div className="w-full h-[20vh] flex items-center justify-center py-4 px-8 box-border fixed top-0">
        <div className="flex w-[100%] items-center justify-between p-4 box-border">
            <figure className="flex-1">
                <img src={logo} className=""/>  
            </figure>
            <ul className="hidden lg:flex flex-2 gap-4 text-white font-bold">
                <li className="hover:text-red-500"><NavLink to={'/'}> HOME</NavLink></li>
                <li className="hover:text-red-500"><NavLink to={'/About'}>ABOUT </NavLink></li>
                <li className="hover:text-red-500"><NavLink to={'/Team'}> TEAM </NavLink></li>
                <li className="hover:text-red-500"><NavLink to={'/Partners'}>PARTNERS </NavLink></li>
                <li className="hover:text-red-500"><NavLink to={'/Shop'}> SHOP </NavLink></li>
                <li className="hover:text-red-500"><NavLink to={'/Pages'}> PAGES </NavLink></li>

            </ul>
            <div className="flex-1 flex items-center justify-end gap-2 lg:gap-4 box-border">
                <div className="text-white font-bold text-xl">cart [0]</div>
                <div className="p-3 lg:py-5 lg:px-8 flex items-center justify-center bg-red-500 text-white font-bold text-xl hover:shadow-lg hover:shadow-red-700 hover:px-9 hover:py-6">
                    <h1 className="hidden lg:flex">BUY MECH</h1>
                    <HiMenu className="flex lg:hidden" />
                </div>
            </div>
        </div>
      
   </div>
  )
}

export default Header