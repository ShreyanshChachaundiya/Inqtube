import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";

// -------------------- importing React icons from library---------------
import { AiFillHome, AiOutlineFlag } from "react-icons/ai";
import { MdLocalFireDepartment, MdLiveTv, MdPeopleAlt } from "react-icons/md";
import { CgMusicNote } from "react-icons/cg";
import { FiFilm } from "react-icons/fi";
import { IoGameControllerSharp } from "react-icons/io5";
import { ImNewspaper } from "react-icons/im";
import { GiDiamondTrophy, GiEclipse } from "react-icons/gi";
import { RiLightbulbLine, RiFeedbackLine } from "react-icons/ri";
import { FiSettings, FiHelpCircle } from "react-icons/fi";
import { BiTrendingUp } from "react-icons/bi";
import { IoMdPodium } from "react-icons/io";
import {
  BsFillCameraVideoFill,
  BsFillPlayFill,
  BsFillFileEarmarkPlayFill,
} from "react-icons/bs";
import { IoLogoFacebook } from "react-icons/io";
import { FaHeadphones, FaUser, FaListAlt, FaRss, FaPlayCircle } from "react-icons/fa";

// ----------------------- Creating an array of all categories -----------------
const categories = [
  { name: "New", icon: <AiFillHome />, type: "home" },
  { name: "Latest Videos", icon: <BsFillCameraVideoFill />, type: "category" },
  { name: "Trending Videos", icon: <BiTrendingUp />, type: "category" },
  { name: "Top Videos", icon: <IoMdPodium />, type: "category", divider: true },
  { name: "Videos", icon: <BsFillCameraVideoFill />, type: "category", heading: "MENUS" },
  { name: "Live", icon: <BsFillPlayFill />, type: "category",  },
  { name: "Channels", icon: <BsFillFileEarmarkPlayFill />, type: "category" },
  { name: "Members", icon: <MdPeopleAlt />, type: "category" },
  { name: "Audio", icon: <FaHeadphones />, type: "category" },
  { name: "Artists", icon: <FaUser />, type: "category" },
  { name: "Categories", icon: <FaListAlt />, type: "menu" },
  { name: "Blogs", icon: <FaRss />, type: "menu" },
  { name: "Playlist", icon: <FaPlayCircle />, type: "menu", divider: true },
  {
    name: "GOI",
    icon: (
      <img
        src="https://goi.inqtube.com/upload/images/categories/videos/1679730247519___main.png"
        className="w-[25px]"
      />
    ),
    type: "menu",
    heading: "CATEGORIES"
  },
  {
    name: "STPI",
    icon: (
      <img
        src="https://goi.inqtube.com/upload/images/categories/videos/1679733003567_q__main.jpg"
        className="w-[25px]"
      />
    ),
    type: "menu",
  },
  {
    name: "PMO",
    icon: (
      <img
        src="https://goi.inqtube.com/upload/images/categories/videos/1676544801932_q__main.png"
        className="w-[25px]"
      />
    ),
    type: "menu",
  },
  {
    name: "Finance Ministry",
    icon: (
      <img
        src="https://goi.inqtube.com/upload/images/categories/videos/1679730247519___main.png"
        className="w-[25px]"
      />
    ),
    type: "menu",
  },
  {
    name: "MOD",
    icon: (
      <img
        src="https://goi.inqtube.com/upload/images/categories/videos/1679730247519___main.png"
        className="w-[25px]"
      />
    ),
    type: "menu",
  },
  {
    name: "MeitY",
    icon: (
      <img
        src="https://goi.inqtube.com/upload/images/categories/videos/1679730247519___main.png"
        className="w-[25px]"
      />
    ),
    type: "menu",
  },
  {
    name: "MIB",
    icon: (
      <img
        src="https://goi.inqtube.com/upload/images/categories/videos/1679730247519___main.png"
        className="w-[25px]"
      />
    ),
    type: "menu",
  },
  {
    name: "MOF",
    icon: (
      <img
        src="https://goi.inqtube.com/upload/images/categories/videos/1679730247519___main.png"
        className="w-[25px]"
      />
    ),
    type: "menu",
  },
  {
    name: "MOE",
    icon: (
      <img
        src="https://goi.inqtube.com/upload/images/categories/videos/1679302442750_m__main.png"
        className="w-[25px]"
      />
    ),
    type: "menu",
  },
  {
    name: "State Of UP",
    icon: (
      <img
        src="https://goi.inqtube.com/upload/images/categories/videos/1679302352412_u__main.png"
        className="w-[25px]"
      />
    ),
    type: "menu",
  },
  {
    name: "janpratnidhi",
    icon: (
      <img
        src="https://goi.inqtube.com/upload/images/categories/videos/1679302442750_m__main.png"
        className="w-[25px]"
      />
    ),
    type: "menu",
  },
  {
    name: "lokvani",
    icon: (
      <img
        src="https://goi.inqtube.com/upload/images/categories/videos/1679818824022_b__main.jpg"
        className="w-[25px]"
      />
    ),
    type: "menu",
  },
];

// ------------importing component --------------
import MenuItem from "./MenuItem";

// -----------------importing context api to access state---------------
import { Context } from "../context/contextApi";
import { SocialIcon } from "react-social-icons";

const SideNav = () => {
  const {
    selectedCategory,
    setSelectedCategory,
    sideNavHamburger,
    setSideNavHamburger,
  } = useContext(Context);

  const navigate = useNavigate();

  // ------------------- Switching between different categories -----------------
  const clickHandler = (name, type) => {
    switch (type) {
      case "category":
        return setSelectedCategory(name);
      case "home":
        return setSelectedCategory(name);
      case "menu":
        return false;
      default:
        break;
    }
  };

  return (
    <div
      className={`md:block w-[300px] overflow-y-auto h-full py-4 bg-black absolute md:relative z-10  md:translate-x-0 transition-all
             ${sideNavHamburger ? "translate-x-2" : "translate-x-[-240px]"}`}
    >
      <div className="flex px-5 flex-col">
        {categories.map((item) => {
          return (
            <React.Fragment key={item.name}>
            {item.heading && <span className="text-white text-lg mb-3">{item.heading}</span>}
            
            <Link to={`/${item.name}`}>
              <MenuItem
                text={item.type === "home" ? "Home" : item.name}
                icon={item.icon}
                action={() => {
                  clickHandler(item.name, item.type);
                  navigate("/");
                  setSideNavHamburger(!sideNavHamburger);
                }}
                
                className={`${
                  selectedCategory === item.name ? "bg-white/[0.15]" : ""
                }`}
              />

            </Link>
              {item.divider && <hr className="my-5 border-white/[0.2]" />}
            </React.Fragment>
          );
        })}
        <hr className="my-3 border-white/[0.2] text-white" />
        <div>
          <span className="text-white mb-7 text-lg">SETTINGS</span>

          <label class="relative inline-flex items-center cursor-pointer mt-3">
            <input type="checkbox" value="" class="sr-only peer" checked />
            <div class="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4   dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 "></div>
            <span class="ml-3 text-sm font-medium text-white text-lg">
              Adult Content
            </span>
          </label>
        </div>
        <hr className="my-3 border-white/[0.2] text-white" />
        <div>
          <span className="text-white  text-[1rem]">Follow US ON</span>
          <div className="flex justify-around my-4">
            <SocialIcon
              url="https://facebook.com/in/jaketrent"
              style={{ height: 30, width: 30 }}
            />
            <SocialIcon
              url="https://twitter.com/in/jaketrent"
              style={{ height: 30, width: 30 }}
            />
            <SocialIcon
              url="https://vimeo.com/in/jaketrent"
              style={{ height: 30, width: 30 }}
            />
            <SocialIcon
              url="https://youtube.com/in/jaketrent"
              style={{ height: 30, width: 30 }}
            />
            <SocialIcon
              url="https://pinterest.com/in/jaketrent"
              style={{ height: 30, width: 30 }}
            />
          </div>
        </div>
        <hr className="my-3 border-white/[0.2] text-white" />
        <span className="text-white text-lg mb-5">
          Privacy Terms of Service Contact
        </span>
        <span className="text-gray-400 text-sm">
          Copyright © 2023 ClickHere.Video. All Rights Reserved.
        </span>
        <div className="text-white/[0.5] text-[12px]"></div>
      </div>
    </div>
  );
};

export default SideNav;
