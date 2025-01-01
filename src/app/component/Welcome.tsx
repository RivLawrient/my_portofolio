"use client";

import { useEffect, useState } from "react";

export function Welcome(props: { text: string }) {
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
