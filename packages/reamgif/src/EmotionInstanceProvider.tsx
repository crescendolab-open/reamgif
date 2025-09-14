import type { Emotion } from "@emotion/css/create-instance";
import { EmotionInstanceContext } from "./EmotionInstanceContext";
import { reactVersion } from "./utils";

const ContextProvider =
  reactVersion === "19+"
    ? EmotionInstanceContext
    : EmotionInstanceContext.Provider;

export const EmotionInstanceProvider: React.FC<{
  emotionInstance: Emotion;
  children: React.ReactNode;
}> = ({ emotionInstance, children }) => {
  return <ContextProvider value={emotionInstance}>{children}</ContextProvider>;
};
