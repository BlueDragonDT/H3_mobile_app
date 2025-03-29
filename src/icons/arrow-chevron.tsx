import Svg, { Path } from "react-native-svg";

export const ArrowChevron = ({ className }: { className?: string }) => (
  <Svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    className={className}
  >
    <Path
      d="M4.24264 15.6569L15.5563 4.34324M15.5563 4.34324H7.07107M15.5563 4.34324V12.8285"
      stroke="white"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </Svg>
);
