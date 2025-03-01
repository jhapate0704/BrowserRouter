import { createBrowserRouter ,RouterProvider} from 'react-router-dom';
import Navbar from './Componants/Navbar';
import Home from './Componants/Home';
import Loging from './Componants/loging';
import Users from './Componants/users';
import './App.css'

const router = createBrowserRouter([
  {
    path: '/',
    element: <><Navbar/><Home /></>
  },
{
  path: '/Loging',
  element: <><Navbar/><Loging /></>
},  
{ 
  path: '/Users',
  element: <><Navbar/><Users /></>
}
  ]);     



function App() {

  return (
    <>
    <RouterProvider router={router} />
    </>
    
  )
}

export default App;


