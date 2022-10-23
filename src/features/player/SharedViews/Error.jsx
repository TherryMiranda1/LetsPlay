import Lottie from "lottie-react";
import error from "../../statics/lottie/error.json";


const Error = (props) => (
  <div className="w-full flex flex-col justify-center items-center">
    <h4 className="font-bold text-xl">{props.title || "Loading..."} </h4>
    <Lottie animationData={error} />
  </div>
);

export default Error;
