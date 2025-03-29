import React, { ReactNode, useRef, useState } from "react";
import {
  FlatList,
  View,
  Dimensions,
  StyleSheet,
  ListRenderItemInfo,
  Text,
  TouchableOpacity,
} from "react-native";
import { Video, ResizeMode } from "expo-av";
import Button from "../../components/Button/Button";
import { TvPhone } from "../../icons/tv-pgone";
import { Basket, Like, More, NoSound, Plus, Sound, User } from "../../icons";
import { SafeAreaView } from "react-native-safe-area-context";
import { AntDesign, EvilIcons } from "@expo/vector-icons";
import { TVPhone2 } from "../../icons/tv-phone-2";
import { AddList } from "../../icons/add-list";
import { BottomSheetModal } from "@gorhom/bottom-sheet";
import { BaseBottomSheet } from "../../components";

const videos = [
  require("../../../assets/videos/home-video.mp4"),
  require("../../../assets/videos/home-video.mp4"),
  require("../../../assets/videos/home-video.mp4"),
  require("../../../assets/videos/home-video.mp4"),
];

const IconShare = ({ title, icon }: { title?: string; icon: ReactNode }) => (
  <TouchableOpacity className="flex-row gap-x-[13px] items-center">
    <View>{icon}</View>
    <Text className="text-[#d9d9d9] text-base font-light font-['outfit']">
      {title}
    </Text>
  </TouchableOpacity>
);

export const VideoScreen: React.FC = () => {
  const mediaRefs = useRef<Record<number, Video | null>>({});
  const [mutedStates, setMutedStates] = useState<Record<number, boolean>>({});

  const toggleMute = (index: number) => {
    setMutedStates((prev) => {
      const newState = { ...prev, [index]: !prev[index] };
      const videoRef = mediaRefs.current[index];
      if (videoRef) {
        videoRef.setIsMutedAsync(newState[index] || false);
      }
      return newState;
    });
  };

  const onViewableItemsChanged = useRef(
    ({
      changed,
    }: {
      changed: Array<{ item: number; index: number; isViewable: boolean }>;
    }) => {
      changed.forEach(async ({ index, isViewable }) => {
        const videoRef = mediaRefs.current[index];
        if (videoRef) {
          if (isViewable) {
            try {
              await videoRef.playAsync();
            } catch (error) {
              console.error("Error playing video:", error);
            }
          } else {
            try {
              await videoRef.stopAsync();
            } catch (error) {
              console.error("Error stopping video:", error);
            }
          }
        }
      });
    }
  );
  const bottomSheetRef = useRef<BottomSheetModal>(null);

  const renderItem = ({ item, index }: ListRenderItemInfo<number>) => {
    const isMuted = mutedStates[index] || false;

    return (
      <SafeAreaView style={styles.videoContainer} className="relative">
        <Video
          ref={(ref) => (mediaRefs.current[index] = ref)}
          source={item}
          style={styles.video}
          resizeMode={ResizeMode.COVER}
          shouldPlay={false}
          isLooping
          isMuted={isMuted}
        />
        <View className="w-full flex-row px-[30px] items-center absolute top-[60px] justify-between">
          <View></View>
          <Text className="text-white text-sm font-light font-['outfit']">
            Microcosm by Hugo Johnson...
          </Text>
          <TouchableOpacity onPress={() => toggleMute(index)}>
            {isMuted ? <NoSound /> : <Sound />}
          </TouchableOpacity>
        </View>
        <View style={styles.buttonContainer}>
          <View className="w-full h-[155px] pb-[29px] flex-row justify-between items-end">
            <View className="h-full flex-row items-end">
              <View>
                <Text className="text-white text-4xl font-normal font-['outfit'] leading-[35px]">
                  Microcosm
                </Text>
                <Text className="text-white text-base font-light font-['outfit']">
                  Hugo Johnson & Jean Claude Ades
                </Text>
              </View>
            </View>
            <View className=" flex-col justify-start pb-3 items-center">
              <TouchableOpacity className="mb-[32px]">
                <Like />
              </TouchableOpacity>
              <TouchableOpacity className="mb-[28px]">
                <Basket />
              </TouchableOpacity>
              <TouchableOpacity className="pb-[31px]">
                <Plus />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => bottomSheetRef.current?.present()}
              >
                <More />
              </TouchableOpacity>
            </View>
          </View>

          <Button
            className="!justify-center py-[18px] flow-row w-full items-center rounded-md"
            text={
              <View className="flex-row  justify-center  gap-x-4 items-center">
                <TvPhone />
                <Text className="text-white text-[20px] font-normal font-['outfit']">
                  Play on Screen
                </Text>
              </View>
            }
            isCenter={false}
          />
        </View>
      </SafeAreaView>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={videos}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
        pagingEnabled
        onViewableItemsChanged={onViewableItemsChanged.current as any}
        viewabilityConfig={{ itemVisiblePercentThreshold: 50 }}
      />
      <BaseBottomSheet bottomSheetRef={bottomSheetRef} snap="100%">
        <View style={styles.bottomSheetContent}>
          <View className="flex-row justify-between px-[45px] pt-[45px] w-full items-center">
            <TouchableOpacity>
              <EvilIcons name="chevron-down" size={20} color={"#fff"} />
            </TouchableOpacity>
            <Text className="text-white text-sm font-light font-['outfit']">
              Microcosm by Hugo Johnson
            </Text>
            <View />
          </View>
          <View className="px-[48px] flex-col gap-y-[14px] pt-[91px]">
            <IconShare
              title="View Artist Page"
              icon={<User stoke={"#fff"} width={13} height={13} />}
            />
            <IconShare
              title="Play on Screen"
              icon={<TVPhone2 width={13} height={13} />}
            />
            <IconShare
              title="Add to Favorites"
              icon={<Like color={"#fff"} width={13} height={13} />}
            />
            <IconShare
              title="Buy"
              icon={<Basket color={"#fff"} width={13} height={13} />}
            />
            <IconShare
              title="Add to Playback Queue"
              icon={<AddList color={"#fff"} width={13} height={13} />}
            />
            <IconShare
              title="Add to Playlist"
              icon={<Plus color={"#fff"} width={13} height={13} />}
            />
            <IconShare
              title="Share"
              icon={
                <AntDesign
                  name="upload"
                  color={"#fff"}
                  width={13}
                  height={13}
                />
              }
            />
          </View>
        </View>
      </BaseBottomSheet>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
  },
  videoContainer: {
    height: Dimensions.get("screen").height,
    justifyContent: "center",
    alignItems: "center",
  },
  video: {
    width: "100%",
    height: "100%",
  },
  buttonContainer: {
    position: "absolute",
    bottom: 39,
    width: "100%",
    left: 0,
    paddingHorizontal: 34,
    zIndex: 10,
  },
  bottomSheetContent: {
    padding: 0,
    backgroundColor: "#000",
    height: "100%",
  },
  bottomSheetText: {
    color: "white",
    fontSize: 16,
  },
});
