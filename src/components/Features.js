import {View, Text, Image} from 'react-native'
import React from 'react'
import {
   widthPercentageToDP as wp,
   heightPercentageToDP as hp,
} from 'react-native-responsive-screen'
import {images} from '../../assets/images/images'

const Features = () => {
   return (
      <View className="space-y-4" style={{height: hp(60)}}>
         <Text
            className="font-semibold text-slate-700"
            style={{fontSize: wp(5.5)}}>
            Features
         </Text>

         {/* features Area */}
         <View className="space-y-2 rounded-xl p-4 bg-cyan-300">
            <View className="space-x-1 items-center flex-row">
               <Image
                  source={images.chatgpt}
                  style={{height: hp(4), width: hp(4)}}
               />
               <Text
                  style={{fontSize: wp(4.8)}}
                  className="font-semibold text-slate-700">
                  Chatgpt
               </Text>
            </View>
            <Text
               style={{fontSize: wp(3.8)}}
               className="font-medium text-slate-900">
               ChatGPT is a free-to-use AI system. Use it for engaging
               conversations, gain insights, automate tasks, and witness the
               future of AI, all in one place.
            </Text>
         </View>

         {/* Dall-E */}
         <View className="space-y-2 rounded-xl p-4 bg-orange-200">
            <View className="space-x-1 items-center flex-row">
               <Image
                  source={images.dallE}
                  style={{height: hp(4.5), width: hp(4.5)}}
               />
               <Text
                  style={{fontSize: wp(4.8)}}
                  className="font-semibold text-slate-700">
                  Dall-E
               </Text>
            </View>
            <Text
               style={{fontSize: wp(3.8)}}
               className="font-medium text-slate-900">
               DALL·E 2 is an AI system that can create realistic images and art
               from a description in natural language.
            </Text>
         </View>

         {/* smart Ai */}
         <View className="space-y-2 rounded-xl p-4 bg-green-300">
            <View className="space-x-1 items-center flex-row">
               <Image
                  source={images.smartAi}
                  style={{height: hp(4.5), width: hp(4.5)}}
               />
               <Text
                  style={{fontSize: wp(4.8)}}
                  className="font-semibold text-slate-700">
                  Smart AI
               </Text>
            </View>
            <Text
               style={{fontSize: wp(3.8)}}
               className="font-medium text-slate-900">
               Smart AI is an advanced form of artificial intelligence that
               utilizes sophisticated algorithms, machine learning techniques,
               and data-driven insights to enhance..
            </Text>
         </View>
      </View>
   )
}

export default Features
