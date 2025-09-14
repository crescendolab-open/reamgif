/* eslint-disable react/no-forward-ref -- Compatibility for React <=18 */
import type { WithReamgifProps } from "@crescendolab/reamgif";
import type { CSSInterpolation } from "@emotion/css/create-instance";
import type { DistributiveOmit, Overwrite } from "@mui/types";
import type { SatisfiesRacRootElementType } from "./types";
import {
  mergeCssInterpolation,
  useEmotionInstance,
  useReamgifProps,
} from "@crescendolab/reamgif";
import { forwardRef, useMemo } from "react";
import { Button } from "react-aria-components";

const defaultRootElementType: RacButton.DefaultRootElementType = Button;

const classNameRecord: RacButton.ClassNameRecord = {
  disabled: "disabled",
  danger: "danger",
};

const cssInterpolationRecord: RacButton.CssInterpolationRecord = {
  racButton: {
    label: "rac-button",
    padding: "8px 16px",
    fontSize: "16px",
    borderRadius: "4px",
    border: "none",
    cursor: "pointer",
    backgroundColor: "#0078d4",
    color: "white",
    textDecoration: "none",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    [`&.${classNameRecord.disabled},&[disabled]`]: {
      backgroundColor: "#a19f9d",
      cursor: "not-allowed",
    },
    [`&.${classNameRecord.danger}`]: {
      backgroundColor: "#d13438",
      "&:hover": {
        backgroundColor: "#a4262c",
      },
      "&:active": {
        backgroundColor: "#8c1014",
      },
    },
    [`&:not(.${classNameRecord.disabled}):not([disabled]):not(.${classNameRecord.danger})`]:
      {
        "&:hover": {
          backgroundColor: "#106ebe",
        },
        "&:active": {
          backgroundColor: "#005a9e",
        },
      },
  },
};

namespace RacButton {
  export type ClassNameRecord = Record<"danger" | "disabled", string>;
  export type CssInterpolationRecord = Record<"racButton", CSSInterpolation>;

  export type DefaultRootElementType = typeof Button;
  export interface OwnProps {
    component?: React.ElementType;
    disabledLike?: boolean;
    danger?: boolean;
  }
  type PropsWithReamgifProps<TRootElementType extends React.ElementType> =
    WithReamgifProps<
      Overwrite<React.ComponentProps<TRootElementType>, OwnProps>
    >;
  export type Props<
    TRootElementType extends React.ElementType = DefaultRootElementType,
  > =
    SatisfiesRacRootElementType<TRootElementType> extends true
      ? PropsWithReamgifProps<TRootElementType>
      : never;
  export interface TypeInternal {
    <TRootElementType extends React.ElementType = DefaultRootElementType>(
      props: Overwrite<
        Props<TRootElementType>,
        { component: TRootElementType }
      >,
    ): React.ReactNode;
    (props: DistributiveOmit<Props, "component">): React.ReactNode;
  }
  export type Type = TypeInternal & {
    defaultRootElementType: DefaultRootElementType;
    classNameRecord: ClassNameRecord;
    cssInterpolationRecord: CssInterpolationRecord;
  };
}

const RacButtonInternal: RacButton.TypeInternal = forwardRef(
  function RacButtonInternal(
    {
      component: Component = defaultRootElementType,
      disabledLike,
      danger,
      className,
      cornerRadius = 999,
      ...restProps
    },
    ref,
  ) {
    const emotionInstance = useEmotionInstance();
    const props = useReamgifProps(
      useMemo(
        () => ({
          ...restProps,
          cornerRadius,
          ...(ref ? { ref } : {}),
        }),
        [restProps, cornerRadius, ref],
      ),
    );
    const classNamesArg: (
      overrideClassName: string | undefined,
    ) => Parameters<typeof emotionInstance.cx> = useMemo(
      () => (overrideClassName) => [
        emotionInstance.css(
          mergeCssInterpolation(cssInterpolationRecord.racButton),
        ),
        ...(!danger ? [] : [classNameRecord.danger]),
        ...(!disabledLike ? [] : [classNameRecord.disabled]),
        props.className,
        overrideClassName,
      ],
      [danger, disabledLike, emotionInstance, props.className],
    );
    const mergedClassName: typeof className = useMemo(
      () =>
        typeof className === "function"
          ? (...args) => emotionInstance.cx(classNamesArg(className(...args)))
          : emotionInstance.cx(classNamesArg(className)),
      [className, classNamesArg, emotionInstance],
    );
    const mergedProps = useMemo(
      () => ({
        ...(!disabledLike ? {} : { "data-my-rac-button-disabled-like": "" }),
        ...(!danger ? {} : { "data-my-rac-button-danger": "" }),
        ...props,
        className: mergedClassName,
      }),
      [disabledLike, danger, props, mergedClassName],
    );
    return <Component {...mergedProps} />;
  },
);

/**
 * A button component that uses React Aria Components and supports Reamgif
 * styling.
 */
const RacButton: RacButton.Type = Object.assign(RacButtonInternal, {
  displayName: "RacButton",
  defaultRootElementType,
  classNameRecord,
  cssInterpolationRecord,
});

export { RacButton };
