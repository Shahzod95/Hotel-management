import { Route, Routes } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Auth from "./pages/Auth";
import Hotels from "./pages/Hotels";
import Managers from "./pages/Managers";
import PageNotFound from "./pages/PageNotFound";
import AddHotel from "./pages/AddHotel";
import AddManager from "./pages/AddManager";
import UpdateManager from "./pages/UpdateManager";
import UpdateHotel from "./pages/UpdateHotel";

function App() {
  const getUsername = localStorage.getItem("usernameData");
  const getPassword = localStorage.getItem("password");
  return (
    <Routes>
      {getUsername && getPassword ? (
        <Route element={<Sidebar />}>
          <Route path="hotels" element={<Hotels />} />
          <Route path="add-hotel" element={<AddHotel />} />
          <Route path="update-hotel/:id" element={<UpdateHotel />} />
          <Route path="managers" element={<Managers />} />
          <Route path="add-manager" element={<AddManager />} />
          <Route path="update-manager/:id" element={<UpdateManager />} />
          <Route path="*" element={<PageNotFound />} />
        </Route>
      ) : (
        <Route path="/sign-in" element={<Auth />} />
      )}
    </Routes>
  );
}

export default App;
