import type { CSSInterpolation } from "@emotion/css/create-instance";
import type { DistributiveOmit, Overwrite } from "@mui/types";
import type * as React from "react";

export type AllHtmlElement =
  | HTMLAnchorElement
  | HTMLAreaElement
  | HTMLAudioElement
  | HTMLBaseElement
  | HTMLBodyElement
  | HTMLBRElement
  | HTMLButtonElement
  | HTMLCanvasElement
  | HTMLDataElement
  | HTMLDataListElement
  | HTMLDetailsElement
  | HTMLDialogElement
  | HTMLDivElement
  | HTMLDListElement
  | HTMLEmbedElement
  | HTMLFieldSetElement
  | HTMLFormElement
  | HTMLHeadingElement
  | HTMLHeadElement
  | HTMLHRElement
  | HTMLHtmlElement
  | HTMLIFrameElement
  | HTMLImageElement
  | HTMLInputElement
  | HTMLModElement
  | HTMLLabelElement
  | HTMLLegendElement
  | HTMLLIElement
  | HTMLLinkElement
  | HTMLMapElement
  | HTMLMetaElement
  | HTMLMeterElement
  | HTMLObjectElement
  | HTMLOListElement
  | HTMLOptGroupElement
  | HTMLOptionElement
  | HTMLOutputElement
  | HTMLParagraphElement
  | HTMLPreElement
  | HTMLProgressElement
  | HTMLQuoteElement
  | HTMLSlotElement
  | HTMLScriptElement
  | HTMLSelectElement
  | HTMLSourceElement
  | HTMLSpanElement
  | HTMLStyleElement
  | HTMLTableElement
  | HTMLTableColElement
  | HTMLTableRowElement
  | HTMLTableSectionElement
  | HTMLTemplateElement
  | HTMLTextAreaElement
  | HTMLTimeElement
  | HTMLTitleElement
  | HTMLTrackElement
  | HTMLUListElement
  | HTMLVideoElement
  | HTMLWebViewElement;

export type AllSvgElement =
  | SVGSVGElement
  | SVGCircleElement
  | SVGClipPathElement
  | SVGDefsElement
  | SVGDescElement
  | SVGEllipseElement
  | SVGFEBlendElement
  | SVGFEColorMatrixElement
  | SVGFEComponentTransferElement
  | SVGFECompositeElement
  | SVGFEConvolveMatrixElement
  | SVGFEDiffuseLightingElement
  | SVGFEDisplacementMapElement
  | SVGFEDistantLightElement
  | SVGFEDropShadowElement
  | SVGFEFloodElement
  | SVGFEFuncAElement
  | SVGFEFuncBElement
  | SVGFEFuncGElement
  | SVGFEFuncRElement
  | SVGFEGaussianBlurElement
  | SVGFEImageElement
  | SVGFEMergeElement
  | SVGFEMergeNodeElement
  | SVGFEMorphologyElement
  | SVGFEOffsetElement
  | SVGFEPointLightElement
  | SVGFESpecularLightingElement
  | SVGFESpotLightElement
  | SVGFETileElement
  | SVGFETurbulenceElement
  | SVGFilterElement
  | SVGForeignObjectElement
  | SVGGElement
  | SVGImageElement
  | SVGLineElement
  | SVGLinearGradientElement
  | SVGMarkerElement
  | SVGMaskElement
  | SVGMetadataElement
  | SVGPathElement
  | SVGPatternElement
  | SVGPolygonElement
  | SVGPolylineElement
  | SVGRadialGradientElement
  | SVGRectElement
  | SVGSetElement
  | SVGStopElement
  | SVGSwitchElement
  | SVGSymbolElement
  | SVGTextElement
  | SVGTextPathElement
  | SVGTSpanElement
  | SVGUseElement
  | SVGViewElement;

export type BaseRef = Element | HTMLElement | AllHtmlElement | AllSvgElement;

// The base props that all components must include.
export type BaseRootElementProps = Pick<
  React.ComponentProps<keyof React.JSX.IntrinsicElements>,
  "className"
> &
  Pick<React.RefAttributes<BaseRef>, "ref">;

/**
 * Determines if the given element type's props satisfy the BaseRootElementProps
 * shape.
 */
type SatisfiesRootElementTypeProps<TRootElementType extends React.ElementType> =
  React.ComponentProps<TRootElementType> extends infer Props
    ? Props extends BaseRootElementProps
      ? true
      : false
    : false;

/**
 * Determines if the given element type's props satisfy the BaseRootElementProps
 * shape.
 */
type SatisfiesRootElementTypeByType<TElementType extends React.ElementType> =
  TElementType extends React.ElementType<infer TProps>
    ? TProps extends {
        ref?: React.Ref<infer TRef> | undefined;
        className?: infer TClassName;
      }
      ? TRef extends BaseRef
        ? TClassName extends string | undefined
          ? true
          : false
        : false
      : false
    : false;

/**
 * Determines if the given element type satisfies the BaseRootElementProps shape.
 */
export type SatisfiesRootElementType<TElementType extends React.ElementType> =
  SatisfiesRootElementTypeByType<TElementType> extends false
    ? SatisfiesRootElementTypeProps<TElementType> extends false
      ? false
      : true
    : true;

/**
 * Base props for components that support Reamgif styling.
 */
export interface ReamgifProps {
  css?: CSSInterpolation;
  cornerRadius?:
    | number
    | {
        topLeft?: number;
        topRight?: number;
        bottomLeft?: number;
        bottomRight?: number;
      };
}

export type BaseReamgifElementType = React.ElementType<ReamgifProps>;

/**
 * The required input shape that must be satisfied when constructing or
 * extending this type.
 */
export type BaseInputProps = ReamgifProps & BaseRootElementProps;

/**
 * Extended props for reamgif components.
 */
export type WithReamgifProps<TProps extends object> = Overwrite<
  TProps,
  ReamgifProps
>;

export type ReamgifDataKey = `data-reamgif`;
export type ReamgifDataAttribute = Record<ReamgifDataKey, "">;

/**
 * Transforms input props into output props through `useReamgifProps`.
 */
export type InputPropsToOutputProps<TProps extends WithReamgifProps<object>> =
  Overwrite<
    DistributiveOmit<TProps, keyof ReamgifProps>,
    { className: string } & ReamgifDataAttribute
  >;

export type ReactVersion = "18" | "19+" | "unknown";

export type BaseCssInterpolationRecord = Record<PropertyKey, CSSInterpolation>;
