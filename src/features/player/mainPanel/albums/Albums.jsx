import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMyAlbums } from "spotify";

import styles from "./Albums.module.css";
import { TracksSection } from "../../SharedViews/TracksSection";

export const Albums = () => {
  const dispatch = useDispatch();
  const { albums } = useSelector((state) => state.spotifyMyAlbums);


  useEffect(() => {
    dispatch(getMyAlbums());
  }, [dispatch]);

  return (
    <section className=" h-full w-full flex flex-wrap gap-12 m-10 ">
      {albums.map((album) => (
        <TracksSection key={album.id} album={album}/>
      ))}
    </section>
  );
};
