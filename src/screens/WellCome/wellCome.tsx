import { Image, Text, TouchableOpacity, View } from "react-native";
import Button from "../../components/Button/Button";
import { ArrowChevron } from "../../icons/arrow-chevron";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "../../navigators";
import { SafeAreaView } from "react-native-safe-area-context";

export const WellComeScreen = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View className="flex-col pb-[68px] justify-end !px-[30px] w-full h-full">
        <View>
          <Image
            source={require("../../../assets/images/logo.png")}
            className="!w-[269.8px] !h-[170.22]"
          />
        </View>
        <View className="pt-[49px] pb-[82px]">
          <Text className="text-black text-4xl ">Stream.</Text>
          <Text className="text-black text-4xl font-normal">Explore.</Text>
          <Text className="text-black text-4xl font-normal">Inspire.</Text>
        </View>

        <Button
          text="Get Started"
          rightIcon={<ArrowChevron />}
          onClick={() => navigation.navigate("About")}
          isBetween
          className="justify-start items-start"
        />
        <View className="pt-4 justify-end w-full flex-row">
          <View className="flex flex-row gap-x-2 items-center">
            <Text className="text-black text-xl font-light">
              Already have an account?
            </Text>
            <TouchableOpacity onPress={() => navigation.navigate("SignIn")}>
              <Text className="text-black text-xl font-medium ">Sign in</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};
