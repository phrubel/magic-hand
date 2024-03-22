import {
   View,
   Text,
   SafeAreaView,
   Image,
   ScrollView,
   TouchableOpacity,
} from 'react-native'
import React, {useEffect, useState} from 'react'
// responsive for all devices
import {
   widthPercentageToDP as wp,
   heightPercentageToDP as hp,
} from 'react-native-responsive-screen'
// react native voice
import Voice from '@react-native-voice/voice'
// import Voice from '@react-native-community/voice'
import Features from '../components/Features'
import {images} from '../../assets/images/images'
import {dummyMsg} from '../constants/dummyMeassage'

const Home = () => {
   const [message, setMessage] = useState(dummyMsg)
   const [recording, setRecording] = useState(false)
   const [speaking, setSpeaking] = useState(true)
   const [result, setResult] = useState('')

   // all speech handler
   const speechStartHandler = e => {
      console.log('speech start', e)
   }
   const speechEndHandler = e => {
      setRecording(false)
      console.log('speech end', e)
   }
   const speechResultsHandler = e => {
      console.log('speech results', e)
      const text = e.value[0]
      setResult(text)
   }
   const speechErrorHandler = e => {
      console.log('speech error', e)
   }

   // start recording handler
   const startRecording = async () => {
      setRecording(true)
      try {
         // voice start
         await Voice.start('en-Us')
         console.log('>>>>>>>>>>>>>Hellow')
      } catch (error) {
         console.log('voice start error', error)
      }
   }

   // stop recording handler
   const stopRecording = async () => {
      try {
         // voice stop
         await Voice.stop()
         setRecording(false)
         // if fetch error
      } catch (error) {
         console.log('voice stop error', error)
      }
   }

   const clear = () => {
      setMessage([])
   }

   // const stop = () => {
   //    setSpeaking(false)
   // }

   useEffect(() => {
      // voice handler event
      Voice.onSpeechStart = speechStartHandler
      Voice.onSpeechEnd = speechEndHandler
      Voice.onSpeechResults = speechResultsHandler
      Voice.onSpeechError = speechErrorHandler

      return () => {
         // destroy voice instants
         Voice.destroy().then(Voice.removeAllListeners)
      }
   }, [])

   // useEffect(() => {
   //    Voice.onSpeechStart = onSpeechStart
   //    Voice.onSpeechEnd = onSpeechEnd
   //    Voice.onSpeechResults = onSpeechResults

   //    // voice destroy instants
   //    return () => {
   //       Voice.destroy().then(Voice.removeAllListeners)
   //    }
   // }, [])

   // const onSpeechStart = e => {
   //    console.log('start', e)
   // }
   // const onSpeechEnd = e => {
   //    setRecording(false)
   //    console.log('start', e)
   // }
   // const onSpeechResults = e => {
   //    console.log('start', e)
   //    setResult(e.value)
   // }

   // const startRecording = async () => {
   //    setRecording(true)
   //    try {
   //       await Voice.start('en-US')
   //    } catch (error) {
   //       console.log('voice start Error', error)
   //    }
   // }
   // const stopRecording = async () => {
   //    try {
   //       await Voice.stop()
   //       await Voice.destroy()
   //       setRecording(false)
   //    } catch (error) {
   //       console.log('voice start Error', error)
   //    }
   // }

   return (
      <View className="flex-1 bg-white">
         <SafeAreaView className="flex-1 flex mx-5">
            {/* icon area */}
            <View className="flex flex-row justify-center">
               <Image
                  source={images.welcome1}
                  style={{height: hp(15), width: hp(15)}}
               />
            </View>

            {/* {Message area} */}
            {message.length > 0 ? (
               <View className="space-y-2 flex-1">
                  <Text
                     className="ml-1 font-semibold text-slate-700"
                     style={{fontSize: wp(5)}}>
                     Assistance
                  </Text>

                  {/* msg box */}
                  <View
                     className="p-4 rounded-2xl bg-gray-200"
                     style={{height: hp(65)}}>
                     {/* scroll view with msg box */}
                     <ScrollView
                        bounces={false}
                        showsVerticalScrollIndicator={false}
                        className="space-y-4">
                        {message.map((msg, index) => {
                           if (msg.role === 'assistance') {
                              if (msg.content.includes('https')) {
                                 // if an ai image msg
                                 return (
                                    <View
                                       key={index}
                                       className="flex-row justify-start">
                                       <View className="flex p-2 rounded-2xl rounded-tl-none bg-rose-100">
                                          <Image
                                             source={{uri: msg.content}}
                                             className="rounded-md"
                                             resizeMode="cover"
                                             style={{
                                                height: wp(60),
                                                width: wp(60),
                                             }}
                                          />
                                       </View>
                                    </View>
                                 )
                              } else {
                                 return (
                                    <View
                                       key={index}
                                       style={{width: wp(70)}}
                                       className="bg-green-100 rounded-xl p-2 rounded-tl-none">
                                       <Text>{msg.content}</Text>
                                    </View>
                                 )
                              }
                           } else {
                              // user input
                              return (
                                 <View
                                    key={index}
                                    className="flex-row justify-end">
                                    <View
                                       style={{width: wp(70)}}
                                       className="bg-slate-50 rounded-xl p-2 rounded-tr-none">
                                       <Text>{msg.content}</Text>
                                    </View>
                                 </View>
                              )
                           }
                        })}
                     </ScrollView>
                  </View>
               </View>
            ) : (
               <Features />
            )}

            {/* Recording audio and give text response*/}
            <View className="flex justify-center items-center">
               {recording ? (
                  <TouchableOpacity
                     // stop recording button
                     onPress={() => {
                        stopRecording()
                     }}>
                     <Image
                        style={{height: hp(10), width: hp(10)}}
                        className="rounded-full mb-3"
                        source={images.voiceGif}
                     />
                  </TouchableOpacity>
               ) : (
                  <TouchableOpacity
                     // start voice recording
                     onPress={() => {
                        startRecording()
                     }}>
                     <Image
                        style={{height: hp(10), width: hp(10)}}
                        className="rounded-full mb-3"
                        source={images.recordIcon}
                     />
                  </TouchableOpacity>
               )}

               {/* clear button */}
               {message.length > 0 && (
                  <TouchableOpacity
                     onPress={clear}
                     className="rounded-2xl bg-black p-2 px-3 absolute right-10">
                     <Text className="text-white font-semibold">Clear</Text>
                  </TouchableOpacity>
               )}
               {/* Stop button */}
               {speaking && (
                  <TouchableOpacity
                     onPress={stopRecording}
                     className="rounded-2xl bg-red-500 p-2 px-3 absolute left-10">
                     <Text className="text-white font-semibold">Stop</Text>
                  </TouchableOpacity>
               )}
            </View>
         </SafeAreaView>
      </View>
   )
}

export default Home
