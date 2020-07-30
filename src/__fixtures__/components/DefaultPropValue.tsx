import * as React from "react";

type FontWeight = "normal" | "bold";

interface DefaultPropValueComponentProps {
  /**
   * Button color.
   *
   * @default blue
   **/
  color: "blue" | "green";

  /**
   * The font weight to use on text
   *
   * @default normal
   */
  weight?: FontWeight;

  /**
   * Button counter.
   */
  counter: number;

  /**
   * Button disabled.
   */
  disabled: boolean;
}

/**
 * Component with a prop with a default value.
 */
export const DefaultPropValueComponent: React.SFC<
  DefaultPropValueComponentProps
> = props => (
  <button
    disabled={props.disabled}
    style={{
      backgroundColor: props.color,
      fontWeight: props.weight || "normal",
    }}
  >
    {props.counter}
    {props.children}
  </button>
);

DefaultPropValueComponent.defaultProps = {
  counter: 123,
  disabled: false,
};
