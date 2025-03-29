import { Image, Text, TouchableOpacity, View } from "react-native";
import { ChevronLeft } from "../../icons/chevron-left";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "../../navigators";
import { ArrowRight, User } from "../../icons";
import { SafeAreaView } from "react-native-safe-area-context";

const WalletItem = ({ title, token }: { title: string; token: string }) => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("WalletSettings")}
      className="flex-row pl-[32px] pr-[23px] border-b border-b-black pt-3 pb-2.5 items-center justify-between"
    >
      <View className="flex-row items-center gap-x-[39px]">
        <View className="w-[51px] flex-row justify-center items-center rounded-full h-[51px] bg-[#D9D9D9]">
          <User stoke={"#717171"} className="mr-2 mb-2" />
        </View>
        <View>
          <Text className="text-black text-base font-light font-['outfit']">
            {title}
          </Text>
          <Text className="text-black text-base font-light font-['outfit']">
            {token}
          </Text>
        </View>
      </View>
      <ArrowRight />
    </TouchableOpacity>
  );
};

export const SelectWalletsScreen = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  return (
    <SafeAreaView className="flex-1 bg-white ">
      <View className="w-full h-full !pt-[26px] relative">
        <View className="px-5 flex-row justify-between items-start">
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            className="flex-row  gap-x-2.5 items-center"
          >
            <ChevronLeft />
            <Text className="text-black text-base font-light font-['outfit']">
              Back
            </Text>
          </TouchableOpacity>
          <View className="ml-6">
            <Image
              source={require("../../../assets/images/logo.png")}
              className="!w-[100.35] !h-[59px]"
            />
          </View>
          <View></View>
          <View></View>
        </View>
        <View className="pt-[168px]">
          <WalletItem title="Richard Smith" token="0xF0r2323" />
          <WalletItem title="Simon Ciongor" token="0xF0r2323" />
          <WalletItem title="Arthur Fischman" token="0xF0r2323" />
          <TouchableOpacity className="flex-row pl-[32px] pr-[23px] pt-3 pb-2.5 items-center justify-between">
            <View className="flex-row items-center gap-x-[39px]">
              <View className="w-[51px] flex-row justify-center items-center rounded-full h-[51px]">
                <User stoke={"#717171"} className="mr-2 mb-2" />
              </View>
              <View>
                <Text className="text-black text-base font-light font-['outfit']">
                  Use another account
                </Text>
              </View>
            </View>
            <ArrowRight />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};
