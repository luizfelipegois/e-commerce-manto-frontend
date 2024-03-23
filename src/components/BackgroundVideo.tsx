import React from "react";
import Link from "next/link";

const BackgroundVideo = () => {
  return (
    <section className="px-4 py-10 relative lg:px-0">
      <video src={require("../assets/video_2.mp4")} autoPlay loop muted className="rounded-md lg:rounded-none"/>
      <div className="absolute top-14 left-10 lg:top-20">
        <h1 className="text-[22px] lg:text-[100px] lg:w-[60%] font-bold text-neutral-100">
          Seu estilo, suas regras.
        </h1>
        <Link
          className="text-[10px] lg:text-[16px] text-neutral-50 border-b-2 py-2 lg:ml-2"
          href="#"
        >
          MONTAR
        </Link>
      </div>
    </section>
  );
};

export default BackgroundVideo;
