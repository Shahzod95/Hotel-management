import useUniqueId from "../hooks/userId";
import Hotels from "../pages/Hotels";
import Manager from "../pages/Managers";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PeopleIcon from "@mui/icons-material/People";

const menuItems = [
  {
    id: useUniqueId,
    title: "Hotels",
    element: <Hotels />,
    icon: <DashboardIcon />,
    path: "/hotels",
    hidden: "false",
  },
  {
    id: useUniqueId,
    title: "Manager",
    element: <Manager />,
    icon: <PeopleIcon />,
    path: "/managers",
    hidden: "false",
  },
];

export default menuItems;
