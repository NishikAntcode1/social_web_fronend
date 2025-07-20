import HomeIcon from "@mui/icons-material/Home";
import ExploreIcon from '@mui/icons-material/Explore';
import ControlPointIcon from '@mui/icons-material/ControlPoint';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MessageIcon from '@mui/icons-material/Message';
import ListAltIcon from '@mui/icons-material/ListAlt';
import GroupIcon from '@mui/icons-material/Group';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

export const navigationMenu = [
    {
        title: "Home",
        Icon: HomeIcon, // store the component, not JSX
        path: "/"
    },
    {
        title: "Reels",
        Icon: ExploreIcon,
        path: "/"
    },
    {
        title: "Create Reels",
        Icon: ControlPointIcon,
        path: "/"
    },
    {
        title: "Notifications",
        Icon: NotificationsIcon,
        path: "/"
    },
    {
        title: "Message",
        Icon: MessageIcon,
        path: "/"
    },
    {
        title: "Lists",
        Icon: ListAltIcon,
        path: "/"
    },
    {
        title: "Communities",
        Icon: GroupIcon,
        path: "/"
    },
    {
        title: "Profile",
        Icon: AccountCircleIcon,
        path: "/"
    },
];