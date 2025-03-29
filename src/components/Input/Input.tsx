import React from "react";
import { TextInput, View, Text } from "react-native";
import cn from "classnames";

interface InputProps {
  value?: string;
  onChange?: (text: string) => void;
  leftIcon?: React.ReactNode;
  placeholder?: string;
  className?: string;
  secureTextEntry?: boolean;
  errorMessage?: string;
}

const Input: React.FC<InputProps> = ({
  value,
  onChange,
  leftIcon,
  placeholder,
  className,
  secureTextEntry = false,
  errorMessage,
}) => {
  return (
    <View className={cn("flex-col", className)}>
      <View className="flex-row bg-white  items-center px-[15px] rounded-sm border border-black">
        {leftIcon && <View className="mr-2">{leftIcon}</View>}

        <TextInput
          value={value}
          onChangeText={onChange}
          placeholder={placeholder}
          secureTextEntry={secureTextEntry}
          className="flex-1 placeholder:text-[#717171] h-[38px] pl-1 text-[11px] font-light font-['outfit']"
        />
      </View>

      {errorMessage && (
        <Text className="text-red-500 text-sm mt-1">{errorMessage}</Text>
      )}
    </View>
  );
};

export default Input;
