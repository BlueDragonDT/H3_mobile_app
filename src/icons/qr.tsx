import classNames from "classnames";
import Svg, { Line, Rect } from "react-native-svg";

export const QR = ({
  className,
  color,
}: {
  className?: string;
  color?: string;
}) => (
  <Svg
    width="24"
    height="25"
    viewBox="0 0 24 25"
    fill="none"
    className={classNames(className)}
  >
    <Rect
      x="5.03846"
      y="5.03857"
      width="6.07692"
      height="6.07692"
      stroke={color || "white"}
    />
    <Rect
      x="5.03846"
      y="14.7693"
      width="6.07692"
      height="6.07692"
      stroke={color || "white"}
    />
    <Rect
      x="14.7692"
      y="5.03857"
      width="6.07692"
      height="6.07692"
      stroke={color || "white"}
    />
    <Line
      x1="1"
      y1="24.3848"
      x2="6.30769"
      y2="24.3848"
      stroke={color || "white"}
    />
    <Line
      x1="1.38461"
      y1="24"
      x2="1.38461"
      y2="18.6923"
      stroke={color || "white"}
    />
    <Line
      x1="23.5"
      y1="24.8845"
      x2="23.5"
      y2="19.5768"
      stroke={color || "white"}
    />
    <Line
      x1="23.1154"
      y1="24.5"
      x2="17.8077"
      y2="24.5"
      stroke={color || "white"}
    />
    <Line
      y1="-0.5"
      x2="5.30769"
      y2="-0.5"
      transform="matrix(1 0 0 -1 1 1)"
      stroke={color || "white"}
    />
    <Line
      y1="-0.5"
      x2="5.30769"
      y2="-0.5"
      transform="matrix(0 1 1 0 1.88461 1.88477)"
      stroke={color || "white"}
    />
    <Line
      y1="-0.5"
      x2="5.30769"
      y2="-0.5"
      transform="matrix(0 1 1 0 24 1)"
      stroke={color || "white"}
    />
    <Line
      y1="-0.5"
      x2="5.30769"
      y2="-0.5"
      transform="matrix(-1 0 0 1 23.1154 1.88452)"
      stroke={color || "white"}
    />
  </Svg>
);
