import HomeIcon from "@mui/icons-material/Home";
import TimeToLeaveIcon from "@mui/icons-material/TimeToLeave";
import PersonIcon from "@mui/icons-material/Person";
import AppleIcon from "@mui/icons-material/Apple";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import EmailIcon from "../Controls/EmailIcon";
import Avatar from "@mui/material/Avatar";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
//Navbar data for left part && right part
export const headerData = [
  {
    icons: <AppleIcon />,
    title: "Your Brand",
    path: "",
  },
  {
    icons: <HomeIcon />,
    title: "Home",
    path: "/",
  },
  {
    icons: <TimeToLeaveIcon />,
    title: "Add Cab",
    path: "/cab",
  },
  {
    icons: <PersonIcon />,
    title: "Add Driver",
    path: "/driver",
  },
];
export const rightheader = [
  {
    icons: <DarkModeIcon />,
    name: "",
  },
  {
    icons: <EmailIcon />,
    name: "",
  },
  {
    icons: <Avatar>SD</Avatar>,
    name: "",
  },
  {
    icons: <KeyboardArrowDownIcon />,
    name: "KeyboardArrowDownIcon",
  },
];
//table test data
function createData(name, calories, fat) {
  return { name, calories, fat };
}
export const rows = [
  createData("Cupcake", "Sumitkumar@gmail.com", 9908989898),
  createData("Donut", 452, 25.0),
  createData("Eclair", 262, 16.0),
  createData("Frozen yoghurt", 159, 6.0),
  createData("Gingerbread", 356, 16.0),
  createData("Honeycomb", 408, 3.2),
  createData("Ice cream sandwich", 237, 9.0),
  createData("Jelly Bean", 375, 0.0),
  createData("KitKat", 518, 26.0),
  createData("Lollipop", 392, 0.2),
  createData("Marshmallow", 318, 0),
  createData("Nougat", 360, 19.0),
  createData("Oreo", 437, 18.0),
].sort((a, b) => (a.calories < b.calories ? -1 : 1));
