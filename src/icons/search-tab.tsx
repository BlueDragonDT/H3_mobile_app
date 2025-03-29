import classNames from "classnames";
import Svg, { Circle, G, Line } from "react-native-svg";

export const SearchTab = ({ className }: { className?: string }) => (
  <Svg
    width="22"
    height="19"
    viewBox="0 0 22 19"
    fill="none"
    className={classNames(className)}
  >
    <G id="Group 8">
      <Circle id="Ellipse 1" cx="8.5" cy="8.5" r="8" stroke="black" />
      <Line
        id="Line 5"
        x1="15.3536"
        y1="12.6464"
        x2="21.3536"
        y2="18.6464"
        stroke="black"
      />
    </G>
  </Svg>
);
