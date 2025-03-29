import classNames from "classnames";
import Svg, { Line, Rect } from "react-native-svg";

export const TvPhone = ({ color }: { color?: string }) => (
  <Svg width="25" height="17" viewBox="0 0 25 17" fill="none">
    <Rect
      x="0.5"
      y="0.5"
      width="20.9972"
      height="10.3778"
      fill="white"
      stroke={color || "white"}
    />
    <Rect
      x="17.1875"
      y="16.1875"
      width="13.4119"
      height="6.58523"
      transform="matrix(0 -1 1 0 1 33.375)"
      fill="white"
      stroke={color || "white"}
    />
    <Line
      x1="4.55127"
      y1="14.6705"
      x2="16.6876"
      y2="14.6705"
      stroke={color || "white"}
    />
  </Svg>
);
