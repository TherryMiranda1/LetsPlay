import Image from "next/image";

const Banner = ({ artistId, artistData, songData, router }) => {
  console.log(artistId, artistData);

  return (
    <section className="relative w-full flex flex-col -mt-10">
      <article className="w-full bg-gradient-to-t from-transparent to-black h-48 md:h-72  p-10">
        <section className="absolute inset-0 flex items-center md:w-48 md:h-48 h-28 w-28 rounded-xl overflow-hidden shadow-2xl shadow-black m-10">
          <Image
            alt="banner-image"
            src={
              artistId
                ? artistData?.artists[artistId]?.attributes?.artwork?.url
                    .replace("{w}", "500")
                    .replace("{h}", "500")
                : songData?.images?.coverart
            }
            layout="fill"
          />
        </section>
        <article className="absolute md:left-72 md:top-36 top-44 ">
          <h3 className=" md:text-3xl text-lg font-bold">
            {artistId
              ? artistData?.artists[artistId]?.attributes?.name
              : songData?.title}
          </h3>
          {!artistId && (
            <a
              onClick={() =>
                router.push(`/artists/${songData?.artists[0]?.adamid}`)
              }
            >
              <p className="text-sm font-bold italic truncate hover:text-gray-400 cursor-pointer">
                {!artistId && songData?.subtitle}
              </p>
            </a>
          )}
          <p className="text-sm">
            {" "}
            {artistId
              ? artistData?.artists[artistId]?.attributes?.genreNames[0]
              : songData?.genres?.primary}
          </p>
        </article>
      </article>
    </section>
  );
};

export default Banner;
