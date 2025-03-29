import { Image, Text, TouchableOpacity, View } from "react-native";
import { QR, Settings, TV } from "../../icons";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "../../navigators";
import { SafeAreaView } from "react-native-safe-area-context";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { useRef } from "react";
import { BottomSheetRefProps } from "../../components";
import BottomSheet from "../../components/BaseBottomSheet/BaseBottomSheet";

export const Discover = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  const refBottomSheet = useRef<BottomSheetRefProps>(null);

  const triggerBottomSheet = () => {
    const isActive = refBottomSheet?.current?.isActive?.();

    if (isActive) {
      refBottomSheet?.current?.scrollTo?.(0);
    } else {
      refBottomSheet?.current?.scrollTo?.(-400);
    }
  };

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaView className="flex-1 h-full  ">
        <View className="w-full h-full relative ">
          <View className="px-[29px] items-center flex-row justify-between pt-[50px]">
            <Image
              className="w-[84.35px] h-[53.22px]"
              source={require("../../../assets/images/light-logo.png")}
            />
            <View className="flex-row gap-x-6">
              <TouchableOpacity>
                <View>
                  <TV />
                </View>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigation.navigate("Scan")}>
                <View>
                  <QR />
                </View>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigation.navigate("Settings")}>
                <View>
                  <Settings />
                </View>
              </TouchableOpacity>
            </View>
          </View>
          <TouchableOpacity
            onPress={() => navigation.navigate("Video")}
            className="px-[29px] w-full h-full flex-col justify-between pb-[124px] pt-[52px]"
          >
            <Text className="text-white text-4xl font-normal font-['outfit']">
              Featured Artworks
            </Text>
            <View>
              <Text className="text-white text-4xl font-normal font-['outfit'] leading-[35px]">
                Microcosm
              </Text>
              <Text className="text-white text-base font-light font-['outfit']">
                Hugo Johnson & Jean Claude Ades
              </Text>
            </View>
          </TouchableOpacity>
          <Image
            source={require("../../../assets/images/discover.png")}
            className="w-full  absolute left-0 z-[-1]"
          />
        </View>
      </SafeAreaView>

      <BottomSheet ref={refBottomSheet}>
        <View>
          {Array.from(Array(5)).map((val, key) => {
            return (
              <View key={key}>
                <View>
                  <Text>Hari Irawan</Text>
                  <Text>087666673246</Text>
                </View>
              </View>
            );
          })}
        </View>
      </BottomSheet>
    </GestureHandlerRootView>
  );
};
