/* eslint-disable react/no-forward-ref -- Compatibility for React <=18 */
import type { CSSInterpolation } from "@emotion/css/create-instance";
import type { DistributiveOmit, Overwrite } from "@mui/types";
import type * as Types from "./types";
import React, { forwardRef, useMemo } from "react";
import { useReamgifProps } from "./useReamgifProps";
import { mergeCssInterpolation } from "./utils";

const defaultCssInterpolation: CSSInterpolation = {
  label: "reamgif-box",
  display: "flex",
};

const defaultRootElement: ReamgifBox.DefaultRootElementType = "div";

const reamgifBoxDataKey: ReamgifBox.DataKey = "data-reamgif-box";
const reamgifBoxDataAttribute: ReamgifBox.DataAttribute = {
  [reamgifBoxDataKey]: "",
};

namespace ReamgifBox {
  export type DataKey = `data-reamgif-box`;
  export type DataAttribute = Record<DataKey, "">;

  export type DefaultRootElementType = "div";
  export interface OwnProps {
    /**
     * The component used for the root node.
     */
    component?: React.ElementType;
  }
  type PropsWithReamgifProps<TRootElementType extends React.ElementType> =
    Types.WithReamgifProps<
      Overwrite<React.ComponentProps<TRootElementType>, OwnProps>
    >;

  export type Props<
    TRootElementType extends React.ElementType = DefaultRootElementType,
  > =
    Types.SatisfiesRootElementType<TRootElementType> extends true
      ? PropsWithReamgifProps<TRootElementType>
      : never;
  export interface TypeInternal {
    <TRootElementType extends React.ElementType = DefaultRootElementType>(
      props: Overwrite<
        Props<TRootElementType>,
        {
          /**
           * The component used for the root node.
           */
          component: TRootElementType;
        }
      >,
    ): React.ReactNode;
    (props: DistributiveOmit<Props, "component">): React.ReactNode;
  }
  export type Type = TypeInternal & {
    defaultRootElement: DefaultRootElementType;
    defaultCssInterpolation: CSSInterpolation;
    dataKey: DataKey;
    dataAttribute: DataAttribute;
  };
}

const ReamgifBoxInternal: ReamgifBox.TypeInternal = forwardRef(
  function ReamgifBoxInternal(
    { component: Component = defaultRootElement, ...restProps },
    ref,
  ) {
    const compatibilityProps = useMemo(
      () => ({
        ...restProps,
        ...(!ref ? {} : { ref }),
      }),
      [restProps, ref],
    );
    const cssProp = useMemo(
      () =>
        mergeCssInterpolation(defaultCssInterpolation, compatibilityProps.css),
      [compatibilityProps.css],
    );
    const mergedInputProps = useMemo(
      () => ({
        ...compatibilityProps,
        css: cssProp,
      }),
      [compatibilityProps, cssProp],
    );
    const props = useReamgifProps(mergedInputProps);
    return <Component {...reamgifBoxDataAttribute} {...props} />;
  },
);

/**
 * A flexible box container component with Reamgif styling capabilities.
 */
const ReamgifBox: ReamgifBox.Type = Object.assign(ReamgifBoxInternal, {
  displayName: "ReamgifBox",
  defaultRootElement,
  defaultCssInterpolation,
  dataKey: reamgifBoxDataKey,
  dataAttribute: reamgifBoxDataAttribute,
});

export { ReamgifBox };
