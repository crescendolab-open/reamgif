import type { Emotion } from "@emotion/css/create-instance";
import { use } from "react";
import { EmotionInstanceContext } from "./EmotionInstanceContext";

namespace useEmotionInstance {
  export type UseEmotionInstance = () => Emotion;
}

export const useEmotionInstance: useEmotionInstance.UseEmotionInstance = () => {
  const context = use(EmotionInstanceContext);
  return context;
};
