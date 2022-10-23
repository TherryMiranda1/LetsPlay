import { TracksSection } from "features/player/SharedViews/TracksSection";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMySongs } from "spotify";
import SongCard from "../../SongView/SongCard";

import styles from "./Songs.module.css";

export const Songs = () => {
  const dispatch = useDispatch();
  const { activeSong, isPlaying } = useSelector((state) => state.player);
  const { songs } = useSelector((state) => state.spotifyMySongs);


  useEffect(() => {
    dispatch(getMySongs());
  }, [dispatch]);

  return (
    <>
      <article className="flex flex-col">
        <section className="sm:flex-row flex flex-wrap w-full m-4 px-6 mb-6 flex-col justify-between items-center">
          {songs?.map((item, i) => (
            <SongCard
              key={item.id}
              item={item}
              i={i}
              data={songs}
              isPlaying={isPlaying}
              activeSong={activeSong}
            />
          ))}
        </section>
      </article>
    </>
  );
};
