import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { useAuth, useUser } from '@clerk/clerk-expo'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import cart from './../../assets/images/cart.png'
import logout from './../../assets/images/logout.png'
import search from './../../assets/images/search.png'
import profile from './../../assets/images/profile.png'
import { FlatList } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native'

export default function ProfileScreen() {

  const {user}=useUser();
  const navigation=useNavigation();
  const { isLoaded,signOut } = useAuth();

  const menuList=[
    {
      id:1,
      name:'My Products',
      icon:cart,
      path:'my-product'
    },
    {
      id:2,
      name:'Explore',
      icon:search,
      path:'explore'
    },
    {
      id:3,
      name:'Sid',
      icon:profile,
      url:''
    },
    {
      id:4,
      name:'Logout',
      icon:logout
    },

  ];

  // console.log('Menu List:', menuList);
  const onMenuPress=(item)=>{
    if(item.name=='Logout'){
      signOut();
      return;
    }
      item?.path?navigation.navigate(item.path):null;
  }
  return ( 
    <GestureHandlerRootView> 
    <View className="p-5 bg-white">
     <View className="items-center mt-14">
     <Image source={{uri:user?.imageUrl}} 
        className="w-[50px] h-[50px] rounded-full items-center"
      />
      <Text className="font-bold text-[25px] mt-2">{user?.fullName}</Text>
      <Text className="text-[16px] mt-2 text-gray-500">{user?.primaryEmailAddress?.emailAddress}</Text>
     </View>

      <FlatList 
      data={menuList}
      numColumns={3}
      style={{marginTop:20}}
      renderItem={({item,index})=>(
        <TouchableOpacity 
        onPress={()=>onMenuPress(item)}
        className="flex-1 p-1 border-[1px] items-center m-2 rounded-lg border-blue-400 bg-blue-50">
          {item.icon&& <Image source={item?.icon}
            className="w-[50] h-[50px]"
          />}
          <Text className="text-[12px] mt-2 text-blue-600 font-bold ">{item.name}</Text>
        </TouchableOpacity>
      )}
      />

    </View>
    </GestureHandlerRootView>
  )
}