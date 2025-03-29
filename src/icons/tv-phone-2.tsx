import Svg, { Line, Rect } from "react-native-svg";

export const TVPhone2 = ({
  width,
  height,
}: {
  width?: number;
  height?: number;
}) => (
  <Svg width={width} height={height} viewBox="0 0 20 14" fill="none">
    <Rect x="0.5" y="0.5" width="16.4659" height="8.03409" stroke="white" />
    <Rect
      x="13.75"
      y="12.75"
      width="10.4432"
      height="5.02273"
      transform="rotate(-90 13.75 12.75)"
      fill="black"
      stroke="white"
    />
    <Line x1="3.61365" y1="11.5454" x2="13.25" y2="11.5454" stroke="white" />
  </Svg>
);
