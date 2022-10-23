import Lottie from "lottie-react";
import visualizer from "../../../assets/lottie/visualizer.json";

function EQ() {
  return (
    <div className="hidden md:block ">
      <Lottie animationData={visualizer} />
    </div>
  );
}

export default EQ;
