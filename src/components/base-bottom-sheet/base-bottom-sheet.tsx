import {
  BottomSheetBackdrop,
  BottomSheetModal,
  BottomSheetScrollView,
} from "@gorhom/bottom-sheet";
import { BottomSheetBackdropProps } from "@gorhom/bottom-sheet/lib/typescript/components/bottomSheetBackdrop/types";

import { PropsWithChildren, useCallback } from "react";
import { StatusBar } from "react-native";

type BottomSheetProps = {
  bottomSheetRef: React.RefObject<BottomSheetModal>;
  snap?: string;
} & PropsWithChildren<unknown>;

export const BaseBottomSheet = ({
  bottomSheetRef,
  children,
  snap = "45%",
}: BottomSheetProps) => {
  const snapPoints = [snap];
  const renderBackdrop = useCallback(
    (props: BottomSheetBackdropProps) => (
      <BottomSheetBackdrop
        {...props}
        disappearsOnIndex={-1}
        appearsOnIndex={0}
      />
    ),
    []
  );
  return (
    <>
      <StatusBar backgroundColor={"transparent"} translucent={true} />
      <BottomSheetModal
        backgroundStyle={{
          backgroundColor: "#000",
          borderRadius: 0,
          padding: 0,
        }}
        ref={bottomSheetRef}
        index={0}
        snapPoints={snapPoints}
        backdropComponent={renderBackdrop}
      >
        <BottomSheetScrollView style={{ padding: 0 }}>
          {children}
        </BottomSheetScrollView>
      </BottomSheetModal>
    </>
  );
};
