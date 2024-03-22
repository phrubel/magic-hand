import React, {useState} from 'react'
import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import Home from '../screens/Home'
import Welcome from '../screens/Welcome'
import Splash from '../screens/Splash'

const Stack = createNativeStackNavigator()

const AppNavigation = () => {
   const [showSplash, setShowSplash] = useState(true)

   if (showSplash) {
      return <Splash setShowSplash={setShowSplash} />
   }
   return (
      <NavigationContainer>
         <Stack.Navigator
            initialRouteName="Welcome"
            screenOptions={{headerShown: false}}>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Welcome" component={Welcome} />
         </Stack.Navigator>
      </NavigationContainer>
   )
}

export default AppNavigation
