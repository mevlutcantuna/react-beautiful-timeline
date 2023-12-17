import { createContext } from "react";

export interface TimelineContextType {
  countOfTimelineEl: number;
  animationDuration: number;
}

export const TimelineContext = createContext<TimelineContextType | null>(null);
