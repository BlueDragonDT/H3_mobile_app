import classNames from "classnames";
import Svg, { Path } from "react-native-svg";

export const Email = ({ className }: { className?: string }) => (
  <Svg
    width="23"
    height="16"
    viewBox="0 0 23 16"
    fill="none"
    className={classNames(className)}
  >
    <Path
      d="M22.9491 0.478443C22.9295 0.42793 22.9048 0.379482 22.8752 0.333832C22.8635 0.303543 22.8498 0.274024 22.8341 0.245459C22.7577 0.171221 22.6722 0.106464 22.5795 0.0526445L22.4399 0.00444098H0.773627C0.716295 -0.00148033 0.658484 -0.00148033 0.601151 0.00444098L0.461528 0.0526445C0.418073 0.0757415 0.37684 0.10263 0.33833 0.132984C0.293825 0.163715 0.252556 0.198701 0.215133 0.237425C0.199501 0.265981 0.185783 0.295501 0.174067 0.325798C0.0872066 0.412014 0.0273619 0.520729 0.0015913 0.639122C-0.000530433 0.671224 -0.000530433 0.703426 0.0015913 0.735529V15.1966C0.0015913 15.4097 0.0881224 15.614 0.242149 15.7647C0.396175 15.9154 0.60508 16 0.822906 16H22.1771C22.3949 16 22.6038 15.9154 22.7579 15.7647C22.9119 15.614 22.9984 15.4097 22.9984 15.1966V0.735529C23.0005 0.703426 23.0005 0.671224 22.9984 0.639122C22.9878 0.584027 22.9712 0.530173 22.9491 0.478443ZM19.7624 1.53892L11.5 7.75719L3.23757 1.53892H19.7624ZM21.3558 14.3932H1.64422V2.34232L10.999 9.38004C11.1426 9.48818 11.3188 9.54682 11.5 9.54682C11.6812 9.54682 11.8574 9.48818 12.001 9.38004L21.3558 2.34232V14.3932Z"
      fill="#b5b5b5"
    />
  </Svg>
);
