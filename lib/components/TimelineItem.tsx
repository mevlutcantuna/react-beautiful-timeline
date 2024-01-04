import {
  CSSProperties,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import TimelineDot from "./TimelineDot";
import { TimelineContext } from "../store/TimelineContext";
import { v4 as uuidv4 } from "uuid";
import useWindowDimensions from "../hooks/useWindowDimentions";

export interface TimelineItemProps {
  dotColor?: string;
  place?: "normal" | "opposite";
  dotIcon?: any;
  dotStyle?: CSSProperties;
  children?: string | JSX.Element | JSX.Element[];
  dotText?: any;
}

const TimelineItem = ({
  dotColor,
  place = "normal",
  dotIcon,
  dotStyle,
  children,
  dotText,
}: TimelineItemProps) => {
  const timelineCtx = useContext(TimelineContext);
  const oppositeHeights = timelineCtx?.oppositeHeights;
  const setOppositeHeights = timelineCtx?.setOppositeHeights;
  const type = timelineCtx?.type;
  const contentRef = useRef<HTMLDivElement>(null);
  const [componentId, setComponentId] = useState("");
  const { width } = useWindowDimensions();

  useEffect(() => {
    const id = uuidv4();
    setComponentId(id);
  }, []);

  const dotSize = useMemo(() => {
    const item = oppositeHeights?.filter((item) => item.id === componentId);
    return item && item[0]?.dotSize;
  }, [componentId, oppositeHeights]);

  useEffect(() => {
    if (contentRef.current && setOppositeHeights && componentId !== "") {
      setOppositeHeights((prev) => {
        if (!prev.find((item) => item.id === componentId)) {
          return [
            ...prev,
            {
              width: contentRef.current?.clientWidth as number,
              height: contentRef.current?.clientHeight as number,
              place: place === "opposite" ? "opposite" : "normal",
              id: componentId,
              dotSize: {
                width: dotStyle?.width,
                height: dotStyle?.height,
              },
            },
          ];
        } else {
          return [...prev].map((item) => {
            if (componentId === item.id) {
              return {
                width: contentRef.current?.clientWidth as number,
                height: contentRef.current?.clientHeight as number,
                place: place === "opposite" ? "opposite" : "normal",
                id: componentId,
                dotSize: {
                  width: dotStyle?.width,
                  height: dotStyle?.height,
                },
              };
            } else {
              return item;
            }
          });
        }
      });
    }
  }, [place, setOppositeHeights, componentId, width, dotStyle, type]);

  return (
    <div
      className={`flex-1 relative beautiful-timeline-item ${
        place === "opposite"
          ? "beautiful-timeline-opposite-wrapper"
          : "beautiful-timeline-wrapper"
      }`}
      style={
        place === "opposite" && type === "horizontal" ? { height: "0" } : {}
      }
    >
      <TimelineDot
        dotSize={dotSize}
        dotStyle={dotStyle}
        dotIcon={dotIcon}
        dotColor={dotColor}
        dotText={dotText}
        place={place}
      />
      <div
        ref={contentRef}
        className={`${
          place === "opposite"
            ? "beautiful-timeline-item-content-opposite"
            : "beautiful-timeline-item-content"
        }`}
        style={
          place === "opposite"
            ? type === "horizontal"
              ? { transform: "translateY(-100%)" }
              : {
                  transform: "translateX(-100%)",
                  display: "flex",
                  justifyContent: "flex-end",
                }
            : {}
        }
      >
        {children}
      </div>
    </div>
  );
};

export default TimelineItem;
