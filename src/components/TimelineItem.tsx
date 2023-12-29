import { CSSProperties } from "react";
import TimelineDot from "./TimelineDot";

interface TimelineItemProps {
  dotColor?: string;
  place?: "normal" | "opposite";
  dotIcon?: any;
  dotStyle?: CSSProperties;
  children?: string | JSX.Element | JSX.Element[];
}

const TimelineItem = ({
  dotColor,
  place,
  dotIcon,
  dotStyle,
  children,
}: TimelineItemProps) => {
  return (
    <div
      className="flex-1 relative"
      style={place === "opposite" ? { height: "0" } : {}}
    >
      <TimelineDot dotStyle={dotStyle} dotIcon={dotIcon} dotColor={dotColor} />
      <div
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
