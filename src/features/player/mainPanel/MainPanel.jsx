import { Route, Routes } from "react-router-dom";

//import styles from './MainPanel.module.css'

import { Albums } from "./albums/Albums";
 import { Songs } from "./songs/Songs"
 import { Playlists } from "./playlists/Playlists"
export const MainPanel = () => {
  return (
    <div className="md:ml-[250px]">
      <Routes>
        <Route index element={<Songs />} />
        <Route path="songs" element={<Songs />} />
        <Route index element={<Albums />} />
        <Route path="albums" element={<Albums />} />
        <Route index element={<Playlists />} />
        <Route path="playlists" element={<Playlists />} />

      </Routes>
    </div>
  );
};
