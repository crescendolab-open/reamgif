import type { Emotion } from "@emotion/css/create-instance";
import createInstance from "@emotion/css/create-instance";

export const defaultEmotionCacheKey = "reamgif";

export const defaultEmotionInstance: Emotion = createInstance({
  key: defaultEmotionCacheKey,
});
