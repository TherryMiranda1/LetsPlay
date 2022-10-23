import { Search } from "./search/Search";
import { User } from "./user/User";

//import styles from "./Topbar.module.css";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserProfile } from "spotify";
import logo from "../../../assets/logo.png";

export const Topbar = () => {
  const dispatch = useDispatch();
  const { displayName, avatarURL } = useSelector(
    (state) => state.spotifyProfile
  );

  useEffect(() => {
    dispatch(getUserProfile());
  }, [dispatch]);

  return (
    <div className="absolute w-full h-12 md:h-16 flex z-10 items-center  bg-gradient-to-tr from-black/80 to[#00bf72] backdrop-blur-xl">
      <div className="flex-start">
        <img className="h-10 px-3 md:h-12" alt="logo" src={logo} />
      </div>
      <div>
        <Search />
      </div>
      <div className="absolute right-2 p-3">
        <User name={displayName} avatarURL={avatarURL} />
      </div>
    </div>
  );
};
