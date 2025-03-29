import React, { useState } from "react";
import {
  Text,
  useWindowDimensions,
  View,
  StyleSheet,
  Dimensions,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { SceneMap, TabBar, TabView } from "react-native-tab-view";
import { Header } from "../../components/Header";
import Input from "../../components/Input/Input";
import { Search } from "../../icons";
import { Overview } from "./components/Overview";
import { Artworks } from "./components/Artworks";
import { Events } from "./components/Events";

const TabContent = ({ title }: { title: string }) => (
  <View style={[styles.scene]}>
    <Text style={styles.tabContent}>{title}</Text>
  </View>
);

export const SearchScreen = () => {
  const layout = useWindowDimensions();

  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: "overview", title: "Overview" },
    { key: "artworks", title: "Artworks" },
    { key: "events", title: "Events" },
    { key: "catalogues", title: "Catalogues" },
    { key: "members", title: "Members" },
  ]);

  const renderScene = SceneMap({
    overview: () => <Overview />,
    artworks: () => <Artworks />,
    events: () => <Events />,
    catalogues: () => <TabContent title="Catalogues Content" />,
    members: () => <TabContent title="Members Content" />,
  });

  const renderTabBar = (props: any) => (
    <TabBar
      {...props}
      activeColor="#000"
      inactiveColor="#717171"
      indicatorStyle={styles.tabIndicator}
      style={styles.tabBar}
      renderLabel={({ route, focused }: any) => (
        <Text
          style={[
            styles.tabLabel,
            {
              fontWeight: focused ? "600" : "300",
              color: focused ? "#000" : "#717171",
            },
          ]}
          numberOfLines={1}
        >
          {route.title}
        </Text>
      )}
      tabStyle={styles.tabStyle}
      scrollEnabled={true}
    />
  );

  return (
    <SafeAreaView style={styles.safeArea}>
      <Header title="Search" />
      <View style={styles.inputContainer}>
        <Input
          placeholder="Search Artworks, Genres, Members"
          leftIcon={<Search />}
        />
      </View>
      <TabView
        navigationState={{ index, routes }}
        renderScene={renderScene}
        renderTabBar={renderTabBar}
        onIndexChange={setIndex}
        initialLayout={{ width: layout.width }}
        style={styles.tabView}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    height: Dimensions.get("screen").height,
    backgroundColor: "white",
  },
  inputContainer: {
    paddingHorizontal: 20,
    paddingTop: 10,
  },
  tabBar: {
    backgroundColor: "transparent",
    elevation: 0,
    shadowOpacity: 0,
    height: 38,
  },
  tabIndicator: {
    backgroundColor: "#000",
    height: 2,
    borderRadius: 1,
  },
  tabLabel: {
    fontFamily: "outfit",
    fontSize: 12,
    textAlign: "center",
    paddingHorizontal: 10,
  },
  tabStyle: {
    width: 100,
    justifyContent: "center",
    paddingHorizontal: 6,
  },
  scene: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "gray",
    paddingHorizontal: 20,
  },
  tabContent: {
    fontSize: 14,
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
  },
  tabView: {
    flex: 1,
    height: Dimensions.get("screen").height,
  },
});
