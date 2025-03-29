import Svg, { Rect } from "react-native-svg";

export const MoreRow = () => (
  <Svg width="15" height="3" viewBox="0 0 15 3" fill="none">
    <Rect y="3" width="3" height="3" transform="rotate(-90 0 3)" fill="white" />
    <Rect
      x="6"
      y="3"
      width="3"
      height="3"
      transform="rotate(-90 6 3)"
      fill="white"
    />
    <Rect
      x="12"
      y="3"
      width="3"
      height="3"
      transform="rotate(-90 12 3)"
      fill="white"
    />
  </Svg>
);
