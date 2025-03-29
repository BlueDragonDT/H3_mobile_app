import { SimpleLineIcons } from "@expo/vector-icons";
import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Animated,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient"; // Correct import for Expo

const ReadMoreText = ({ text }: { text: string }) => {
  const [expanded, setExpanded] = useState(false);
  const [height, setHeight] = useState(new Animated.Value(0));

  const handlePress = () => {
    setExpanded(!expanded);
    Animated.timing(height, {
      toValue: expanded ? 0 : 100,
      duration: 300,
      useNativeDriver: false,
    }).start();
  };

  const shortText = text.split("\n").slice(0, 2).join("\n");
  const fullText = text;

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{shortText}</Text>

      <Animated.View style={{ height: height }}>
        <Text style={styles.text}>{fullText}</Text>
      </Animated.View>

      {!expanded && (
        <LinearGradient
          colors={["transparent", "#000000"]}
          style={styles.gradientOverlay}
        />
      )}

      <TouchableOpacity onPress={handlePress} style={styles.arrowContainer}>
        <View style={{ transform: [{ rotate: expanded ? "180deg" : "0deg" }] }}>
          <SimpleLineIcons size={22} name="arrow-down" color={"#fff"} />
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 10,
    width: "90%",
    alignSelf: "center",
    marginTop: 20,
    position: "relative",
  },
  text: {
    fontSize: 16,
    color: "#fff",
    lineHeight: 24,
    overflow: "hidden",
  },
  arrowContainer: {
    marginTop: 10,
    alignItems: "center",
  },
  gradientOverlay: {
    position: "absolute",
    bottom: 10,
    left: 0,
    right: 0,
    height: "80%",
  },
});

export default ReadMoreText;
