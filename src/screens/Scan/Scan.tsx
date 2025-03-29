import {
  Dimensions,
  Image,
  Modal,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ChevronLeft } from "../../icons/chevron-left";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "../../navigators";
import Button from "../../components/Button/Button";
import { QR } from "../../icons";
import { useState } from "react";

const { width, height } = Dimensions.get("window");

const ListItem = ({
  title,
  subTitle,
  count,
}: {
  title?: string;
  subTitle: string;
  count: number;
}) => (
  <View className="flex-row gap-x-3 items-start">
    <View className="w-[25px] flex-row items-center justify-center h-[25px] border border-black">
      <Text>{count}</Text>
    </View>
    <View className="pt-px ">
      <Text className="ext-black text-base font-medium font-['outfit']">
        {title}
      </Text>
      <Text className="text-black text-sm font-light font-['outfit']">
        {subTitle}
      </Text>
    </View>
  </View>
);

export const ScanQRScreen = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const [isVisible, setIsVisible] = useState(false);

  return (
    <SafeAreaView className="flex-1 h-full  ">
      <View className="px-5 w-full h-full !pt-[26px] relative">
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
            Pair Using QR Scan
          </Text>
        </View>
        <View className="pt-[28px]">
          <Image
            className="w-[302px] h-[167px] mx-auto "
            source={require("../../../assets/images/tv-qr.png")}
          />
        </View>
        <View className="flex-col pt-[46px] gap-y-[33px]">
          <ListItem
            count={1}
            title="Find TV App"
            subTitle="Search for “HOFA App” in your TV App Store."
          />
          <ListItem
            count={2}
            title="Install"
            subTitle="Download and install the app on your display."
          />
          <ListItem
            count={3}
            title="Pair"
            subTitle="On your display, open the HOFA App, select
“Pair Screen” and follow the on-screen
instructions."
          />
          <ListItem
            count={4}
            title="Enjoy Art"
            subTitle="Start streaming art on your screen."
          />
        </View>
        <View className="pt-[84px]">
          <Text className="text-[#717171] text-center underline text-base font-light font-['outfit']">
            Or Pair with ID & Code
          </Text>
          <Button
            onClick={() => setIsVisible(true)}
            className="!justify-center mt-[21px] py-[18px] flow-row w-full items-center rounded-md"
            text={
              <View className="flex-row  justify-center  gap-x-4 items-center">
                <QR />
                <Text className="text-white text-[20px] font-normal font-['outfit']">
                  Play on Screen
                </Text>
              </View>
            }
            isCenter={false}
          />
        </View>
      </View>

      <Modal
        animationType="fade"
        transparent={true}
        visible={isVisible}
        onRequestClose={() => setIsVisible(false)}
      >
        <TouchableOpacity
          style={styles.overlay}
          activeOpacity={1}
          onPress={() => setIsVisible(false)}
        />

        <View style={styles.dialogContainer}>
          <View className="w-full bg-black py-3 flex-row justify-center ">
            <Text className="text-white text-sm font-light font-['outfit']">
              SCAN QR CODE
            </Text>
          </View>
          <View className="pt-[6px]">
            <Text className="ext-black text-center text-[22px] font-medium font-['outfit']">
              Pair using QR
            </Text>
            <View className="pt-[50px] pb-[52px] flex-row justify-center">
              <Image source={require("../../../assets/images/qr.png")} />
            </View>
            <View className="px-[22px] pb-[14px]">
              <Button onClick={() => setIsVisible(false)} text="Close" />
            </View>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f0f0f0",
  },
  openButton: {
    backgroundColor: "#6200ee",
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
  buttonText: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "bold",
  },
  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    width: width,
    height: height,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  dialogContainer: {
    position: "absolute",
    bottom: 50,
    left: "48%",
    transform: [{ translateX: -width * 0.5 + 20 }],
    marginHorizontal: 20,
    backgroundColor: "#ffffff",
    borderRadius: 2,
    elevation: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 2,
    width: "85%",
  },

  dialogTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "center",
  },
  dialogMessage: {
    fontSize: 14,
    color: "#333",
    marginBottom: 20,
    textAlign: "center",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "center",
  },
  closeButton: {
    backgroundColor: "#d32f2f",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
});
