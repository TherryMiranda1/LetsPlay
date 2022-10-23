import { Topbar } from "./topbar/Topbar";
import { MainPanel } from "./mainPanel/MainPanel";
import { NavigationBar } from "./navigationBar/NavigationBar";
import { useSelector } from "react-redux";

// import de estilos
import styles from "./Player.module.css";
import FloatingPlayer from "./FloatingPlayer";

export const Player = () => {
  const { activeSong } = useSelector((state) => state.player);

  return (
    <main className={styles.main}>
      <Topbar />
      <div className="h-screen pt-12 md:pt-16 block md:flex w-full">
        <NavigationBar />
        <MainPanel />
      </div>
      {activeSong?.name && (
        <section>
          <FloatingPlayer />
        </section>
      )}
    </main>
  );
};
