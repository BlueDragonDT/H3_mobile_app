import { AntDesign, Entypo, Fontisto } from "@expo/vector-icons";
import {
  Dimensions,
  Image,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { AiPlay } from "../../icons/ai-play";

const ChatItem = ({ title }: { title: string }) => (
  <View style={{ alignItems: "baseline" }}>
    <View className="py-6 px-[23px] bg-[#00000099] flex-row items-center max-w-max flex-shrink-0">
      <Text className="text-[#d9d9d9] text-[11px] font-light font-['outfit']">
        {title}
      </Text>
    </View>
  </View>
);

export const ChatScreen = () => {
  return (
    <SafeAreaView className="flex-1">
      <View className="w-full !h-full relative ">
        <View className="px-[31px] h-[46px] justify-between flex-row items-center border-b border-b-[#ffffff]">
          <Entypo name="chevron-thin-down" color={"#fff"} />
          <View className="flex-row items-center gap-x-[31px]">
            <TouchableOpacity>
              <AntDesign size={20} name="plus" color={"#fff"} />
            </TouchableOpacity>
            <TouchableOpacity className="rotate-90">
              <Fontisto size={20} name="more-v" color={"#fff"} />
            </TouchableOpacity>
          </View>
        </View>
        <View className="flex-row  justify-between items-end px-6 pt-[34px] ">
          <View>
            <Text className="text-white text-4xl font-normal font-['outfit']">
              Welcome to
            </Text>
            <Text className="text-white text-4xl font-normal font-['outfit']">
              H-3 app.
            </Text>
          </View>
          <Image
            className="w-[72px] h-[40px]"
            source={require("../../../assets/images/gemini.png")}
          />
        </View>
        <View className="px-[27px] pt-[17px]">
          <Text className="text-white text-lg font-light font-['outfit']">
            Let Google Gemini guide you
          </Text>
          <View className="w-[80%] mt-[11px] h-px bg-[#717171]" />
        </View>
        <ScrollView className="pb-5">
          <View className="px-6 pt-[34px] flex-col gap-y-[14px] ">
            <ChatItem title="Enter your wallet address" />
            <ChatItem title="Select playlist you like" />
            <ChatItem title="Enter your wallet address" />
            <ChatItem title="Enter your wallet address" />
            <ChatItem title="Enter your wallet address" />
            <ChatItem title="Enter your wallet address" />
            <ChatItem title="Enter your wallet address" />
            <ChatItem title="Enter your wallet address" />
            <ChatItem title="Enter your wallet address" />
            <ChatItem title="Enter your wallet address" />
            <ChatItem title="Enter your wallet address" />
            <ChatItem title="Enter your wallet address" />
          </View>
        </ScrollView>
        <View className="px-6 py-10">
          <View className="h-[43px] flex-row items-center pr-[29px] justify-between pl-[23px] bg-black/60 rounded-sm border border-white">
            <TextInput
              className="h-full text-[#d9d9d9] w-[70%] text-[11px] font-light font-['outfit'] "
              placeholder="Hello! How can I assist you today?"
              placeholderTextColor="#a9a9a9"
            />
            <AiPlay />
          </View>
        </View>
        <Image
          source={require("../../../assets/images/ai-chat-bg.png")}
          className="w-full  absolute left-0 z-[-1]"
        />
      </View>
    </SafeAreaView>
  );
};
