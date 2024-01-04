import { CSSProperties, useContext, useEffect, useRef } from "react";
import { TimelineContext, TimelineContextType } from "../store/TimelineContext";
import { divedeHalfNumberValueInString } from "../utils";

interface TimelineDotProps {
  dotColor?: string;
  dotIcon?: any;
  dotStyle?: CSSProperties;
  dotSize?: {
    width: string | number | undefined;
    height: string | number | undefined;
  };
  dotText?: any;
  place?: "opposite" | "normal";
}

const TimelineDot = ({
  dotColor,
  dotIcon,
  dotStyle,
  dotSize,
  dotText,
  place,
}: TimelineDotProps) => {
  const timelineCtx = useContext<TimelineContextType | null>(TimelineContext);
  const countOfTimelineEl = timelineCtx?.countOfTimelineEl;
  const animationDuration = timelineCtx?.animationDuration;
  const animation = timelineCtx?.animation;
  const type = timelineCtx?.type;
  const lengthOfChildren = timelineCtx?.lengthOfChildren;
  const timelineDot = document.getElementsByClassName("timeline-dot");
  const ref = useRef<HTMLDivElement>(null);
  const dotTextRef = useRef<HTMLDivElement>(null);
  const activeTimelineDot =
    timelineDot.length === lengthOfChildren
      ? timelineDot
      : [...timelineDot].slice(timelineDot.length / 2, timelineDot.length);

  useEffect(() => {
    if (animation) {
      for (let i = 0; i < activeTimelineDot.length; i++) {
        (activeTimelineDot[i] as HTMLElement).style.transitionDelay =
          String(
            ((animationDuration as number) / (countOfTimelineEl as number)) * i,
          ) + "ms";
        setTimeout(() => {
          (activeTimelineDot[i] as HTMLElement).style.opacity = "1";
        }, 50);
      }
    }
  }, [activeTimelineDot, animationDuration, countOfTimelineEl, animation]);

  return (
    <div
      ref={ref}
      style={{
        ...dotStyle,
        backgroundColor: dotColor
          ? dotColor === "none"
            ? ""
            : dotColor
          : "#7DD3FC",
        opacity: animation ? 0.75 : 1,
        left:
          type === "vertical"
            ? dotSize?.width
              ? `-${divedeHalfNumberValueInString(dotSize?.width as string)}`
              : "-6px"
            : "auto",
        top:
          type === "horizontal"
            ? dotSize?.height
              ? `-${divedeHalfNumberValueInString(dotSize?.height as string)}`
              : "-6px"
            : "",
      }}
      className={
        "timeline-dot w-3 h-3 rounded-full absolute left-0 top-[-6px] z-20 flex items-center justify-center transition-opacity ease-in duration-500 "
      }
    >
      {dotIcon ? dotIcon : ""}
      {dotText && (
        <div
          ref={dotTextRef}
          className="absolute w-max"
          style={{
            top:
              type === "horizontal"
                ? place === "opposite"
                  ? `${dotTextRef.current?.clientHeight}px`
                  : `-${dotTextRef.current?.clientHeight}px`
                : "",
            left:
              type === "vertical"
                ? place === "opposite"
                  ? `${ref.current?.clientWidth}px`
                  : `-${dotTextRef.current?.clientWidth}px`
                : "",
          }}
        >
          {dotText}
        </div>
      )}
    </div>
  );
};

export default TimelineDot;
