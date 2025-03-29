import Svg, { Circle, Line } from "react-native-svg";

export const Share2 = ({ color }: { color?: string }) => (
  <Svg width="9" height="14" viewBox="0 0 9 14" fill="none">
    <Line
      y1="-0.5"
      x2="8.36826"
      y2="-0.5"
      transform="matrix(-0.716995 -0.697078 -0.838127 0.545475 7 13)"
      stroke={color || "white"}
    />
    <Line
      y1="-0.5"
      x2="8.36826"
      y2="-0.5"
      transform="matrix(-0.716995 0.697078 -0.838127 -0.545475 7 1.33325)"
      stroke={color || "white"}
    />
    <Circle cx="1.5" cy="7.5" r="1.5" fill={color || "white"} />
    <Circle cx="1.5" cy="7.5" r="1.5" fill={color || "white"} />
    <Circle cx="1.5" cy="7.5" r="1.5" fill={color || "white"} />
    <Circle cx="7.5" cy="12.5" r="1.5" fill={color || "white"} />
    <Circle cx="7.5" cy="12.5" r="1.5" fill={color || "white"} />
    <Circle cx="7.5" cy="12.5" r="1.5" fill={color || "white"} />
    <Circle cx="7.5" cy="1.5" r="1.5" fill={color || "white"} />
    <Circle cx="7.5" cy="1.5" r="1.5" fill={color || "white"} />
    <Circle cx="7.5" cy="1.5" r="1.5" fill={color || "white"} />
  </Svg>
);
