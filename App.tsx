import '@walletconnect/react-native-compat'
import './global.css'
import RootNavigator from './src/navigators/RootNavigator'
import { useFonts } from 'expo-font'
import { WalletConnectModal } from '@walletconnect/modal-react-native'
import React from 'react'
import { BottomSheetModalProvider } from '@gorhom/bottom-sheet'
import { GestureHandlerRootView } from 'react-native-gesture-handler'

const projectId = '872370d091ed29ab09dd07221819d83d'

const providerMetadata = {
  name: 'Modal with UProvider',
  description: 'RN example using Universal Provider by Reown',
  url: 'https://reown.com/appkit',
  icons: ['https://avatars.githubusercontent.com/u/179229932'],
  redirect: {
    native: 'wcmuprovidersample://',
  },
}

export default function App() {
  let [fontsLoaded] = useFonts({
    outfit: require('./assets/fonts/Outfit-Regular.ttf'),
  })

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <BottomSheetModalProvider>
        <RootNavigator />
        <WalletConnectModal
          projectId={projectId}
          providerMetadata={providerMetadata}
        />
      </BottomSheetModalProvider>
    </GestureHandlerRootView>
  )
}
