import React from "react";
import {
  Text,
  TouchableOpacity,
  View,
  Image,
  ScrollView,
  StyleSheet,
  FlatList,
} from "react-native";
import { SectionTitle } from "../../../components/SectionTitle";
import { EvilIcons } from "@expo/vector-icons";

const MOODS = [
  {
    id: 1,
    title: "Energic",
    imageUrl: require("../../../../assets/images/1-moods.png"),
  },
  {
    id: 2,
    title: "Minimalist",
    imageUrl: require("../../../../assets/images/2-moods.png"),
  },
  {
    id: 3,
    title: "Abstract",
    imageUrl: require("../../../../assets/images/3-moods.png"),
  },
];

const GENERES = [
  {
    id: 1,
    title: "Nature",
    imageUrl: require("../../../../assets/images/1-generes.png"),
  },
  {
    id: 2,
    title: "Abstract",
    imageUrl: require("../../../../assets/images/2-generes.png"),
  },
  {
    id: 3,
    title: "Urban",
    imageUrl: require("../../../../assets/images/2-generes.png"),
  },
];

const renderCard = ({ item, imageUrl }: any) => {
  return (
    <View style={styles.card}>
      <Image source={item?.imageUrl} style={styles.cardImage} />
      <View className="flex-row w-full justify-start">
        <Text className="text-black text-xs font-normal text-start font-['outfit']">
          {item.title}
        </Text>
      </View>
    </View>
  );
};

export const Overview = () => (
  <ScrollView contentContainerStyle={styles.container}>
    <View style={styles.sectionContainer}>
      <SectionTitle title="Moods & Moments" />
      <View style={styles.textContainer}>
        <Text style={styles.text}>
          Artcasts to fit your style, mood, or space
        </Text>
        <TouchableOpacity style={styles.showAllButton}>
          <Text style={styles.showAllText}>Show All</Text>
          <EvilIcons name="chevron-right" size={20} />
        </TouchableOpacity>
      </View>
    </View>

    <View style={styles.scrollContainer}>
      <FlatList
        data={MOODS}
        horizontal
        renderItem={renderCard}
        keyExtractor={(item) => item.id.toString()}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scrollView}
      />
    </View>

    <View style={styles.sectionContainer}>
      <SectionTitle title="Genres and Styles" />
      <View style={styles.textContainer}>
        <Text style={styles.text}>Browse by artistic genres</Text>
        <TouchableOpacity style={styles.showAllButton}>
          <Text style={styles.showAllText}>Show All</Text>
          <EvilIcons name="chevron-right" size={20} />
        </TouchableOpacity>
      </View>
    </View>

    <View style={styles.scrollContainer}>
      <FlatList
        data={GENERES}
        horizontal
        renderItem={renderCard}
        keyExtractor={(item) => item.id.toString()}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scrollView}
      />
    </View>

    <View style={styles.sectionContainer}>
      <SectionTitle title="Media Types" />
      <View style={styles.textContainer}>
        <Text style={styles.text}>
          Browse by video art, moving image or stills
        </Text>
        <TouchableOpacity style={styles.showAllButton}>
          <Text style={styles.showAllText}>Show All</Text>
          <EvilIcons name="chevron-right" size={20} />
        </TouchableOpacity>
      </View>
    </View>

    <View style={styles.scrollContainer}>
      <FlatList
        data={GENERES}
        horizontal
        renderItem={renderCard}
        keyExtractor={(item) => item.id.toString()}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scrollView}
      />
    </View>
  </ScrollView>
);

const styles = StyleSheet.create({
  container: {
    paddingTop: 48,
    paddingBottom: 20,
    paddingHorizontal: 29,
  },
  sectionContainer: {
    marginBottom: 20,
  },
  textContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  text: {
    color: "black",
    fontSize: 12,
    fontWeight: "300",
    fontFamily: "outfit",
  },
  showAllButton: {
    flexDirection: "row",
    alignItems: "center",
  },
  showAllText: {
    color: "black",
    fontSize: 10,
    fontWeight: "300",
    fontFamily: "outfit",
  },
  scrollContainer: {
    paddingVertical: 16,
  },
  scrollView: {
    paddingLeft: 0,
  },
  card: {
    marginRight: 16,
    width: 150,
    height: 130,
    overflow: "hidden",
    alignItems: "center",
  },
  cardImage: {
    width: "100%",
    height: 100,
  },
  cardTitle: {
    padding: 8,
    fontSize: 14,
    fontWeight: "500",
    color: "black",
    fontFamily: "outfit",
  },
});
