import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { Basket, Like, Plus } from "../../../icons";

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
];

const Card = ({ item }: any) => (
  <View style={styles.card}>
    <Image
      style={styles.cardImage}
      source={item.image}
      className="rounded-sm"
    />
    <View className="flex-col w-full pt-[5px] items-start">
      <Text className="text-black text-xs font-normal font-['outfit']">
        {item.text}
      </Text>
      <Text className="text-black text-[8px] font-normal font-['outfit']">
        {item.name}
      </Text>
    </View>
    <View className="flex-row gap-x-[15px] pt-[8px] justify-start w-full">
      <TouchableOpacity>
        <Like width={15} height={14} color="#000000" />
      </TouchableOpacity>
      <TouchableOpacity>
        <Basket color="#000000" width={15} height={13} />
      </TouchableOpacity>
      <TouchableOpacity>
        <Plus color="#000000" width={13} height={13} />
      </TouchableOpacity>
    </View>
  </View>
);

export const Artworks = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={ARTWORKS}
        renderItem={Card}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2}
        columnWrapperStyle={styles.row}
        contentContainerStyle={styles.flatListContainer}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22,
  },
  card: {
    width: "48%",
    margin: "1%",
    padding: 10,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 34,
  },
  cardImage: {
    height: 153,
    width: "100%",
  },
  iconContainer: {
    flexDirection: "row",
    paddingTop: 8,
    width: "100%",
    justifyContent: "space-between",
  },
  row: {
    justifyContent: "space-between",
  },
  flatListContainer: {
    paddingHorizontal: 10,
  },
});
