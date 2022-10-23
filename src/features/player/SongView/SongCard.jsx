
//Redux
import { useDispatch } from "react-redux";
import { playPause, setActiveSong } from "../../../redux/playerSlice";
//Components
import PlayPause from "./PlayPause";
import fondo from "../../../assets/fondo3.png"

const SongCard = ({ item, i, isPlaying, activeSong, data }) => {
  const dispatch = useDispatch();

  const handlePause = () => {
    dispatch(playPause(false));
  };
  const handlePlay = () => {
    dispatch(setActiveSong({ song: item, data, i }));
    dispatch(playPause(true));
  };
  return (
    <article className=" hover:bg-white/5 backdrop-blur-md flex flex-col flex-wrap w-[300px] gap-12 animate-slideup rounded-lg ">
      <div className="relative w-full h-68 group mb-4">
        <div
          className={`absolute rounded-xl inset-0 h-48 justify-center items-center bg-black bg-opacity-50 group-hover:flex ${
            activeSong?.title === item.title
              ? "flex bg-inherit bg-opacity-70"
              : "hidden"
          }`}
        >
          <PlayPause
            song={item}
            handlePause={handlePause}
            handlePlay={handlePlay}
            isPlaying={isPlaying}
            activeSong={activeSong}
            cover={true}
          />
        </div>
       
        <img
            className="rounded-xl h-48 w-full shadow-2xl shadow-black "
            alt={item.title}
            src={data?.images ? data?.images[0]?.url : fondo}
          />
        
        <a
          className="mx-3 mt-2 flex flex-col cursor-pointer"
        >
          <p className="text-md font-bold truncate hover:text-gray-400">
            {item.name}
          </p>
        </a>
        <a
          className="mx-3 flex flex-col cursor-pointer "
        >
          <p className="text-sm font-bold italic truncate hover:text-gray-400">
            {item.subtitle}
          </p>
        </a>
      </div>
    </article>
  );
};

export default SongCard;
