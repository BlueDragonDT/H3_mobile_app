import { NavigationProp, useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "../../navigators";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { ChevronLeft } from "../../icons/chevron-left";
import { SafeAreaView } from "react-native-safe-area-context";

const ListItem = ({ title }: { title: string }) => (
  <TouchableOpacity className="pt-[18px] pb-[7px] px-[33px] border-b border-b-black">
    <Text className="text-black text-base font-light font-['outfit']">
      {title}
    </Text>
  </TouchableOpacity>
);

export const CurationScreen = () => {
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
        <View className="px-[31px] pt-[54px]">
          <Text className="text-black text-3xl font-normal font-['outfit']">
            Apply for Curation
          </Text>
          <Text className="text-black mt-2.5 text-xs font-light">
            As a digital art owner you can submit your playlists for curation by
            our content specialists.
          </Text>
          <Text className="text-black mt-2.5 w-[75%] text-xs font-light">
            Please connect your wallets with the art that you would like to
            submit
          </Text>
          <Text className="text-black text-xl mt-[27px] font-light ">
            Select playback royalties per view.
          </Text>
          <Text className="text-black mt-2.5 w-[75%] text-xs font-light">
            These will accumulate in your account for you to claim to a
            designated wallet.
          </Text>
        </View>
        <View className="w-full flex-row pt-[65px] pb-[13px] border-b border-b-[#000000] justify-end px-[33px]">
          <Image
            source={require("../../../assets/images/artem.png")}
            className="!w-[160px] !h-[30px]"
          />
        </View>
        <ListItem title="1 ARTEM per view" />
        <ListItem title="2 ARTEM per view" />
        <ListItem title="3 ARTEM per view" />
        <View className="absolute bottom-[25px] w-full left-[15px] mx-auto flex-row justify-center">
          <Text className="text-black w-[70%] text-center text-[10px] font-light font-['outfit']">
            It will take up to 7 working days to receive feedback
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};
