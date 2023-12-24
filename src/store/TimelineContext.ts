import { createContext } from "react";

export interface TimelineContextType {
  countOfTimelineEl: number;
  animationDuration: number;
  animation: boolean;
}

export const TimelineContext = createContext<TimelineContextType | null>(null);
