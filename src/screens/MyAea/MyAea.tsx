import React, { useRef, useState } from "react";
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
import { All } from "./components/All";
import { MyCollection } from "./components/MyCollection";
import BottomSheet, {
  BottomSheetRefProps,
} from "../../components/BaseBottomSheet/BaseBottomSheet";

const TabContent = ({ title }: { title: string }) => (
  <View style={[styles.scene]}>
    <Text style={styles.tabContent}>{title}</Text>
  </View>
);

export const MyAeaScreen = () => {
  const layout = useWindowDimensions();

  const moreBottomSheetRef = useRef<BottomSheetRefProps>(null);

  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: "all", title: "All" },
    { key: "my_collection", title: "My Collection" },
    { key: "collect", title: "Collect" },
    { key: "BID", title: "BID" },
  ]);

  const renderScene = SceneMap({
    all: () => <All />,
    my_collection: () => <MyCollection />,
    collect: () => <TabContent title="Catalogues Content" />,
    BID: () => <TabContent title="Catalogues Content" />,
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
      <Header title="My Area" />
      <View className="px-[29px] pt-[13px] flex-row items-center gap-x-[17px]">
        <View className="w-[39px] h-[39px] bg-[#d9d9d9] rounded-full"></View>
        <View>
          <Text className="text-black text-xs font-light font-['outfit']">
            Richard Smith
          </Text>
          <Text className="text-[#717171] text-[10px] font-light font-['outfit']">
            Art enthusiast
          </Text>
        </View>
      </View>
      <TabView
        navigationState={{ index, routes }}
        renderScene={renderScene}
        renderTabBar={renderTabBar}
        onIndexChange={setIndex}
        initialLayout={{ width: layout.width }}
        style={styles.tabView}
      />
      <BottomSheet ref={moreBottomSheetRef}>
        <View style={styles.bottomSheetContent}></View>
      </BottomSheet>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    height: Dimensions.get("screen").height,
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
    paddingHorizontal: 8,
  },
  tabStyle: {
    justifyContent: "center",
    paddingHorizontal: 4,
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
  bottomSheetContent: {
    padding: 0,
    backgroundColor: "#000",
    height: "100%",
  },
});
