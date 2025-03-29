import React, { useRef } from "react";
import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  Dimensions,
  StyleSheet,
  ViewStyle,
  FlatList,
} from "react-native";
import { Basket, Like } from "../../../icons";
import { EvilIcons, Fontisto } from "@expo/vector-icons";
import { Upload } from "../../../icons/upload";
import { BaseBottomSheet } from "../../../components";
import { BottomSheetModal } from "@gorhom/bottom-sheet";
import { Share2 } from "../../../icons/share-2";

export const ARTWORKS = [
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

const Card = ({
  title,
  icon,
  image,
  onPress,
}: {
  title: string;
  icon: React.ReactNode;
  image?: any;
  onPress?: any;
}) => {
  return (
    <View className="w-[48%] ">
      {image && (
        <Image className="w-full !h-[163px] rounded-sm" source={image} />
      )}
      {!image && (
        <TouchableOpacity
          onPress={onPress}
          className="w-full !h-[163px] flex-row justify-center  items-center bg-[#d9d9d9]"
        >
          <Fontisto name="plus-a" size={25} color="#717171" />
        </TouchableOpacity>
      )}
      <View className="flex-row justify-between pt-[7px] w-full items-center">
        <Text className="text-black text-sm font-light font-['outfit']">
          {title}
        </Text>
        <TouchableOpacity>{icon}</TouchableOpacity>
      </View>
    </View>
  );
};

const BottomCard = ({ item }: any) => (
  <View className="flex-row mt-[51px] justify-between items-end !gap-x-[17px] !w-full ">
    <View className="w-[45%]">
      <Image className="w-full h-[107px]" source={item.image} />
    </View>
    <View className="w-1/2">
      <Text className="text-white text-[11px] font-normal font-['outfit']">
        {item?.name}
      </Text>
      <Text className="text-white text-[8px] font-light font-['outfit']">
        {item?.text}
      </Text>
    </View>
  </View>
);

export const MyCollection = () => {
  const bottomSheetRef = useRef<BottomSheetModal>(null);

  return (
    <ScrollView
      contentContainerStyle={{ paddingHorizontal: 29, paddingTop: 54 }}
    >
      <View className="w-full gap-y-[53px] justify-center gap-x-3 flex-wrap flex-row">
        <Card
          title="Purchased"
          icon={<Basket color="#000" width={14} height={13} />}
          image={require("../../../../assets/images/1-generes.png")}
        />
        <Card
          title="Favorites"
          icon={<Like color="#000" width={15} height={14} />}
          onPress={() => bottomSheetRef.current?.present()}
        />
        <Card
          title="Purchased"
          icon={<Upload />}
          onPress={() => bottomSheetRef.current?.present()}
        />
        <Card
          title="Favorites"
          icon={<Upload />}
          onPress={() => bottomSheetRef.current?.present()}
        />
      </View>
      <BaseBottomSheet bottomSheetRef={bottomSheetRef} snap="100%">
        <View>
          <View className="flex-row  justify-between pt-[45px] px-[45px] w-full items-center">
            <TouchableOpacity onPress={() => bottomSheetRef.current?.close()}>
              <EvilIcons name="chevron-down" size={30} color={"#fff"} />
            </TouchableOpacity>
            <TouchableOpacity>
              <Share2 />
            </TouchableOpacity>
          </View>
          <View className="pt-[77px] px-[52px]">
            <Text className="text-white  text-3xl font-normal font-['outfit']">
              Purchased
            </Text>
            <Text className="text-white mt-[7px] w-[90%] text-sm font-light font-['outfit']">
              This collection contains all of your purchased artworks.
            </Text>
            <Text className="text-white text-sm font-light mt-[38px] font-['outfit']">
              10 Artworks
            </Text>
          </View>
          <View className="px-[56px]">
            <FlatList
              contentContainerStyle={{ flexGrow: 1 }}
              data={ARTWORKS}
              renderItem={BottomCard}
              keyExtractor={(item) => item.id.toString()}
            />
          </View>
        </View>
      </BaseBottomSheet>
    </ScrollView>
  );
};
