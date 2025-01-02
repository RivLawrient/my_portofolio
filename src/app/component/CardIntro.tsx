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
      }  rounded-2xl md:w-[800px] w-[400px] relative  flex justify-center`}
    >
      <div
        className={`${
          hidden ? "opacity-0" : "opacity-1 transition-all"
        } absolute my-3 font-mono leading-none flex flex-col text-gray-500 text-start`}
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
      <div className="absolute right-0 w-[65%] h-full leading-tight flex items-center  ">
        <span className="text-gray-500 text-[24px] font-mono text-start">
          Passionate about building scalable systems, reliable APIs, and
          seamless digital experiences.
          <br />
          <br />
          <span>Let’s create something amazing together!</span>
        </span>
      </div>
      <button className="absolute bg-gray-500 rounded-xl bottom-0 p-3 my-5">
        Download cv
      </button>
    </div>
  );
}
