import {
  createBrowserRouter, 
  createRoutesFromElements,
  Route, 
  RouterProvider
} from 'react-router-dom'
import Login from './Containers/Login/Login'
import Home from './Dashboard/Home/Home'
import StudentInfo from './Dashboard/StudentInfo/StudentInfo'
import Main from './Dashboard/Main/Main'
import Update from './Dashboard/Update/Update'
import Edit from './Dashboard/Edit/Edit'



const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path='/' element={<Login />}/>
      <Route path="/home" element={<Home/>} >
       <Route index element={<Main/>} />
       <Route path="Main" element={<Main/>} />
      <Route  path="schoolinfo" element={<StudentInfo/>} >
        <Route path="update" element={< Update/>}  />
        <Route path=":id" element={<Edit/>}  />
        <Route path="contact"  />
      </Route>
    </Route>
    </Route>
  )
)

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App