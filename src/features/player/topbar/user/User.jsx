import styles from "./User.module.css";

export const User = ({ name, avatarURL }) => {
  return (
    <article className="flex items-center ">
      {avatarURL && (
        <img className='md:h-12 h-10 rounded-full' src={avatarURL} alt="Avatar" />
      )}
      <p className=" font-bold p-3">{name}</p>
    </article>
  );
};
