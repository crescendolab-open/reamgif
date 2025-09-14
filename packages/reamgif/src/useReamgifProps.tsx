import type { CSSInterpolation } from "@emotion/css/create-instance";
import type * as Types from "./types";
import { noop, throttle } from "es-toolkit";
import mergeRefs from "merge-refs";
import { useMemo, useRef, useState } from "react";
import { useEmotionInstance } from "./useEmotionInstance";
import { mergeCssInterpolation } from "./utils";

const defaultThrottleMs = 300;

namespace useReamgifProps {
  export type UseReamgifProps = <TProps extends Types.BaseInputProps>(
    props: TProps,
  ) => Types.InputPropsToOutputProps<TProps>;
}

const useReamgifProps: useReamgifProps.UseReamgifProps = <
  TProps extends Types.BaseInputProps,
>({
  cornerRadius,
  css: cssInterpolation,
  ...props
}: TProps): Types.InputPropsToOutputProps<TProps> => {
  const typedProps: Types.InputPropsToOutputProps<TProps> =
    props satisfies Omit<
      TProps,
      keyof Types.ReamgifProps
    > as Types.InputPropsToOutputProps<TProps>;
  const emotionInstance = useEmotionInstance();
  const [rect, setRect] = useState<null | DOMRect>(null);
  const w: null | number = useMemo(
    () => (!rect ? null : Math.ceil(rect.width)),
    [rect],
  );
  const h: null | number = useMemo(
    () => (!rect ? null : Math.ceil(rect.height)),
    [rect],
  );
  // Cleanup ref for compatibility with React 18 and below
  const cleanupRef = useRef(noop);
  const localRef: TProps["ref"] = useMemo(
    () => (element: null | Types.BaseRef) => {
      if (cleanupRef.current) {
        cleanupRef.current();
      }
      cleanupRef.current = () => {
        if (!element) return noop;
        const abortController = new AbortController();
        const typedElement = element;
        function updateRect() {
          if (abortController.signal.aborted) return;

          setRect(typedElement.getBoundingClientRect());
        }
        const throttledUpdateRect = throttle(updateRect, defaultThrottleMs);
        updateRect();

        const observer = new ResizeObserver(throttledUpdateRect);
        observer.observe(typedElement);
        return function cleanup() {
          abortController.abort();
          observer.disconnect();
        };
      };
    },
    [],
  );
  const mergedRef: Types.InputPropsToOutputProps<TProps>["ref"] = useMemo(
    () => mergeRefs(props.ref, localRef),
    [localRef, props.ref],
  );
  const cornerRadiusCssInterpolation: CSSInterpolation = useMemo(() => {
    if (cornerRadius === undefined) return {};
    if (typeof cornerRadius === "number") {
      const radius = Math.min(
        cornerRadius,
        (w ?? Infinity) / 2,
        (h ?? Infinity) / 2,
      );
      return {
        label: "reamgif-corner-radius",
        borderTopLeftRadius: radius,
        borderTopRightRadius: radius,
        borderBottomLeftRadius: radius,
        borderBottomRightRadius: radius,
      } satisfies CSSInterpolation;
    }
    return {};
  }, [cornerRadius, h, w]);
  const mergedCssInterpolation: CSSInterpolation = useMemo(
    () => mergeCssInterpolation(cornerRadiusCssInterpolation),
    [cornerRadiusCssInterpolation],
  );
  const mergedClassName: string = useMemo(
    () =>
      emotionInstance.cx(
        /**
         * `styles` computed from reamgif props.
         */
        emotionInstance.css(mergedCssInterpolation),
        /**
         * `className` has second highest priority.
         */
        props.className,
        /**
         * `css` has most highest priority.
         */
        emotionInstance.css(cssInterpolation),
      ),
    [
      cssInterpolation,
      emotionInstance,
      mergedCssInterpolation,
      props.className,
    ],
  );
  const reamgifOutputProps: Types.InputPropsToOutputProps<TProps> = useMemo(
    (): Types.InputPropsToOutputProps<TProps> => ({
      ...typedProps,
      "data-reamgif": "",
      ref: mergedRef,
      className: mergedClassName,
    }),
    [mergedClassName, mergedRef, typedProps],
  );
  return reamgifOutputProps;
};

export { useReamgifProps };
