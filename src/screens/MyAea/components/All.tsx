import { AntDesign, EvilIcons } from "@expo/vector-icons";
import { ReactNode, useRef } from "react";
import {
  FlatList,
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Job, Like, More, Plus, TV } from "../../../icons";
import { MyArea } from "../../../icons/my-area";
import { TVPhone2 } from "../../../icons/tv-phone-2";
import { BottomSheetModal } from "@gorhom/bottom-sheet";
import { BaseBottomSheet } from "../../../components";
import { MoreRow } from "../../../icons/more-row";
import ReadMoreText from "../../../components/ReadMore/ReadMore";

const ARTWORKS = [
  {
    id: 1,
    name: "Microcosm",
    text: "Hugo Johnson & Jean Claude Ades",
    image: require("../../../../assets/images/1-artworks.png"),
  },
  {
    id: 2,
    name: "Tree of Life",
    text: "Joseph Klibansky",
    image: require("../../../../assets/images/2-artworks.png"),
  },
  {
    id: 3,
    name: "Bohem-IA-XL1}",
    text: "Agoria",
    image: require("../../../../assets/images/3-artworks.png"),
  },
  {
    id: 4,
    name: "Body Machine",
    text: "Sougwen Chung",
    image: require("../../../../assets/images/4-artworks.png"),
  },
  {
    id: 5,
    name: "Microcosm",
    text: "Hugo Johnson & Jean Claude Ades",
    image: require("../../../../assets/images/1-artworks.png"),
  },
  {
    id: 6,
    name: "Tree of Life",
    text: "Joseph Klibansky",
    image: require("../../../../assets/images/2-artworks.png"),
  },
];

const WorkRender = ({ item }: any) => (
  <View className="w-full flex-row items-center justify-between mt-[13px]">
    <View className="flex-row items-center gap-x-2.5">
      <AntDesign name="checkcircle" color={"#fff"} size={24} />
      <View>
        <Image source={item.image} className="w-[76px] h-[38px] border" />
      </View>
      <View>
        <Text className="text-white text-[11px] font-normal font-['outfit'] ">
          {item.name}
        </Text>
        <Text className="text-white text-[8px] font-light font-['outfit']">
          {item.text}
        </Text>
      </View>
    </View>
    <TouchableOpacity>
      <View className="h-[3px] bg-white w-[15px]" />
      <View className="h-[3px] mt-1 bg-white w-[15px]" />
    </TouchableOpacity>
  </View>
);

const IconItem = ({ title, icon }: { title: string; icon: ReactNode }) => (
  <TouchableOpacity className="flex-row pt-[30px] px-[29px] pb-[18px] justify-between items-center w-full border-b border-b-black">
    <View className="flex-row gap-x-[27px] items-center">
      <View>{icon}</View>
      <Text className="text-black text-sm font-light font-['outfit']">
        {title}
      </Text>
    </View>
    <View>
      <EvilIcons name="chevron-right" size={20} />
    </View>
  </TouchableOpacity>
);

export const All = () => {
  const bottomSheetRef = useRef<BottomSheetModal>(null);

  return (
    <View>
      <View>
        <IconItem icon={<TV color="#000" />} title="Add Display" />
        <IconItem icon={<Like color="#000" />} title="My Collection" />
        <View className="pt-[29px] px-[29px] flex-row items-center  justify-between pb-[15px]">
          <View className="flex-row  gap-x-[27px] items-center">
            <View>
              <MyArea />
            </View>
            <Text className="text-black text-sm font-light font-['outfit']">
              Collect
            </Text>
          </View>
          <TouchableOpacity className="flex-row items-center">
            <Text className="text-black text-[10px] font-light font-['outfit']">
              Show All
            </Text>
            <EvilIcons name="chevron-right" size={20} />
          </TouchableOpacity>
        </View>
        <ScrollView horizontal className="flex-row relative gap-x-[6px]">
          <View className="mr-[6px]">
            <Image
              className="w-[143px] h-[143px]"
              source={require("../../../../assets/images//my-area-01.png")}
            />
          </View>
          <View className="flex-col gap-y-[6px]">
            <Image
              className="w-[144px] h-[72px]"
              source={require("../../../../assets/images//my-area-02.png")}
            />

            <Image
              className="w-[144px] h-[65px]"
              source={require("../../../../assets/images//my-area-03.png")}
            />
          </View>
          <View className=" relative ml-[6px]">
            <Image
              className="w-[144px] h-[143px]"
              source={require("../../../../assets/images//my-area-04.png")}
            />
            <TouchableOpacity
              onPress={() => bottomSheetRef.current?.present()}
              className="absolute flex-row justify-center items-center right-[23px] bottom-[8px] w-[41px] h-[41px] bg-black"
            >
              <TVPhone2 width={20} height={20} />
            </TouchableOpacity>
          </View>
          <View className="mr-[6px]">
            <Image
              className="w-[143px] h-[143px]"
              source={require("../../../../assets/images//my-area-01.png")}
            />
          </View>
          <View className="flex-col gap-y-[6px]">
            <Image
              className="w-[144px] h-[72px]"
              source={require("../../../../assets/images//my-area-02.png")}
            />

            <Image
              className="w-[144px] h-[65px]"
              source={require("../../../../assets/images//my-area-03.png")}
            />
          </View>
          <View className="ml-[6px]">
            <Image
              className="w-[144px] h-[143px]"
              source={require("../../../../assets/images//my-area-04.png")}
            />
            <TouchableOpacity
              onPress={() => bottomSheetRef.current?.present()}
              className="absolute flex-row justify-center items-center right-[23px] bottom-[8px] w-[41px] h-[41px] bg-black"
            >
              <TVPhone2 width={20} height={20} />
            </TouchableOpacity>
          </View>
        </ScrollView>
        <IconItem icon={<Job color="#000" />} title="BID" />
      </View>
      <BaseBottomSheet bottomSheetRef={bottomSheetRef} snap="100%">
        <View className="flex-1 !p-0">
          <View className=" pl-[45px] pr-[34px] !w-full flex-row justify-between pt-[45px] items-center">
            <TouchableOpacity onPress={() => bottomSheetRef.current?.close()}>
              <EvilIcons name="chevron-down" size={28} color={"#fff"} />
            </TouchableOpacity>
            <Text className="text-white text-sm font-light font-['outfit']">
              Now Playing: Mobile Player
            </Text>
            <TVPhone2 width={29} height={18} />
          </View>
          <View className="pt-2.5 w-full p-0 ">
            <Image
              className="w-full h-[210px]"
              source={require("../../../../assets/images/01.png")}
            />
          </View>
          <View className="w-full pr-10 pt-1 pl-[52px] flex-row justify-between items-center">
            <View>
              <Text className="text-white text-[25px] font-normal  leading-[25px]">
                Body Machine
              </Text>
              <Text className="text-[#d9d9d9] text-base font-light font-['outfit']">
                Sougwen Chung
              </Text>
            </View>
            <TouchableOpacity>
              <MoreRow />
            </TouchableOpacity>
          </View>
          <View className="w-full h-px bg-white mt-[17px] " />
          <View>
            <ReadMoreText text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation." />
          </View>
          <View className="w-full flex-row justify-between pt-[21px] pl-[52px] pr-[43px]">
            <View>
              <Text className="text-white text-sm font-light font-['outfit']">
                Playback Queue
              </Text>
              <Text className="text-[#d9d9d9] text-[11px] font-light font-['outfit']">
                Playlist (3 Artworks)
              </Text>
            </View>
            <TouchableOpacity>
              <MoreRow />
            </TouchableOpacity>
          </View>
          <View className="pl-[52px] pr-[43px]">
            <FlatList
              data={ARTWORKS}
              renderItem={WorkRender}
              keyExtractor={(item) => item.id.toString()}
            />
          </View>
        </View>
      </BaseBottomSheet>
    </View>
  );
};
