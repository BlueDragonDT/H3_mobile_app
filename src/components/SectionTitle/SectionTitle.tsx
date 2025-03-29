import { Text, View } from "react-native";

export const SectionTitle = ({ title }: { title: string }) => (
  <View>
    <Text className="text-black text-3xl font-normal font-['outfit']">
      {title}
    </Text>
  </View>
);
