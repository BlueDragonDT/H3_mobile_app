import classNames from "classnames";
import Svg, { Path } from "react-native-svg";

export const HomeOutline = ({ className }: { className?: string }) => (
  <Svg
    width="23"
    height="22"
    viewBox="0 0 23 22"
    fill="none"
    className={classNames(className)}
  >
    <Path
      id="Vector"
      d="M14.3629 20.1163V14.818C14.3629 14.5838 14.2624 14.3592 14.0834 14.1936C13.9043 14.028 13.6616 13.935 13.4084 13.935H9.59021C9.33705 13.935 9.09426 14.028 8.91524 14.1936C8.73623 14.3592 8.63566 14.5838 8.63566 14.818V20.1163C8.63566 20.3504 8.53511 20.575 8.35613 20.7406C8.17714 20.9062 7.93438 20.9993 7.68124 20.9993L1.95466 21C1.8293 21 1.70516 20.9772 1.58934 20.9328C1.47351 20.8884 1.36827 20.8234 1.27962 20.7414C1.19097 20.6594 1.12065 20.5621 1.07267 20.4549C1.02469 20.3478 1 20.2329 1 20.117V9.91136C1 9.78834 1.02779 9.66667 1.08158 9.55416C1.13538 9.44165 1.21399 9.34079 1.31239 9.25802L10.8572 1.22969C11.0329 1.0819 11.2618 1.00001 11.4993 1C11.7368 0.999993 11.9657 1.08187 12.1415 1.22965L21.6876 9.25802C21.786 9.34078 21.8646 9.44165 21.9184 9.55417C21.9722 9.66669 22 9.78836 22 9.91139V20.117C22 20.2329 21.9753 20.3478 21.9273 20.4549C21.8794 20.5621 21.809 20.6594 21.7204 20.7414C21.6317 20.8234 21.5265 20.8884 21.4107 20.9328C21.2948 20.9772 21.1707 21 21.0453 21L15.3174 20.9993C15.0642 20.9993 14.8215 20.9062 14.6425 20.7406C14.4635 20.575 14.3629 20.3504 14.3629 20.1163Z"
      stroke="#717171"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </Svg>
);
