import type { CSSInterpolation } from "@emotion/css/create-instance";
import type {
  ReactVersion,
  ReamgifDataAttribute,
  ReamgifDataKey,
} from "./types";
import { version } from "react";

export const reactVersion: ReactVersion = (() => {
  const major = Number.parseInt(version.split(".")[0] ?? "", 10);
  if (major >= 19) return "19+";
  if (major === 18) return "18";
  return "unknown";
})();

export const reamgifDataKey: ReamgifDataKey = "data-reamgif";

export const reamgifDataAttribute: ReamgifDataAttribute = {
  [reamgifDataKey]: "",
};

namespace mergeCssInterpolation {
  export type MergeCssInterpolation = (
    ...cssInterpolationArray: Array<CSSInterpolation | false | null | undefined>
  ) => CSSInterpolation & Array<any>;
}

export const mergeCssInterpolation: mergeCssInterpolation.MergeCssInterpolation =
  (...cssInterpolationArray) =>
    cssInterpolationArray.flatMap<
      Exclude<CSSInterpolation, false | null | undefined | Array<any>>
    >((cssInterpolation) =>
      !cssInterpolation
        ? []
        : Array.isArray(cssInterpolation)
          ? cssInterpolation
          : [cssInterpolation],
    );
