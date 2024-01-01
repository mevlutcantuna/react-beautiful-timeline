import React, { createContext } from "react";
import { OppositeHeights } from "../components/Timeline";

export interface TimelineContextType {
  countOfTimelineEl: number;
  animationDuration: number;
  animation: boolean;
  oppositeHeights: OppositeHeights[];
  setOppositeHeights: React.Dispatch<React.SetStateAction<OppositeHeights[]>>;
  type: "vertical" | "horizontal";
}

export const TimelineContext = createContext<TimelineContextType | null>(null);
