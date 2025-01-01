"use client";
import { useEffect, useState } from "react";

export function CardIntro() {
  const [hidden, setHidden] = useState<boolean>(true);
  useEffect(() => {
    setInterval(() => {
      setHidden(false);
    }, 5000);
  }, []);

  return (
    <div
      className={`${
        hidden ? "h-[0px] opacity-0" : "md:h-[450px] h-[60%] transition-all"
      } bg-gray-800/30 border border-gray-800 rounded-2xl md:w-[800px] w-[400px] relative  flex justify-center`}
    >
      <div
        className={`${
          hidden ? "opacity-0" : "opacity-1 transition-all"
        } absolute top-[-75px] font-mono leading-none flex flex-col text-gray-500 text-start`}
      >
        <span className="text-[42px] ">
          Hi, I'm <span className="font-semibold">Sandi</span>
        </span>
        <span className="my-2">fullstack web / backend developer</span>
      </div>
      <img
        src="./mypicture.png"
        alt=""
        className={`${
          hidden ? "opacity-0" : "opacity-1 transition-all"
        } object-cover md:ml-[-60px] md:h-[400px] h-[300px] w-[200px] md:w-[300px] absolute left-0 bottom-0 rounded-2xl `}
      />
    </div>
  );
}
