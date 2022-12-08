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
import ManagerPage from "./pages/ManagerPage";
import Home from "./pages/Home";

function App() {
  const getUsername = localStorage.getItem("usernameData");
  const getPassword = localStorage.getItem("password");
  const getManager = localStorage.getItem("manager");
  const managerObj = JSON.parse(getManager);

  if (getManager) {
    return (
      <Routes>
        <Route
          path="/manager"
          element={<ManagerPage managerObj={managerObj} />}
        />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    );
  }

  return (
    <Routes>
      <Route index element={<Home />} />
      {getUsername && getPassword ? (
        <Route path="/" element={<Sidebar />}>
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
