import {Image, View} from 'react-native'
import React, {useEffect} from 'react'
// responsive for all devices
import {
   widthPercentageToDP as wp,
   heightPercentageToDP as hp,
} from 'react-native-responsive-screen'
import {images} from '../../assets/images/images'

const Splash = ({setShowSplash = () => {}}) => {
   useEffect(() => {
      setTimeout(() => {
         setShowSplash(false)
      }, 2000)
   }, [])

   return (
      <View className="flex-1 bg-white justify-center items-center">
         <Image
            source={images.welcome}
            style={{width: wp(75), height: wp(75)}}
         />
      </View>
   )
}

export default Splash
