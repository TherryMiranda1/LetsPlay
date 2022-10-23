import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMyPlaylists } from "spotify";

import styles from "./Playlists.module.css";

export const Playlists = () => {
  const dispatch = useDispatch();
  const { playlists } = useSelector((state) => state.spotifyMyPlaylists);


  useEffect(() => {
    dispatch(getMyPlaylists());
  }, [dispatch]);

  return (
    <article className="h-full w-full flex flex-wrap gap-12 m-10">
      {playlists.map((playlists) => (
        <article key={playlists.id}>
          <img
            className='rounded-md m-3 w-72 h-72'
            alt={playlists.name}
            src={playlists.images[0]?.url}
          />
        </article>
      ))}
    </article >
  );
};
