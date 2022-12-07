import useUniqueId from "../hooks/userId"
import Auth from "../pages/Auth";
import Hotels from "../pages/Hotels";
import Manager from "../pages/Managers";
import DashboardIcon from '@mui/icons-material/Dashboard';
import PeopleIcon from '@mui/icons-material/People';
import LoginIcon from '@mui/icons-material/Login';

const menuItems = [
    {
        id:useUniqueId,
        title: 'Hotels',
        element: <Hotels />,
        icon: <DashboardIcon />,
        path: '/hotels',
        hidden: 'false',
        children: [
            {
                id:useUniqueId,
                title:'Add hotel',
                path:'/hotel/add-hotel',
            },
            {
                id:useUniqueId,
                title:'Update hotel',
                path:'/hotel/update',
            },
            {
                id:useUniqueId,
                title:'Delete hotel',
                path:'/hotel/delete',
            },
        ],
    },
    {
        id:useUniqueId,
        title: 'Manager',
        element: <Manager />,
        icon: <PeopleIcon />,
        path: '/managers',
        hidden: 'false',
    },
    {
        id:useUniqueId,
        title: 'Sign in',
        element: <Auth />,
        icon: <LoginIcon />,
        path: '/sign-in',
        hidden: 'true',
    },
]

export default menuItems