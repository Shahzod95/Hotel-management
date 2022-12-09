import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import LoginIcon from "@mui/icons-material/Login";

const Logout = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.clear();
    navigate("/");
  };
  return (
    <Button
      variant="contained"
      color="success"
      startIcon={<LoginIcon />}
      onClick={handleLogout}
    >
      Logout
    </Button>
  );
};
export default Logout;
