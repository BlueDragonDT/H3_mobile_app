import classNames from "classnames";
import Svg, { G, Line, Rect } from "react-native-svg";

export const MyArea = ({ className }: { className?: string }) => (
  <Svg
    width="20"
    height="19"
    viewBox="0 0 20 19"
    fill="none"
    className={classNames(className)}
  >
    <G id="Group 34">
      <Rect
        id="Rectangle 10"
        x="5.40479"
        y="0.5"
        width="14"
        height="13"
        stroke="black"
      />
      <G id="Group 9">
        <Line
          id="Line 6"
          x1="0.5"
          y1="7.71741"
          x2="0.499999"
          y2="19"
          stroke="black"
        />
        <Line id="Line 7" y1="18.5" x2="11.7954" y2="18.5" stroke="black" />
      </G>
    </G>
  </Svg>
);
