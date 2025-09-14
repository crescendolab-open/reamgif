import type {
  BaseRef,
  BaseRootElementProps,
  SatisfiesRootElementType,
} from "@crescendolab/reamgif";
import type { Overwrite } from "@mui/types";
import type { StyleRenderProps } from "react-aria-components";

export type SatisfiesRacRootElementType<
  TElementType extends React.ElementType,
> =
  TElementType extends React.ElementType<infer TProps>
    ? TProps extends {
        ref?: React.Ref<infer TRef> | undefined;
        className?: infer TClassName;
      }
      ? TRef extends BaseRef
        ? TClassName extends StyleRenderProps<any>["className"] // react-aria-components compatibility
          ? true
          : SatisfiesRootElementType<TElementType>
        : SatisfiesRootElementType<TElementType>
      : SatisfiesRootElementType<TElementType>
    : SatisfiesRootElementType<TElementType>;

export type BaseRacRootElementProps = Overwrite<
  BaseRootElementProps,
  {
    // react-aria-components compatibility
    className: StyleRenderProps<object>["className"];
  }
>;
