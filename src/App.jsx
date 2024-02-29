
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './Containers/Login/Login'
import Home from './Dashboard/Home/Home'
import Update from './Dashboard/Update/Update'
function App() {
 
  return (
   <BrowserRouter>
   <Routes>
    <Route path='/' element={<Login/>}/>
    <Route path='/home' element={<Home/>}/>
    <Route path='/update' element={<Update/>}/>
   </Routes>
   </BrowserRouter>
  )
}

export default App
