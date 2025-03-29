import Svg, { Line, Rect } from "react-native-svg";

export const AddList = ({
  color,
  width,
  height,
}: {
  color?: string;
  width: number;
  height: number;
}) => (
  <Svg
    width={width || "17"}
    height={height || "12"}
    viewBox="0 0 17 12"
    fill="none"
  >
    <Line x1="3.70001" x2="3.70001" y2="7.2" stroke={color || "white"} />
    <Line y1="3.5" x2="7.2" y2="3.5" stroke={color || "white"} />
    <Line
      x1="9.60001"
      y1="6.69995"
      x2="16.8"
      y2="6.69995"
      stroke={color || "white"}
    />
    <Line y1="9.09998" x2="16.8" y2="9.09998" stroke={color || "white"} />
    <Line y1="11.5" x2="16.8" y2="11.5" stroke={color || "white"} />
  </Svg>
);
