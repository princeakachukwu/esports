import './App.css'
import { Routes, Route } from 'react-router-dom';
import Body from "./Components/Body/Body";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Team from "./Pages/Team/Team";
import Partners from "./Pages/Partners/Partners";
import Shop from './Pages/Shop/Shop';
import Pages from './Pages/Pages/Pages';


function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Body />}>
          <Route index element = {<Home />} />
          <Route path='About' element = {<About />} />
          <Route path='Team' element = {<Team />} />
          <Route path='Partners' element = {<Partners />} />
          <Route path='Shop' element = {<Shop />} />
          <Route path='Pages' element = {<Pages />} />
        </Route>
      </Routes>
    </>
      
  )
}

export default App
