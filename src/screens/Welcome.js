import {View, Text, Image, TouchableOpacity} from 'react-native'
import React from 'react'
import {SafeAreaView} from 'react-native-safe-area-context'
// responsive for all devices
import {
   widthPercentageToDP as wp,
   heightPercentageToDP as hp,
} from 'react-native-responsive-screen'
import {useNavigation} from '@react-navigation/native'
import {images} from '../../assets/images/images'

const Welcome = () => {
   const navigation = useNavigation()

   return (
      <SafeAreaView className="flex-1 flex justify-around bg-white">
         <View className="space-y-2 mt-16">
            <Text
               style={{fontSize: wp(10)}}
               className="text-center font-bold text-sky-500">
               Ask Buddy
            </Text>
            <Text
               style={{fontSize: wp(4)}}
               className="text-center tracking-wider font-serif text-slate-900 ">
               Your Genius Buddy here, know your all answer.
            </Text>
         </View>
         {/* image area */}
         <View className="flex-row justify-center ">
            <Image
               source={images.welcome1}
               style={{width: wp(75), height: wp(75)}}
            />
         </View>

         {/* Button */}
         <TouchableOpacity
            onPress={() => navigation.navigate('Home')}
            className="bg-sky-500 mx-3 p-3 rounded-2xl">
            <Text
               style={{fontSize: wp(7)}}
               className="text-center font-bold text-white">
               Get Started
            </Text>
         </TouchableOpacity>
      </SafeAreaView>
   )
}

export default Welcome
