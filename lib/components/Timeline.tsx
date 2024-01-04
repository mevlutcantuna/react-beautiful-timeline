import { CSSProperties, useEffect, useMemo, useRef, useState } from "react";
import Line from "./Line";
import { TimelineContext } from "../store/TimelineContext";
import useWindowDimensions from "../hooks/useWindowDimentions";
import { TimelineItemProps } from "./TimelineItem";

interface BeautifulTimelineProps {
  type?: "vertical" | "horizontal";
  children?: JSX.Element[];
  animation?: boolean;
  activeLineStyle?: CSSProperties;
  passiveLineStyle?: CSSProperties;
  animationDuration?: number;
  responsiveWidth?: number;
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
  responsiveWidth,
}: BeautifulTimelineProps) => {
  const timelineRef = useRef<HTMLDivElement>(null);
  const [countOfTimelineEl, setCountOfTimelineEl] = useState(0);
  const { width } = useWindowDimensions();
  const [oppositeHeights, setOppositeHeights] = useState<OppositeHeights[]>([]);

  const responsiveType = useMemo(() => {
    if (responsiveWidth) {
      if (width >= responsiveWidth) {
        return type;
      } else {
        return "vertical";
      }
    } else {
      return type;
    }
  }, [responsiveWidth, type, width]);

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
        type: responsiveType,
        lengthOfChildren: countOfTimelineEl,
      }}
    >
      <div
        className="relative min-w-fit	w-fit flex"
        style={
          responsiveType === "horizontal"
            ? {
                paddingTop: `${maxHeightOfTimelineItemsContent}px`,
              }
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
              }
        }
      >
        {maxHeightOfTimelineItemsContent > 0 && (
          <div
            className="h-full invisible"
            style={responsiveType === "horizontal" ? { display: "none" } : {}}
          >
            {children}
          </div>
        )}
        <div>
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
              responsiveType === "horizontal"
                ? { flexDirection: "row" }
                : { flexDirection: "column" }
            }
          >
            <>{children}</>
          </div>
        </div>
      </div>
    </TimelineContext.Provider>
  );
};

export default Timeline;
