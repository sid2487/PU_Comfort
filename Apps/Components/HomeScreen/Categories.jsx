import { View, Text, FlatList, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import {useNavigation} from '@react-navigation/native'

export default function Categories({categoryList}) {

  const navigation = useNavigation();
  return (
    <View className="mt-3" >
      <Text className="font-bold text-[20px]" >Categories</Text>
      <FlatList 
        data={categoryList} // adjust the no of images which u want to show in the column
        numColumns={2}
        renderItem={({item,index})=>(
          <TouchableOpacity 
          onPress={()=>navigation.navigate('item-list',{
            category:item.name
          })}
          className="flex-1 items-center 
           justify-center p-2 border-[1px] border-blue-200 
           m-1 h-[80px] rounded-lg bg-blue-50">
            <Image source={{uri:item.icon}} 
            className="w-[70px] h-[70px]"
            />
            <Text style={{fontSize: 12, marginTop: -14,}} >{item.name}</Text>
             </TouchableOpacity> 
        )}
      />
    </View> 
  )
}
