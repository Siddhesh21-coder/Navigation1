import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import FirstPage from '../src/1st page';
import Second from '../src/2nd page';
const Stack = createNativeStackNavigator();

export default function RootStackNav()
{
    return(
    <Stack.Navigator>
        <Stack.Screen name="First" component={FirstPage}  />
        <Stack.Screen name="Second" component={Second} />
        
        
    </Stack.Navigator>
    );

}