import classNames from "classnames";
import Svg, { Line } from "react-native-svg";

export const ArrowRight = ({
  className,
  color,
}: {
  className?: string;
  color?: string;
}) => (
  <Svg
    width="6"
    height="9"
    viewBox="0 0 6 9"
    fill="none"
    className={classNames(className)}
  >
    <Line
      y1="-0.5"
      x2="5.81788"
      y2="-0.5"
      transform="matrix(0.716995 0.697078 0.838127 -0.545475 1 0.888916)"
      stroke={color || "black"}
    />
    <Line
      y1="-0.5"
      x2="5.81788"
      y2="-0.5"
      transform="matrix(0.716995 -0.697078 0.838127 0.545475 1 9)"
      stroke={color || "black"}
    />
  </Svg>
);
