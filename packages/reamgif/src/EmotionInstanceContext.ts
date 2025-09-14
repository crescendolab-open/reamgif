import type { Emotion } from "@emotion/css/create-instance";
import type { Context } from "react";
import { createContext } from "react";
import { defaultEmotionInstance } from "./defaultEmotionInstance";

export const EmotionInstanceContext: Context<Emotion> = createContext<Emotion>(
  defaultEmotionInstance,
);
