import { CSSProperties, useEffect, useMemo, useRef, useState } from "react";
import Line from "./Line";
import { TimelineContext } from "../store/TimelineContext";
import useWindowDimensions from "../hooks/useWindowDimentions";
import { TimelineItemProps } from "./TimelineItem";

interface BeautifulTimelineProps {
  type?: "vertical" | "horizontal";
  cardClassName?: string;
  children?: JSX.Element[];
  animation?: boolean;
  activeLineStyle?: CSSProperties;
  passiveLineStyle?: CSSProperties;
  animationDuration?: number;
}

export interface OppositeHeights {
  width: number;
  height: number;
  place: "opposite" | "normal";
  id: string;
  dotSize: {
    width: string | undefined | number;
    height: string | undefined | number;
  };
}

const Timeline = ({
  type = "horizontal",
  children,
  animation = true,
  activeLineStyle,
  passiveLineStyle,
  animationDuration = 6000,
}: BeautifulTimelineProps) => {
  const timelineRef = useRef<HTMLDivElement>(null);
  const [countOfTimelineEl, setCountOfTimelineEl] = useState(0);
  const { width } = useWindowDimensions();
  const [oppositeHeights, setOppositeHeights] = useState<OppositeHeights[]>([]);

  useEffect(() => {
    const count = children ? children.length : 0;
    setCountOfTimelineEl(count);
  }, [children]);

  const maxHeightOfTimelineItemsContent = useMemo(() => {
    let maxHeight = 0;
    for (let i = 0; i < oppositeHeights.length; i++) {
      if (
        maxHeight < oppositeHeights[i].height &&
        oppositeHeights[i].place === "opposite"
      ) {
        maxHeight = oppositeHeights[i].height;
      }
    }
    return maxHeight;

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [width, countOfTimelineEl, oppositeHeights, type]);

  return (
    <TimelineContext.Provider
      value={{
        countOfTimelineEl,
        animationDuration,
        animation,
        oppositeHeights,
        setOppositeHeights,
        type,
      }}
    >
      <div
        className="relative min-w-fit	w-fit ease-linear duration-[50ms]"
        style={
          type === "horizontal"
            ? { paddingTop: `${maxHeightOfTimelineItemsContent}px` }
            : {
                paddingTop:
                  children &&
                  (children[0].props as TimelineItemProps).dotStyle?.height
                    ? `${
                        Number(
                          (
                            (children[0].props as TimelineItemProps).dotStyle
                              ?.height as string
                          ).replace(/[a-zA-Z]/g, ""),
                        ) / 2
                      }px`
                    : "6px",
                paddingLeft: `${timelineRef.current?.clientWidth}px`,
              }
        }
      >
        <Line
          activeLineStyle={activeLineStyle}
          passiveLineStyle={passiveLineStyle}
          animation={animation}
          animationDuration={animationDuration}
        />
        <div
          ref={timelineRef}
          className="flex"
          style={
            type === "horizontal"
              ? { flexDirection: "row" }
              : { flexDirection: "column" }
          }
        >
          <>{children}</>
        </div>
      </div>
    </TimelineContext.Provider>
  );
};

export default Timeline;
