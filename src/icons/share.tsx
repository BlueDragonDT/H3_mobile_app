import Svg, { Rect } from "react-native-svg";

export const Share = ({
  width,
  height,
  color,
}: {
  width?: number;
  height?: number;
  color?: string;
}) => (
  <Svg width={width} height={height} viewBox="0 0 13 13" fill="none">
    <Rect x="0.5" y="0.5" width="12" height="12" stroke={color || "white"} />
  </Svg>
);
