import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import Home from '../screens/home'
import EditTaskDetails from '../screens/editTaskDetails'

const Stack = createStackNavigator()

export default Navigator = () => {
  return (
    <NavigationContainer initialRouteName='Home'>
      <Stack.Navigator>
        <Stack.Screen 
            name='Home' 
            component={Home} 
            options={{ title: 'Task List', 
                       headerTitleAlign: 'center',
                       headerStyle: { backgroundColor: '#019'}
                       }} />
        <Stack.Screen 
            name='EditTaskDetails' 
            component={EditTaskDetails} 
            options={{ title: 'Task List', 
                       headerTitleAlign: 'center',
                       headerStyle: { backgroundColor: '#019'}        
                       }} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
