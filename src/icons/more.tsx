import classNames from "classnames";
import Svg, { Rect } from "react-native-svg";

export const More = ({
  className,
  color,
}: {
  className?: string;
  color?: string;
}) => (
  <Svg
    width="4"
    height="20"
    viewBox="0 0 4 20"
    fill="none"
    className={classNames(className)}
  >
    <Rect width="4" height="4" fill={color || "white"} />
    <Rect y="8" width="4" height="4" fill={color || "white"} />
    <Rect y="16" width="4" height="4" fill={color || "white"} />
  </Svg>
);
