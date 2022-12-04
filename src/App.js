import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Auth from './pages/Auth';
import menuItems from "./utils/menu-items";
function App() {
  const [user, setUser] = useState({
    username:'admin',
    password:'12345'
  })
  return (
    <Routes>
      { user ? <Route path="/sign-in" element={ <Auth user={user} /> } />:
        <Route element={<Sidebar />}>
          {
            menuItems.map(({path, element, id }) =>{
              return <Route key={id} path={path} element={element} />
            } )
          }
        </Route> 
        
      }
    </Routes>
  )
}

export default App;
