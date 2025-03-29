import { Text, TouchableOpacity, View } from "react-native";
import { ChevronLeft } from "../../icons/chevron-left";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "../../navigators";
import { SafeAreaView } from "react-native-safe-area-context";
import { Plus, TV, User } from "../../icons";
import { Logout } from "../../icons/logout";
import { ReactNode } from "react";

const SettingsItem = ({ title, icon }: { title?: string; icon: ReactNode }) => (
  <TouchableOpacity className="flex-row gap-x-[22px] items-center">
    <View className="w-[30px]">{icon}</View>
    <Text className="text-black text-sm font-light font-['outfit']">
      {title}
    </Text>
  </TouchableOpacity>
);

export const SettingsScreen = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  return (
    <SafeAreaView className="flex-1 h-full  ">
      <View className="w-full h-full !pt-[26px] px-[20px] relative ">
        <View className="flex-row  justify-between items-center">
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            className="flex-row  gap-x-2.5 items-center"
          >
            <ChevronLeft />
            <Text className="text-black text-base font-light font-['outfit']">
              Back
            </Text>
          </TouchableOpacity>
          <Text className="text-black text-xl font-normal font-['outfit']">
            Settings
          </Text>
        </View>
        <View className="flex-row justify-between w-full pt-[77px] items-center">
          <View className="flex-row gap-x-[29px] items-center">
            <User />
            <Text className="text-black text-sm font-light font-['outfit']">
              richard.smith@gmail.com
            </Text>
          </View>
          <TouchableOpacity>
            <Logout />
          </TouchableOpacity>
        </View>
        <View className=" flex-col  pt-[27px] gap-y-[27px]">
          <SettingsItem icon={<TV color="#000" />} title="Manage displays" />
          <SettingsItem icon={<Plus color="#000" />} title="Help Center" />
          <SettingsItem icon={<User />} title="Delete this account" />
        </View>
      </View>
    </SafeAreaView>
  );
};
