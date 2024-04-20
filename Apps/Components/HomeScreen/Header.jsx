import { View, Text, Image, TextInput } from 'react-native'
import React from 'react'
import { useUser } from '@clerk/clerk-expo'
import { Ionicons } from '@expo/vector-icons';

export default function Header() {
    const { user } = useUser();
    return (
        <View>
            {/* User Info Section  */}

        <View className="flex flex-row items-center gap-2">
            <Image source={{ uri: user?.imageUrl }}
                className="rounded-full w-10 h-10"
            />

            <View>
                <Text className="text-[16px]">Welcome</Text>
                <Text className="text-[20px] font-bold">{user?.fullName}</Text>
            </View>
            </View>
            {/* Search Bar  */}
            <View className="p-[8px] bg-blue-50 px-5 flex flex-row 
            items-center gap-2 mt-4 rounded-full border-[1px] border-blue-400">
            <Ionicons name="search" size={24} color="gray" />
                <TextInput placeholder='Search' 
                className="ml-3 text-[16px]"
                onChangeText={(value)=>console.log(value)}
                />
            </View>

        </View>
    )
}