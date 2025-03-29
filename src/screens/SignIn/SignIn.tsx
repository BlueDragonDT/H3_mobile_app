import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { ChevronLeft } from "../../icons/chevron-left";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "../../navigators";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import Input from "../../components/Input/Input";
import { Apple, Email, FaceBook, Google, Lock } from "../../icons";
import Button from "../../components/Button/Button";
import { SafeAreaView } from "react-native-safe-area-context";

type FormValue = {
  email: string;
  password: string;
};

export const SignInScreen = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  const {
    control,
    handleSubmit,
    formState: { errors, isValid },
    watch,
  } = useForm<FormValue>();

  const onSubmit: SubmitHandler<FormValue> = () => {
    navigation.navigate("WalletConnect");
  };

  return (
    <SafeAreaView className="flex-1 bg-white ">
      <View className="px-5 w-full h-full !pt-[26px] relative">
        <View className="flex-row justify-between items-start">
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            className="flex-row  gap-x-2.5 items-center"
          >
            <ChevronLeft />
            <Text className="text-black text-base font-light font-['outfit']">
              Back
            </Text>
          </TouchableOpacity>
          <View className="ml-6">
            <Image
              source={require("../../../assets/images/logo.png")}
              className="!w-[100.35] !h-[59px]"
            />
          </View>
          <View></View>
          <View></View>
        </View>
        <View className="pt-[110px]">
          <Text className="text-black text-3xl font-normal font-['outfit']">
            Welcome to H-3
          </Text>
          <Text className="text-black text-xl mt-[9px] font-light font-['outfit']">
            To log in or create an account, please enter your email address.
          </Text>
        </View>
        <View className="flex-col gap-y-[29px] pt-[29px]">
          <Controller
            control={control}
            name="email"
            rules={{
              required: "Email is required",
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                message: "Invalid email address",
              },
            }}
            render={({ field }) => (
              <Input
                leftIcon={<Email className="!text-[#b5b5b5]" />}
                onChange={field.onChange}
                value={field.value}
                errorMessage={errors.email?.message}
                placeholder="Email"
              />
            )}
          />
          <Controller
            control={control}
            name="password"
            rules={{
              required: "Password is required",
              validate: {
                length: (value) =>
                  value.length >= 8 || "Password must be at least 8 characters",
                capital: (value) =>
                  /[A-Z]/.test(value) ||
                  "Password must include at least one capital letter",
                special: (value) =>
                  /[!@#$%^&*(),.?":{}|<>]/.test(value) ||
                  "Password must include at least one special character",
              },
            }}
            render={({ field }) => (
              <Input
                leftIcon={<Lock className="!text-[#b5b5b5]" />}
                onChange={(value) => {
                  field.onChange(value);
                }}
                placeholder="Create a password"
                value={field.value}
                errorMessage={errors.password?.message}
              />
            )}
          />

          <Button onClick={handleSubmit(onSubmit)} text="Continue" />
        </View>
        <View className="pt-10 flex-col gap-y-[19px]">
          <View className="flex-row items-center gap-x-[7px]">
            <View>
              <Text className="text-black text-xs font-light font-['outfit']">
                Forgot password?
              </Text>
            </View>
            <TouchableOpacity>
              <Text className="text-black text-xs !font-bold ">Reset Here</Text>
            </TouchableOpacity>
          </View>
          <View className="flex-row items-center gap-x-[7px]">
            <View>
              <Text className="text-black text-xs font-light font-['outfit']">
                Don’t have an account?
              </Text>
            </View>
            <TouchableOpacity onPress={() => navigation.navigate("SignUp")}>
              <Text
                style={{ fontWeight: "500" }}
                className="text-black text-xs  !font-bold  "
              >
                Sign up Here
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View className="pt-[200px] w-full flex-row justify-center">
          <Text className="text-black w-[70%] text-center text-[10px] font-light font-['outfit']">
            BY USING H-3 YOU AGREE TO OUR TERMS OF USE AND PRIVACY POLICY
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};
