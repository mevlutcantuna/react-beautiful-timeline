import { CSSProperties, useContext, useEffect, useRef } from "react";
import { TimelineContext, TimelineContextType } from "../store/TimelineContext";

interface TimelineDotProps {
  dotColor?: string;
  dotIcon?: any;
  dotStyle?: CSSProperties;
}

const TimelineDot = ({ dotColor, dotIcon, dotStyle }: TimelineDotProps) => {
  const timelineCtx = useContext<TimelineContextType | null>(TimelineContext);
  const countOfTimelineEl = timelineCtx?.countOfTimelineEl;
  const animationDuration = timelineCtx?.animationDuration;
  const animation = timelineCtx?.animation;

  const timelineDot = document.getElementsByClassName("timeline-dot");
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (animation) {
      for (let i = 0; i < timelineDot.length; i++) {
        (timelineDot[i] as HTMLElement).style.transitionDelay =
          String(
            ((animationDuration as number) / (countOfTimelineEl as number)) * i,
          ) + "ms";

        setTimeout(() => {
          (timelineDot[i] as HTMLElement).style.opacity = "1";
        }, 50);
      }
    }
  }, [timelineDot, animationDuration, countOfTimelineEl, animation]);

  return (
    <div
      ref={ref}
      style={{
        backgroundColor: dotColor ?? "#7DD3FC",
        ...dotStyle,
        opacity: animation ? 0.75 : 1,
      }}
      className={
        "timeline-dot w-3 h-3 rounded-full absolute left-0 top-[-6px] z-20 flex items-center justify-center transition-opacity ease-in duration-500"
      }
    >
      {dotIcon ? dotIcon : ""}
    </div>
  );
};

export default TimelineDot;
