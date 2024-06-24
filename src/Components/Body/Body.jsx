import { Outlet } from 'react-router-dom'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'

function Body() {
  return (
    <div className='mx-auto w-[100vw] flex flex-col p-0 items-center justify-end ml-0 box-border bg-gray-950'>
        <Header />
        <div className='min-h-[100vh] box-border w-[100vw]'> 
            <Outlet />
        </div>
        <Footer />
    </div>
  )
}

export default Body