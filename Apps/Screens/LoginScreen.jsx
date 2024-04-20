import { View, Text, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import * as WebBrowser from "expo-web-browser";
import { useWarmUpBrowser } from '../../hooks/useWarmUpBrowser';
import { useOAuth } from '@clerk/clerk-expo';

WebBrowser.maybeCompleteAuthSession();
export default function LoginScreen() {
    useWarmUpBrowser();
 
    const { startOAuthFlow } = useOAuth({ strategy: "oauth_google" });
    const onPress = React.useCallback(async () => {
        try {
          const { createdSessionId, signIn, signUp, setActive } =
            await startOAuthFlow();
     
          if (createdSessionId) {
            setActive({ session: createdSessionId });
          } else {
            // Use signIn or signUp for next steps such as MFA
          }
        } catch (err) {
          console.error("OAuth error", err);
        }
      }, []);
  return (
    <View>
      <Image source={require('./../../assets/images/blacklogo.png')} 
      className="w-full h-[500px] object-cover"
      />

      <View className="p-12 bg-white mt-[-180px] rounded-t-3xl shadow-md">
        <Text className="text-[26px] font-bold">Community Marketplace</Text>
        <Text className="text-[18px] text-slate-500 mt-5">Buy and Sell second hand bikes, bicycles, gadgets and other important stuffs inside the campus!!</Text>
        <TouchableOpacity onPress={onPress} className="p-4 bg-blue-500 rounded-full mt-10 ">
            <Text className="text-white text-center text-[18px]">Get Started</Text> 
        </TouchableOpacity>    
      </View>

    </View>
  )
}