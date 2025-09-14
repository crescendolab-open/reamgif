import type * as Types from "./types";

const anyObj: any = {};

(() => {
  // BaseRootElementProps, BaseRootElementType
  anyObj as React.ComponentProps<"button"> satisfies Types.BaseRootElementProps;
  anyObj as React.ComponentProps<"a"> satisfies Types.BaseRootElementProps;
  anyObj as React.ComponentProps<"div"> satisfies Types.BaseRootElementProps;
  anyObj as React.ComponentProps<"table"> satisfies Types.BaseRootElementProps;

  type AllowedPickedComponentProps = Pick<
    React.ComponentProps<"button">,
    "className" | "ref"
  >;
  anyObj as AllowedPickedComponentProps satisfies Types.BaseRootElementProps;

  interface AllowedDefinedRefCallbackComponentProps {
    ref?: React.RefCallback<HTMLButtonElement>;
    className?: string;
  }
  anyObj as AllowedDefinedRefCallbackComponentProps satisfies Types.BaseRootElementProps;

  interface AllowedDefinedRefComponentProps {
    ref?: React.Ref<HTMLButtonElement>;
    className?: string;
  }
  anyObj as AllowedDefinedRefComponentProps satisfies Types.BaseRootElementProps;

  interface DisallowProps {
    foo: string;
    bar?: number;
  }
  // @ts-expect-error -- does not satisfy BaseRootElementProps
  anyObj as DisallowProps satisfies Types.BaseRootElementProps;
  type DisallowedComponentType = React.FC<DisallowProps>;
  // @ts-expect-error -- does not satisfy BaseRootElementType
  anyObj as DisallowedComponentType satisfies Types.BaseRootElementType;
})();

(() => {
  // WithReamgifProps
  type Result = Types.WithReamgifProps<{
    foo: string;
    bar?: number;
  }>;
  type Expected = {
    foo: string;
    bar?: number;
  } & Types.ReamgifProps;
  anyObj as Result satisfies Expected;
  anyObj as Expected satisfies Result;
})();

(() => {
  // InputPropsToOutputProps
  type Result = Types.InputPropsToOutputProps<
    {
      foo: string;
      bar?: number;
    } & Types.ReamgifProps
  >;
  interface Expected extends Types.ReamgifDataAttribute {
    className: string;
    foo: string;
    bar?: number;
  }
  anyObj as Result satisfies Expected;
  anyObj as Expected satisfies Result;
})();
