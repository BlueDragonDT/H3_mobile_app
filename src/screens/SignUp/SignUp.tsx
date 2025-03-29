import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { ChevronLeft } from "../../icons/chevron-left";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "../../navigators";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import Input from "../../components/Input/Input";
import { Apple, Email, FaceBook, Google, Lock } from "../../icons";
import Button from "../../components/Button/Button";
import { useState } from "react";
import { Check } from "../../icons/Check";
import { SafeAreaView } from "react-native-safe-area-context";

type FormValue = {
  email: string;
  password: string;
};

export const SignUpScreen = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValue>();

  const [passwordChecks, setPasswordChecks] = useState({
    length: false,
    capital: false,
    special: false,
  });

  const onSubmit: SubmitHandler<FormValue> = (data) => {
    navigation.navigate("WalletConnect");
  };

  const handlePasswordChange = (value: string) => {
    setPasswordChecks({
      length: value.length >= 8,
      capital: /[A-Z]/.test(value),
      special: /[!@#$%^&*(),.?":{}|<>]/.test(value),
    });
  };

  return (
    <SafeAreaView className="flex-1 bg-white">
      <ScrollView className="w-full h-full">
        <View className="px-5 w-full h-full !pt-[26px] ">
          <View className="flex-row justify-between items-start">
            <TouchableOpacity
              onPress={() => navigation.goBack()}
              className="flex-row gap-x-2.5 items-center"
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
            <View />
            <View />
          </View>
          <View className="pt-[55px]">
            <Text className="text-black text-3xl font-normal font-['outfit']">
              Create your account
            </Text>
            <Text className="text-black w-[80%] text-xl mt-[9px] font-light font-['outfit']">
              Please enter a password to start using the app.
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
                  placeholder="Email"
                  leftIcon={<Email className="!text-[#b5b5b5]" />}
                  onChange={field.onChange}
                  value={field.value}
                  errorMessage={errors.email?.message}
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
                    value.length >= 8 ||
                    "Password must be at least 8 characters",
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
                    handlePasswordChange(value);
                  }}
                  placeholder="Create a password"
                  value={field.value}
                  errorMessage={errors.password?.message}
                />
              )}
            />
            <Button onClick={handleSubmit(onSubmit)} text="Continue" />
          </View>
          <View>
            <View className="flex-row w-full items-center gap-x-[13px] pt-[44px] ">
              <View className="w-[45%] h-px bg-[#d9d9d9]" />
              <Text>or</Text>
              <View className="w-[45%] h-px bg-[#d9d9d9]" />
            </View>
          </View>
          <View className="pt-6">
            <Text className="text-black text-center text-xs font-light font-['outfit']">
              Continue via
            </Text>
            <View className="w-full flex-row justify-center gap-x-8 pt-2.5">
              <TouchableOpacity>
                <View>
                  <Apple />
                </View>
              </TouchableOpacity>
              <TouchableOpacity>
                <View>
                  <Google />
                </View>
              </TouchableOpacity>
              <TouchableOpacity>
                <View>
                  <FaceBook />
                </View>
              </TouchableOpacity>
            </View>
          </View>
          <View className="pt-[41px]">
            <Text className="text-black text-xs font-light font-['outfit']">
              Your password must contain at least
            </Text>
            <View className="flex-col gap-y-[6px] pt-[5px]">
              <View className="flex-row items-center gap-x-1">
                <View>
                  <Check
                    stoke={passwordChecks.length ? "#000" : "#b5b5b5"}
                    className="w-[9px] h-[9px] "
                  />
                </View>
                <Text className="text-black text-[10px] font-light font-['outfit']">
                  At least 8 characters
                </Text>
              </View>
              <View className="flex-row items-center gap-x-1">
                <View>
                  <Check
                    stoke={passwordChecks.capital ? "#000" : "#b5b5b5"}
                    className="w-[9px] h-[9px] "
                  />
                </View>
                <Text className="text-black text-[10px] font-light font-['outfit']">
                  1 capital letter
                </Text>
              </View>
              <View className="flex-row items-center gap-x-1">
                <View>
                  <Check
                    stoke={passwordChecks.special ? "#000" : "#b5b5b5"}
                    className="w-[9px] h-[9px] "
                  />
                </View>
                <Text className="text-black text-[10px] font-light font-['outfit']">
                  1 special character
                </Text>
              </View>
            </View>
          </View>
          <View className=" w-full mt-[68px]  mx-auto flex-row justify-center">
            <Text className="text-black w-[70%] text-center text-[10px] font-light font-['outfit']">
              BY USING H-3 YOU AGREE TO OUR TERMS OF USE AND PRIVACY POLICY
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
