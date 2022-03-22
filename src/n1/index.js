
import React from 'react';
import { StyleSheet, Text, View,Image,Button, TextInput,TouchableOpacity, Dimensions } from 'react-native';

export default function S2( {navigation}) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Second Screen</Text>
      
      <Button
        title="Previous Page"
        onPress={() => navigation.goback('First')}
      />
    </View>
  );
}

