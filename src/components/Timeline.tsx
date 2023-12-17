import { CSSProperties, useEffect, useRef, useState } from "react";
import Line from "./Line";
import { TimelineContext } from "../store/TimelineContext";

interface BeautifulTimelineProps {
  type?: "vertical" | "horizantol";
  cardClassName?: string;
  children?: string | JSX.Element | JSX.Element[];
  animation?: boolean;
  activeLineStyle?: CSSProperties;
  passiveLineStyle?: CSSProperties;
  animationDuration?: number;
}

const Timeline = ({
  type,
  children,
  animation = true,
  activeLineStyle,
  passiveLineStyle,
  animationDuration = 6000,
}: BeautifulTimelineProps) => {
  const timelineRef = useRef<HTMLDivElement>(null);
  const [countOfTimelineEl, setCountOfTimelineEl] = useState(0);

  useEffect(() => {
    const count = timelineRef.current ? timelineRef.current.children.length : 0;
    setCountOfTimelineEl(count);
  }, [timelineRef]);

  return (
    <TimelineContext.Provider value={{ countOfTimelineEl, animationDuration }}>
      <div className="relative">
        <Line
          activeLineStyle={activeLineStyle}
          passiveLineStyle={passiveLineStyle}
          animation={animation}
          animationDuration={animationDuration}
        />

        <div ref={timelineRef} className="flex">
          <>{children}</>
        </div>
      </div>
    </TimelineContext.Provider>
  );
};

export default Timeline;
