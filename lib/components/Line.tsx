import { CSSProperties, useContext, useRef } from "react";
import useIsInViewport from "../hooks/useIsInViewport";
import { TimelineContext } from "../store/TimelineContext";
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
  const lineRefResponsive = useRef<HTMLDivElement>(null);
  const isLineResponsiveShowing = useIsInViewport(lineRefResponsive);
  const timelineCtx = useContext(TimelineContext);
  const type = timelineCtx?.type;

  return (
    <div className="w-full">
      <div
        style={
          type === "horizontal"
            ? { ...passiveLineStyle }
            : { ...passiveLineStyle, width: "1px", height: "100%" }
        }
        className="content-[''] absolute w-full h-[1px] bg-gray-200"
      />
      <div
        ref={lineRef}
        style={
          animation
            ? {
                width: isLineShowing ? "100%" : "0%",
                transition: `width linear ${animationDuration}ms`,
                ...activeLineStyle,
                display: type === "horizontal" ? "flex" : "none",
              }
            : {
                width: "100%",
                ...activeLineStyle,
                display: type === "horizontal" ? "flex" : "none",
              }
        }
        className="h-[1px] bg-red-400 z-10 absolute w-0"
      ></div>

      <div
        ref={lineRefResponsive}
        style={
          animation
            ? {
                height: isLineResponsiveShowing ? "100%" : "0%",
                transition: `height linear ${animationDuration}ms`,
                ...activeLineStyle,
                display: type !== "horizontal" ? "flex" : "none",
              }
            : { width: "1px", ...activeLineStyle }
        }
        className="w-[1px] bg-yellow-400 z-10 absolute"
      ></div>
    </div>
  );
};

export default Line;
