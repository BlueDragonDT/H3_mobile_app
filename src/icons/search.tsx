import classNames from "classnames";
import Svg, { Circle, Line, Rect } from "react-native-svg";

export const Search = ({
  className,
  color,
}: {
  className?: string;
  color?: string;
}) => (
  <Svg
    className={classNames(className)}
    width="22"
    height="19"
    viewBox="0 0 22 19"
    fill="none"
  >
    <Circle cx="8.5" cy="8.5" r="8" stroke={color || "#717171"} />
    <Line
      x1="15.3536"
      y1="12.6464"
      x2="21.3536"
      y2="18.6464"
      stroke={color || "#717171"}
    />
  </Svg>
);
