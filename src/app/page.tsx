"use client";
import { useEffect, useState } from "react";

export default function Page() {
  return (
    <>
      <Welcome text="hello, welcome" />
      <Header />
      <section className="w-screen h-screen  items-center justify-center flex flex-col bg-gray-900/90">
        <img
          src="./fll.jpg"
          alt=""
          className="absolute w-screen -z-10 blur-md "
        />
        <CardIntro />
      </section>
      <section className="w-screen h-screen bg-gray-900"></section>
      <section className="w-screen h-screen bg-gray-900"></section>
    </>
  );
}
function CardIntro() {
  const [hidden, setHidden] = useState<boolean>(true);
  useEffect(() => {
    setInterval(() => {
      setHidden(false);
    }, 5000);
  }, []);

  return (
    <div
      className={`${
        hidden
          ? "md:h-[200px] h-[140px]"
          : "md:h-[450px] h-[60%] transition-all"
      } bg-gray-800/30 border border-gray-800 rounded-2xl md:w-[800px] w-[480px] relative  flex justify-center`}
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
function Welcome(props: { text: string }) {
  const [hidden, setHidden] = useState<boolean>(false);
  const [text, setText] = useState<string>("");
  const [isReversing, setIsReversing] = useState<boolean>(false);

  useEffect(() => {
    if (!isReversing) {
      for (let index = 0; index < props.text.length; index++) {
        setTimeout(() => {
          setText((prev) => `${prev}${props.text[index]}`);
        }, 150 * index);
      }

      setTimeout(() => {
        setIsReversing(true);
      }, props.text.length * 150 + 1000);
    }
  }, [props.text, isReversing]);

  useEffect(() => {
    if (isReversing) {
      for (let index = props.text.length - 1; index >= 0; index--) {
        setTimeout(() => {
          setText((prev) => prev.slice(0, prev.length - 1));
        }, 100 * (props.text.length - index));
      }

      setTimeout(() => {
        setIsReversing(false);
        setHidden(true);
      }, props.text.length * 100 + 1000);
    }
  }, [isReversing, props.text]);

  if (hidden) return null;
  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 flex justify-center items-center">
      <div className="md:text-[100px] text-[48px] w-max text-gray-500 ">
        <span className="tracking-widest border-r-[4px] transition-[5s] animate-cursortext border-gray-500">
          {text}
        </span>
      </div>
    </div>
  );
}

function Header() {
  return (
    <header className="min-h-20 bg fixed top-0 flex justify-end w-full bg-transparent items-center px-8">
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="40px"
          height="40px"
          viewBox="0 0 24 24"
          className="fill-gray-500"
        >
          <path d="M4 5C3.44772 5 3 5.44772 3 6C3 6.55228 3.44772 7 4 7H20C20.5523 7 21 6.55228 21 6C21 5.44772 20.5523 5 20 5H4ZM7 12C7 11.4477 7.44772 11 8 11H20C20.5523 11 21 11.4477 21 12C21 12.5523 20.5523 13 20 13H8C7.44772 13 7 12.5523 7 12ZM13 18C13 17.4477 13.4477 17 14 17H20C20.5523 17 21 17.4477 21 18C21 18.5523 20.5523 19 20 19H14C13.4477 19 13 18.5523 13 18Z" />
        </svg>
      </div>
    </header>
  );
}
