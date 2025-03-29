import classNames from "classnames";
import Svg, { Path, Rect } from "react-native-svg";

export const Logout = ({
  className,
  color,
}: {
  className?: string;
  color?: string;
}) => (
  <Svg
    width="22"
    height="14"
    viewBox="0 0 22 14"
    fill="none"
    className={classNames(className)}
  >
    <Rect x="0.5" y="0.5" width="13" height="13" stroke="black" />
    <Path
      d="M21.3536 7.35355C21.5488 7.15829 21.5488 6.84171 21.3536 6.64645L18.1716 3.46447C17.9763 3.2692 17.6597 3.2692 17.4645 3.46447C17.2692 3.65973 17.2692 3.97631 17.4645 4.17157L20.2929 7L17.4645 9.82843C17.2692 10.0237 17.2692 10.3403 17.4645 10.5355C17.6597 10.7308 17.9763 10.7308 18.1716 10.5355L21.3536 7.35355ZM8 7.5H21V6.5H8V7.5Z"
      fill={color || "black"}
    />
  </Svg>
);
