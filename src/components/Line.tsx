import React from "react";
import { CSSProperties, useRef } from "react";
import useIsInViewport from "../hooks/useIsInViewport";

interface LineProps {
  animation?: boolean;
  passiveLineStyle?: CSSProperties;
  activeLineStyle?: CSSProperties;
  animationDuration: number;
}

const Line = ({
  animation,
  passiveLineStyle,
  activeLineStyle,
  animationDuration,
}: LineProps) => {
  const lineRef = useRef<HTMLDivElement>(null);
  const isLineShowing = useIsInViewport(lineRef);

  return (
    <div className="w-full">
      <div
        style={passiveLineStyle}
        className="content-[''] absolute w-full h-[1px] bg-gray-200 top-0"
      />
      <div
        ref={lineRef}
        style={
          animation
            ? {
                width: isLineShowing ? "100%" : "0%",
                transition: `width linear ${animationDuration}ms`,
                ...activeLineStyle,
              }
            : { width: "100%", ...activeLineStyle }
        }
        className="h-[1px] bg-red-400 z-10 relative w-0"
      ></div>
    </div>
  );
};

export default Line;
