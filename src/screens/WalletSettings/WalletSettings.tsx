import { NavigationProp, useNavigation } from "@react-navigation/native";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { RootStackParamList } from "../../navigators";
import { ChevronLeft } from "../../icons/chevron-left";
import { ArrowRight, User } from "../../icons";
import { Logout } from "../../icons/logout";
import { SafeAreaView } from "react-native-safe-area-context";

const WalletItem = ({
  title = "",
  token = "",
}: {
  title: string;
  token: string;
}) => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("Curation")}
      className="flex-row pt-3 pb-2.5 items-center justify-between"
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
      <Logout color="#000" />
    </TouchableOpacity>
  );
};

const SettingsItem = ({ title = "" }: { title: string }) => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("HomeTabs")}
      className="flex-row pt-[23px] pb-[7px] border-b border-b-[#717171] justify-between w-full"
    >
      <Text>{title}</Text>
      <ArrowRight />
    </TouchableOpacity>
  );
};
export const WalletSettingsScreen = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  return (
    <SafeAreaView className="flex-1 bg-white ">
      <View className="px-5 w-full h-full !pt-[26px] relative">
        <View className="flex-row justify-between items-start">
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
        <View className="pt-[55px]">
          <Text className="text-black text-3xl font-normal font-['outfit']">
            Wallet Connect
          </Text>
          <View className="pt-[75px]">
            <WalletItem title="Richard Smith" token="0xF0r2323" />
          </View>
        </View>
        <View className="pt-[26px]">
          <View className="pt-[12px] px-5 items-center flex-row justify-between pb-[13px] w-full bg-black ">
            <Text className="text-white  text-xl font-normal font-['outfit']">
              2,3940.11 USD
            </Text>
            <Text className="text-white text-xs font-normal font-['outfit']">
              KYC passed
            </Text>
          </View>
        </View>
        <SettingsItem title="Open Wallet" />
        <SettingsItem title="Change Wallet" />
        <SettingsItem title="Copy Adress" />
        <SettingsItem title="Settings" />
      </View>
    </SafeAreaView>
  );
};
