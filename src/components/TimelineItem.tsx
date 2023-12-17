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
    <div className="flex-1 relative">
      <TimelineDot dotStyle={dotStyle} dotIcon={dotIcon} dotColor={dotColor} />
      <div
        className=""
        style={place === "opposite" ? { transform: "translateY(-100%)" } : {}}
      >
        {children}
      </div>
    </div>
  );
};

export default TimelineItem;
