

import React from 'react';
import { StyleSheet, Text, View,Image,Button, TextInput,TouchableOpacity, Dimensions } from 'react-native';

export default function FirstPage( {navigation} ) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>First Screen</Text>
      <Button
        title="Previous Page"
        onPress={() => navigation.navigate('Second')}
      />
      <Text style={{fontSize: 20, color: 'black',fontWeight: 'bold'}} > Navigator </Text>
     
    </View>
  );
}

