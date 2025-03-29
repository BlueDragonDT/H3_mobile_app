import classNames from "classnames";
import Svg, { Line } from "react-native-svg";

export const ChevronLeft = ({ className }: { className?: string }) => (
  <Svg
    width="7"
    height="12"
    viewBox="0 0 7 12"
    fill="none"
    className={classNames(className)}
  >
    <Line
      y1="-0.5"
      x2="8.60735"
      y2="-0.5"
      transform="matrix(-0.716995 0.697078 -0.838127 -0.545475 6.17139 0)"
      stroke="black"
    />
    <Line
      y1="-0.5"
      x2="8.60735"
      y2="-0.5"
      transform="matrix(-0.716995 -0.697078 -0.838127 0.545475 6.17139 12)"
      stroke="black"
    />
  </Svg>
);
