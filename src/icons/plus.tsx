import classNames from "classnames";
import Svg, { Line, Rect } from "react-native-svg";

export const Plus = ({
  className,
  color,
  width,
  height,
}: {
  className?: string;
  color?: string;
  width?: number;
  height?: number;
}) => (
  <Svg
    className={classNames(className)}
    width={width || "24"}
    height={height || "24"}
    viewBox="0 0 24 24"
    fill="none"
  >
    <Line
      x1="11.75"
      y1="8"
      x2="11.75"
      y2="17"
      stroke={color || "white"}
      stroke-width="1.5"
    />
    <Line
      x1="7"
      y1="12.25"
      x2="16"
      y2="12.25"
      stroke={color || "white"}
      stroke-width="1.5"
    />
    <Rect x="0.5" y="0.5" width="23" height="23" stroke={color || "white"} />
  </Svg>
);
