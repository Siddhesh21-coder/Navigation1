import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import FirstPage from '../1st page';
import Second from '../2nd page';
const Tab = createBottomTabNavigator();

export default function BotTabNav()
{
    return(
    <Tab.Navigator>
        <Tab.Screen name="First" component={FirstPage}  />
        <Tab.Screen name="Second" component={Second} />
        
        
    </Tab.Navigator>
    );

}