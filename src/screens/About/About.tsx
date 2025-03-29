import { Text, View } from "react-native";
import Button from "../../components/Button/Button";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "../../navigators";
import { SafeAreaView } from "react-native-safe-area-context";

export const AboutScreen = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  return (
    <SafeAreaView className="flex-1 bg-white">
      <View className="w-full h-full px-[30px] flex-col justify-center ">
        <Text className="text-black text-3xl font-normal ">What is H-3?</Text>
        <Text className="text-black font-outfit w-[95%] mt-[9px] text-lg font-light">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et.
        </Text>
        <Button
          onClick={() => navigation.navigate("Collector")}
          text="Continue"
          className="mt-[74px]"
        />
      </View>
    </SafeAreaView>
  );
};
