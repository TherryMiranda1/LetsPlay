import SongCard from "../SongView/SongCard";
import styles from "./Shared.module.css";
import { useDispatch, useSelector } from "react-redux";
export const TracksSection = ({ album }) => {
  const { activeSong, isPlaying } = useSelector((state) => state.player);
  return (
    <article className="m-auto">
      {album?.images && (
        <img
          className='h-72 w-72 rounded-md '
          alt={album?.name}
          src={album?.images[0]?.url}
        />
      )}
      <h3 className="text-3xl">{album?.name}</h3>
      <p className="text-3xl font-bold mb-5">{album?.artists[0]?.name}</p>
      <section className="flex flex-wrap gap-12 m-auto">
        {album?.tracks?.items?.map((item, i) => (
          <SongCard
            key={item.id}
            item={item}
            i={i}
            data={album?.tracks?.items ? album.tracks?.items : album}
            isPlaying={isPlaying}
            activeSong={activeSong}
          />
        ))}
      </section>
    </article>
  );
};
