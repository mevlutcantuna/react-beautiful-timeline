import { CSSProperties, useContext, useEffect, useRef, useState } from "react";
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
}

const TimelineItem = ({
  dotColor,
  place = "normal",
  dotIcon,
  dotStyle,
  children,
}: TimelineItemProps) => {
  const timelineCtx = useContext(TimelineContext);
  const setOppositeHeights = timelineCtx?.setOppositeHeights;
  const contentRef = useRef<HTMLDivElement>(null);
  const [componentId, setComponentId] = useState("");
  const { width } = useWindowDimensions();

  useEffect(() => {
    const id = uuidv4();
    setComponentId(id);
  }, []);

  useEffect(() => {
    if (contentRef.current && setOppositeHeights && componentId !== "") {
      setOppositeHeights((prev) => {
        if (!prev.find((item) => item.id === componentId)) {
          return [
            ...prev,
            {
              height: contentRef.current?.clientHeight as number,
              place: place === "opposite" ? "opposite" : "normal",
              id: componentId,
            },
          ];
        } else {
          return [...prev].map((item) => {
            if (componentId === item.id) {
              return {
                height: contentRef.current?.clientHeight as number,
                place: place === "opposite" ? "opposite" : "normal",
                id: componentId,
              };
            } else {
              return item;
            }
          });
        }
      });
    }
  }, [place, setOppositeHeights, componentId, width]);

  return (
    <div
      className={`flex-1 relative ${
        place === "opposite" ? "timeline-opposite-wrapper" : ""
      }`}
      style={place === "opposite" ? { height: "0" } : {}}
    >
      <TimelineDot dotStyle={dotStyle} dotIcon={dotIcon} dotColor={dotColor} />
      <div
        ref={contentRef}
        className={`${
          place === "opposite" ? "beautiful-timeline-item-content-opposite" : ""
        }`}
        style={place === "opposite" ? { transform: "translateY(-100%)" } : {}}
      >
        {children}
      </div>
    </div>
  );
};

export default TimelineItem;
