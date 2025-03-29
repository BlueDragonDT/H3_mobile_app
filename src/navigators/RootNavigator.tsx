import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  AboutScreen,
  ChatScreen,
  CollectorScreen,
  CurationScreen,
  Discover,
  MyAeaScreen,
  ScanQRScreen,
  SearchScreen,
  SelectWalletsScreen,
  SignInScreen,
  SignUpScreen,
  VideoScreen,
  WalletConnectScreen,
  WalletSettingsScreen,
  WellComeScreen,
} from "../screens";
import { Text } from "react-native";
import { Home } from "../icons/home";
import { HomeOutline } from "../icons/home-outline";
import { SearchOutline } from "../icons/search-outline";
import { MyArea } from "../icons/my-area";
import { MyAreaOutline } from "../icons/my-area-outline";
import { AiChat } from "../icons/ai-chat";
import { SearchTab } from "../icons/search-tab";
import { SettingsScreen } from "../screens/Settings/Settings";

export type RootStackParamList = {
  WellCome: undefined;
  About: undefined;
  Collector: undefined;
  CreateAccount: undefined;
  SignIn: undefined;
  SignUp: undefined;
  WalletConnect: undefined;
  SelectWallets: undefined;
  WalletSettings: undefined;
  Curation: undefined;
  HomeTabs: undefined;
  Video: undefined;
  Scan: undefined;
  Settings: undefined;
};

export type BottomTabParamList = {
  Discover: undefined;
  Search: undefined;
  ["My Area"]: undefined;
  AI: undefined;
};

const tabLabelStyle = (focused: boolean) => ({
  fontSize: 10,
  fontWeight: focused ? "500" : "400",
  color: focused ? "#000" : "#717171",
  marginTop: 8,
});

const TabLabel = ({ focused, label }: { focused: boolean; label: string }) => {
  return (
    <Text
      style={{
        fontSize: 10,
        fontWeight: focused ? "500" : "400",
        color: focused ? "#000" : "#717171",
        marginTop: 8,
      }}
    >
      {label}
    </Text>
  );
};

const Stack = createStackNavigator<RootStackParamList>();
const Tab = createBottomTabNavigator<BottomTabParamList>();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarStyle: {
          backgroundColor: "#fff",
          paddingBottom: 40,
          paddingTop: 17,
          height: 100,
          borderTopColor: "#000",
          borderTopWidth: 1,
        },
        tabBarActiveTintColor: "#000",

        tabBarInactiveTintColor: "#717171",
        tabBarIcon: ({ focused }) => {
          let iconSource;
          const iconWH = {
            w: 0,
            h: 0,
          };

          if (route.name === "Discover") {
            iconSource = focused ? <Home /> : <HomeOutline />;
            iconWH.w = 21;
            iconWH.h = 20;
          } else if (route.name === "Search") {
            iconSource = focused ? (
              <SearchTab className="w-[21px] h-[20px] " />
            ) : (
              <SearchOutline className="w-[21px] h-[20px] " />
            );
            iconWH.w = 21;
            iconWH.h = 20;
          } else if (route.name === "My Area") {
            iconSource = focused ? <MyArea /> : <MyAreaOutline />;
            iconWH.w = 19;
            iconWH.h = 18;
          } else if (route.name === "AI") {
            iconSource = focused ? <AiChat color="#000" /> : <AiChat />;
            iconWH.w = 30;
            iconWH.h = 25;
          }

          return iconSource;
        },
        tabBarLabelStyle: {
          fontSize: 10,
          marginTop: 8,
        },
      })}
    >
      <Tab.Screen
        name="Discover"
        component={Discover}
        options={{
          tabBarLabel: ({ focused }) => (
            <TabLabel label={"Discover"} focused={focused} />
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={SearchScreen}
        options={{
          tabBarLabel: ({ focused }) => (
            <TabLabel label={"Search"} focused={focused} />
          ),
        }}
      />
      <Tab.Screen
        name="My Area"
        component={MyAeaScreen}
        options={{
          tabBarLabel: ({ focused }) => (
            <TabLabel label={"My Area"} focused={focused} />
          ),
        }}
      />
      <Tab.Screen
        name="AI"
        component={ChatScreen}
        options={{
          tabBarLabel: ({ focused }) => (
            <TabLabel label={"AI"} focused={focused} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const RootNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="WellCome" component={WellComeScreen} />
        <Stack.Screen name="About" component={AboutScreen} />
        <Stack.Screen name="Collector" component={CollectorScreen} />
        <Stack.Screen name="CreateAccount" component={CollectorScreen} />
        <Stack.Screen name="SignIn" component={SignInScreen} />
        <Stack.Screen name="SignUp" component={SignUpScreen} />
        <Stack.Screen name="WalletConnect" component={WalletConnectScreen} />
        <Stack.Screen name="SelectWallets" component={SelectWalletsScreen} />
        <Stack.Screen name="WalletSettings" component={WalletSettingsScreen} />
        <Stack.Screen name="Curation" component={CurationScreen} />
        <Stack.Screen name="Video" component={VideoScreen} />
        <Stack.Screen name="Scan" component={ScanQRScreen} />
        <Stack.Screen name="Settings" component={SettingsScreen} />
        <Stack.Screen name="HomeTabs" component={BottomTabNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;
