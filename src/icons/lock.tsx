import classNames from "classnames";
import Svg, { Path } from "react-native-svg";

export const Lock = ({ className }: { className?: string }) => (
  <Svg
    width="16"
    height="17"
    viewBox="0 0 16 17"
    fill="none"
    className={classNames(className)}
  >
    <Path
      d="M13 7.75H2.5C1.67157 7.75 1 8.42157 1 9.25V14.5C1 15.3284 1.67157 16 2.5 16H13C13.8284 16 14.5 15.3284 14.5 14.5V9.25C14.5 8.42157 13.8284 7.75 13 7.75Z"
      stroke="#B6B6B6"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <Path
      d="M4 7.75V4.75C4 3.75544 4.39509 2.80161 5.09835 2.09835C5.80161 1.39509 6.75544 1 7.75 1C8.74456 1 9.69839 1.39509 10.4017 2.09835C11.1049 2.80161 11.5 3.75544 11.5 4.75V7.75"
      stroke="#B6B6B6"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </Svg>
);
