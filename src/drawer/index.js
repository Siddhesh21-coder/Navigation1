import React from 'react';
import 'react-native-gesture-handler';
import {createDrawerNavigator} from '@react-navigation/drawer';
import FirstPage from '../1st page';
import S2 from '../n1';
const Drawer = createDrawerNavigator();

export default function DrawNav()
{
    return(
    <Drawer.Navigator>
        <Drawer.Screen name="First" component={FirstPage}  />
        <Drawer.Screen name="Second" component={S2} />
        
        
    </Drawer.Navigator>
    );

}