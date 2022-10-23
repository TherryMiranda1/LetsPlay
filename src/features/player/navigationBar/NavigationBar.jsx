import styles from "./NavigationBar.module.css";
import { NavLink } from "react-router-dom";
import Lottie from "lottie-react";
import notes from "../../../assets/lottie/notes.json";

export const NavigationBar = () => {
  const yourSections = [
    {
      name: "Songs",
      path: "songs",
    },
    {
      name: "Albums",
      path: "albums",
    },
    {
      name: "Playlists",
      path: "playlists",
    },
  ];

  return (
    <section>
      <div className="hidden absolute h-full md:flex flex-col w-[250px] py-8 px-3 bg-black/40 min-w-[25vw] xl:min-w-[15vw]">
        <Lottie animationData={notes} className="w-full h-14 object-contain " />
        <section className="flex flex-col justify-start items-center ">
          {yourSections.map(({ name, path }) => (
            <article key={name}>
              <NavLink
                to={path}
                className={({ isActive }) =>
                  isActive ? "text-black" : "text-gray-200"
                }
              >
                <h2 className="m-3 text-md flex gap-5  font-semibold hover:text-[#fffa9d] cursor-pointer">
                  {name}
                </h2>
              </NavLink>
            </article>
          ))}
        </section>
      </div>

      <div className="md:hidden flex md:mt-10 h-12 w-full  z-10 p-6 bg-gradient-to-tr from-black/80 to[#00bf72] backdrop-blur-xl">
        <section className="flex items-center">
          {yourSections.map(({ name, path }) => (
            <article className="mx-auto" key={name}>
              <NavLink
                to={path}
                className={({ isActive }) =>
                  isActive ? "text-black" : "text-gray-200"
                }
              >
                <h2 className="m-3 text-md flex gap-5  font-semibold hover:text-[#fffa9d] cursor-pointer">
                  {name}
                </h2>
              </NavLink>
            </article>
          ))}
        </section>
      </div>
    </section>
  );
};
