import { SafeAreaView } from "react-native-safe-area-context";
import Input from "../../components/Input/Input";
import { useState } from "react";

export const CreateAccount = () => {
  const [value, setValue] = useState("");
  return (
    <SafeAreaView className="flex-1">
      <Input onChange={(val) => setValue(val)} value={value} />
    </SafeAreaView>
  );
};
