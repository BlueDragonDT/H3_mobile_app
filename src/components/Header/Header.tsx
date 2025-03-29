import { Text, TouchableOpacity, View } from "react-native";
import { QR, Settings, TV } from "../../icons";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "../../navigators";

export const Header = ({ title }: { title: string }) => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  return (
    <View className="pt-[55px] items-center px-[29px] flex-row justify-between ">
      <Text className="text-black text-4xl font-normal font-['outfit']">
        {title}
      </Text>
      <View className="flex-row  gap-x-6">
        <TouchableOpacity>
          <View>
            <TV color="#000" />
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Scan")}>
          <View>
            <QR color="#000" />
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Settings")}>
          <View>
            <Settings color="#000" />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};
