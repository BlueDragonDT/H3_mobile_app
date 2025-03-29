import React from "react";
import {
  TouchableOpacity,
  Text,
  View,
  GestureResponderEvent,
} from "react-native";
import cn from "classnames";

interface ButtonProps {
  onClick?: (event: GestureResponderEvent) => void;
  text: string | React.ReactNode;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  className?: string;
  isBetween?: boolean;
  disabled?: boolean;
  isCenter?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  onClick,
  text,
  leftIcon,
  rightIcon,
  className,
  isBetween,
  disabled,
  isCenter = true,
}) => {
  return (
    <TouchableOpacity
      onPress={onClick}
      className={cn(
        "flex-row items-center rounded-sm py-[13px] px-4 bg-black",
        isBetween && "justify-between",
        isCenter && "justify-center",
        className
      )}
      activeOpacity={0.8}
      disabled={disabled}
    >
      {leftIcon && <View className="mr-2">{leftIcon}</View>}

      <Text className="text-white text-center text-xl mx-auto font-normal ">
        {text}
      </Text>
      {rightIcon && <View className="ml-2">{rightIcon}</View>}
    </TouchableOpacity>
  );
};

export default Button;
