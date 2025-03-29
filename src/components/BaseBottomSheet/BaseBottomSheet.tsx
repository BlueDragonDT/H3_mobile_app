import React, { forwardRef, useCallback, useImperativeHandle } from "react";
import { Dimensions, StyleSheet, View, TouchableOpacity } from "react-native";
import { Gesture, GestureDetector } from "react-native-gesture-handler";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";

const { height: SCREEN_HEIGHT } = Dimensions.get("window");

export type BottomSheetRefProps = {
  scrollTo?: (destination: number) => void;
  isActive?: () => boolean;
};

type BottomSheetProps = {
  children?: React.ReactNode;
};

const BottomSheet = forwardRef<BottomSheetRefProps, BottomSheetProps>(
  (props, ref) => {
    const translationY = useSharedValue(SCREEN_HEIGHT);
    const translationBackdrop = useSharedValue(SCREEN_HEIGHT);

    const context = useSharedValue({ y: 0 });
    const active = useSharedValue(false);

    const gesture = Gesture.Pan()
      .onStart((_) => {
        context.value = { y: translationY.value };
      })
      .onUpdate((event) => {
        translationY.value = event.translationY + context.value.y;
        translationY.value = Math.max(translationY.value, -SCREEN_HEIGHT + 100); // Prevent dragging beyond a certain limit
      })
      .onEnd(() => {
        // If the bottom sheet is dragged halfway or more, it should stay open
        if (translationY.value < -SCREEN_HEIGHT / 2) {
          active.value = true;
          translationY.value = withSpring(-SCREEN_HEIGHT, { damping: 50 });
          translationBackdrop.value = withSpring(0, { damping: 60 });
        } else {
          active.value = false;
          translationY.value = withSpring(SCREEN_HEIGHT, { damping: 50 });
          translationBackdrop.value = withSpring(SCREEN_HEIGHT, {
            damping: 60,
          });
        }
      });

    const bottomSheetStyle = useAnimatedStyle(() => {
      return {
        transform: [{ translateY: translationY.value }],
      };
    });

    // No animation for the overlay
    const overlayStyle = useAnimatedStyle(() => {
      return {
        transform: [{ translateY: translationBackdrop.value }],
      };
    });

    const scrollTo = useCallback((destination: number) => {
      active.value = destination !== 0;
      translationY.value = withSpring(destination, { damping: 50 });
      translationBackdrop.value = withSpring(
        destination === 0 ? SCREEN_HEIGHT : 0,
        { damping: 60 }
      );
    }, []);

    const isActive = useCallback(() => {
      return active.value;
    }, []);

    useImperativeHandle(ref, () => ({ scrollTo, isActive }), [
      scrollTo,
      isActive,
    ]);

    const closeBottomSheet = () => {
      active.value = false;
      translationY.value = withSpring(SCREEN_HEIGHT, { damping: 50 });
      translationBackdrop.value = withSpring(SCREEN_HEIGHT, { damping: 60 });
    };

    return (
      <Animated.View style={[styles.overlay, overlayStyle]}>
        <TouchableOpacity style={styles.overlay} onPress={closeBottomSheet} />
        <GestureDetector gesture={gesture}>
          <Animated.View
            style={[styles.containerBottomSheet, bottomSheetStyle]}
          >
            <View>{props.children}</View>
          </Animated.View>
        </GestureDetector>
      </Animated.View>
    );
  }
);

const styles = StyleSheet.create({
  containerBottomSheet: {
    height: SCREEN_HEIGHT,
    width: "100%",
    position: "absolute",
    top: SCREEN_HEIGHT,
    backgroundColor: "white",
    borderRadius: 0,
  },
  overlay: {
    height: SCREEN_HEIGHT,
    width: "100%",
    position: "absolute",
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
});

export default BottomSheet;
