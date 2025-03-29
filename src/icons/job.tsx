import Svg, { Path, Rect } from "react-native-svg";

export const Job = ({ color }: { color?: string }) => (
  <Svg width="29" height="20" viewBox="0 0 29 20" fill="none">
    <Rect x="8.5" y="0.5" width="12" height="9" stroke={color || "black"} />
    <Rect
      x="0.5"
      y="5.5"
      width="28"
      height="14"
      fill="white"
      stroke={color || "black"}
    />
    <Path
      d="M13.4773 15.4034V9.77841H14.4318V15.4034H13.4773ZM11.142 13.0682V12.1136H16.767V13.0682H11.142Z"
      fill={color || "black"}
    />
  </Svg>
);
