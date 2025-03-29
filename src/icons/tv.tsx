import classNames from "classnames";
import Svg, { Line, Path, Rect } from "react-native-svg";

export const TV = ({
  className,
  color,
}: {
  className?: string;
  color?: string;
}) => (
  <Svg
    width="29"
    height="21"
    viewBox="0 0 29 21"
    fill="none"
    className={classNames(className)}
  >
    <Rect x="0.5" y="1.5" width="28" height="14" stroke={color || "white"} />
    <Line x1="6" y1="20.5" x2="22" y2="20.5" stroke={color || "white"} />
    <Path
      d="M13.4773 11.4034V5.77841H14.4318V11.4034H13.4773ZM11.142 9.06818V8.11364H16.767V9.06818H11.142Z"
      fill={color || "white"}
    />
  </Svg>
);
