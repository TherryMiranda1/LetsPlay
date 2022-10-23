import { AiOutlinePlayCircle, AiOutlinePauseCircle } from "react-icons/ai";
const PlayPause = ({
  song,
  handlePlay,
  handlePause,
  isPlaying,
  activeSong,
  cover,
}) => {
  console.log(song);
  console.log(activeSong);
  return isPlaying && activeSong?.name === song.name ? (
    <AiOutlinePauseCircle
      size={40}
      className={`cursor-pointer  ${cover === true && "p-16 text-gray-700 h-full w-full"} `}
      onClick={() => handlePause()}
    />
  ) : (
    <AiOutlinePlayCircle
      size={40}
      className={`cursor-pointer  ${cover === true && "p-16 h-full w-full"}`}
      onClick={() => handlePlay()}
    />
  );
};

export default PlayPause;
