/* eslint-disable react/no-forward-ref -- Compatibility for React <=18 */
import type {
  SatisfiesRootElementType,
  WithReamgifProps,
} from "@crescendolab/reamgif";
import type { CSSInterpolation } from "@emotion/css/create-instance";
import type { DistributiveOmit, Overwrite } from "@mui/types";
import {
  mergeCssInterpolation,
  ReamgifBox,
  useEmotionInstance,
  useReamgifProps,
} from "@crescendolab/reamgif";
import { forwardRef, useMemo } from "react";

export type { useReamgifProps } from "@crescendolab/reamgif";

const defaultRootElement: MyButton.DefaultRootElementType = "button";

const classNameRecord: MyButton.ClassNameRecord = {
  disabledLike: "disabled",
};

const cssInterpolationRecord: MyButton.CssInterpolationRecord = {
  myButton: {
    label: "playground-button",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "8px 16px",
    border: "none",
    fontSize: "16px",
    backgroundColor: "#1976d2",
    color: "white",
    textDecoration: "none",
    [`&.${classNameRecord.disabledLike},&[disabled]`]: {
      backgroundColor: "#9e9e9e",
      cursor: "not-allowed",
    },
    [`&:not(.${classNameRecord.disabledLike}):not([disabled])`]: {
      cursor: "pointer",
      "&:hover": {
        backgroundColor: "#1565c0",
      },
      "&:active": {
        backgroundColor: "#0d47a1",
      },
    },
  },
};

export namespace MyButton {
  export type ClassNameRecord = Record<"disabledLike", string>;
  export type CssInterpolationRecord = Record<"myButton", CSSInterpolation>;

  export type DefaultRootElementType = "button";
  export interface OwnProps {
    component?: React.ElementType;
    disabledLike?: boolean;
  }
  type PropsWithReamgifProps<TRootElementType extends React.ElementType> =
    WithReamgifProps<
      Overwrite<React.ComponentProps<TRootElementType>, OwnProps>
    >;
  export type Props<
    TRootElementType extends React.ElementType = DefaultRootElementType,
  > =
    SatisfiesRootElementType<TRootElementType> extends true
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
    classNameRecord: ClassNameRecord;
    cssInterpolationRecord: CssInterpolationRecord;
    defaultRootElement: DefaultRootElementType;
  };
}

const MyButtonBaseOnHookInternal: MyButton.TypeInternal = forwardRef(
  function MyButtonBaseOnHookInternal(
    {
      component: Component = defaultRootElement,
      disabledLike,
      cornerRadius = 999,
      ...rawProps
    },
    ref,
  ) {
    const emotionInstance = useEmotionInstance();
    const mergedCssInterpolation = useMemo(
      () =>
        mergeCssInterpolation(cssInterpolationRecord.myButton, rawProps.css),
      [rawProps.css],
    );
    const props = useReamgifProps(
      useMemo(
        () => ({
          ...rawProps,
          cornerRadius,
          css: mergedCssInterpolation,
          ref,
        }),
        [cornerRadius, mergedCssInterpolation, rawProps, ref],
      ),
    );
    const mergedClassName = useMemo(
      () =>
        emotionInstance.cx(
          disabledLike && classNameRecord.disabledLike,
          props.className,
        ),
      [emotionInstance, disabledLike, props.className],
    );
    return (
      <Component
        data-my-button-hook=""
        {...(!disabledLike ? {} : { "data-my-button-hook-disable-like": "" })}
        {...props}
        className={mergedClassName}
      />
    );
  },
);

/**
 * A button component built using `useReamgifProps` hook.
 */
export const MyButtonBaseOnHook: MyButton.Type = Object.assign(
  MyButtonBaseOnHookInternal,
  {
    displayName: "MyButtonBaseOnHook",
    classNameRecord,
    cssInterpolationRecord,
    defaultRootElement,
  },
);

const MyButtonBaseOnBoxInternal: MyButton.TypeInternal = forwardRef(
  function MyButtonBaseOnBoxInternal(
    {
      disabledLike,
      cornerRadius = 999,
      css,
      component = defaultRootElement,
      ...rawProps
    },
    ref,
  ) {
    const mergedCssInterpolation = useMemo(
      () => mergeCssInterpolation(cssInterpolationRecord.myButton, css),
      [css],
    );
    return (
      <ReamgifBox
        data-my-button-box=""
        {...(!disabledLike
          ? {}
          : {
              "data-my-button-box-disable-like": "",
              className: classNameRecord.disabledLike,
            })}
        {...rawProps}
        {...(!ref ? {} : { ref })}
        css={mergedCssInterpolation}
        cornerRadius={cornerRadius}
        component={component}
      />
    );
  },
);

/**
 * A button component built using `ReamgifBox` component.
 */
export const MyButtonBaseOnBox: MyButton.Type = Object.assign(
  MyButtonBaseOnBoxInternal,
  {
    displayName: "MyButtonBaseOnBox",
    classNameRecord,
    cssInterpolationRecord,
    defaultRootElement,
  },
);
