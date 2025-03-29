import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { TvPhone } from "../../../icons/tv-pgone";

const EVENTS = [
  {
    id: 1,
    name: "Winds of Yawanawa",
    text: "Yawanawa & Refik Anadol",
    image: require("../../../../assets/images/1-events.png"),
  },
  {
    id: 2,
    name: "Frequencies",
    text: "Collaboration between Klsr + Rodriguez",
    image: require("../../../../assets/images/2-events.png"),
  },
  {
    id: 3,
    name: "Summer",
    text: "Collaboration between Klsr + Rodriguez",
    image: require("../../../../assets/images/3-events.png"),
  },
];

const Card = ({ item }: any) => (
  <TouchableOpacity style={styles.card}>
    <Image style={styles.cardImage} source={item.image} />
    <View style={styles.cardContent}>
      <View>
        <Text style={styles.cardTitle}>{item.name}</Text>
        <Text style={styles.cardSubtitle}>{item.text}</Text>
      </View>
      <TouchableOpacity>
        <TvPhone color="#000" />
      </TouchableOpacity>
    </View>
  </TouchableOpacity>
);

export const Events = () => {
  return (
    <FlatList
      contentContainerStyle={styles.container}
      data={EVENTS}
      renderItem={Card}
      keyExtractor={(item) => item.id.toString()}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    paddingHorizontal: 27,
    paddingTop: 23,
    paddingBottom: 20,
  },
  card: {
    width: "100%",
    borderRadius: 2,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 30,
  },
  cardImage: {
    width: "100%",
    height: 163,
    marginBottom: 12,
    borderRadius: 2,
  },
  cardContent: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
  },
  cardTitle: {
    color: "#000",
    fontFamily: "outfit",
    fontSize: 12,
    fontStyle: "normal",
    fontWeight: "400",
  },
  cardSubtitle: {
    color: "#000",
    fontFamily: "outfit",
    fontSize: 8,
    fontStyle: "normal",
    fontWeight: "400",
  },
});
