import havimg from "../Images/menu-ocean.png";
import solimg from "../Images/menu-globaltemp.png";
import isimg from "../Images/menu-glaciers.png";
const navLinks = [
  {
    id: 1,
    title: "Global Temp",
    path: "/global-temp",
    img: `${solimg}`,
  },
  {
    id: 3,
    title: `Havsnivå`,
    path: `/ocean-levels`,
    img: `${havimg}`,
  },
  {
    id: 4,
    title: `Glaciär`,
    path: `/glaciers`,
    img: `${isimg}`,
  },
];
export default navLinks;
