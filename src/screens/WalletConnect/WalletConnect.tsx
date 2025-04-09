import {
  Alert,
  Image,
  Linking,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { ChevronLeft } from '../../icons/chevron-left';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../../navigators';
import Button from '../../components/Button/Button';
import { useWalletConnectModal } from '@walletconnect/modal-react-native';
import { useEffect } from 'react';

export const WalletConnectScreen = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const { open, isConnected, address, provider } = useWalletConnectModal();

  const handleButtonPress = async () => {
    if (isConnected) {
      return provider?.disconnect();
    }
    return open();
  };

  const handleCheckout = async () => {
    const projectId = process.env.NEXT_PUBLIC_CLIENT_API_KEY; // Replace with your actual project ID if not using env variables
    const checkoutUrl = `https://www.crossmint.io/checkout?projectId=${projectId}`;
    const supported = await Linking.canOpenURL(checkoutUrl);
  
    if (supported) {
      await Linking.openURL(checkoutUrl);
    } else {
      Alert.alert("Error", "Cannot open Crossmint URL");
    }
  };
  
  useEffect(() => {
    if (isConnected) {
      navigation.navigate('SelectWallets');
    }
  }, [isConnected]);

  return (
    <SafeAreaView className="flex-1 bg-white">
      <View className="px-5 w-full h-full !pt-[26px] relative">
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
              source={require('../../../assets/images/logo.png')}
              className="!w-[100.35px] !h-[59px]"
            />
          </View>
        </View>
        <View className="w-full h-full flex-col justify-start pt-[185px]">
          <View>
            <Text className="text-black text-3xl font-normal font-['outfit']">
              Wallet Connect
            </Text>
          </View>
          <View>
            <Button
              leftIcon={
                <Image
                  source={require('../../../assets/images/Walletconnect-logo 1.png')}
                  className="!w-[26px] !h-[26px]"
                />
              }
              text="WalletConnect"
              isCenter={false}
              className="mt-[19px]"
              onClick={handleButtonPress}
            />
            <Button
              leftIcon={
                <Image
                  source={require('../../../assets/images/MetaMask_Fox.svg 1.png')}
                  className="!w-[26px] !h-[26px]"
                />
              }
              className="mt-[7px]"
              isCenter={false}
              text="Metamask"
              onClick={handleButtonPress}
            />
            <Button
            leftIcon={
              <Image
                source={require('../../../assets/images/crossmint.png')}
                className="!w-[26px] !h-[26px]"
              />
            }
              text="CrossMint"
              isCenter={true}
              className="mt-[19px]"
              onClick={handleCheckout}
            />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};
