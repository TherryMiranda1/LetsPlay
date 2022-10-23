import Lottie from "lottie-react";
import speakers from "../../../assets/lottie/speakers.json";

const Loader = (props) => (
  <div className="w-full flex flex-col justify-center items-center">
    <h4 className="font-bold text-xl">
      {props.title || "Loading..."}{" "}
    </h4>
    <Lottie animationData={speakers} />
  </div>
);

export default Loader;
