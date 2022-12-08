import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";

const Logout = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.clear();
    navigate("/sign-in");
  };
  return (
    <Button variant="contained" onClick={handleLogout}>
      Logout
    </Button>
  );
};
export default Logout;
