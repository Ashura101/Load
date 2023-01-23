import React, {useState} from 'react';
import {View, Text, ActivityIndicator, TextInput} from 'react-native';

export default function App() {
  const [name, setName] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <TextInput
        placeholder="Enter Name"
        onChangeText={text => setName(text)}
        style={{}}
      />
      <ActivityIndicator size="large" color="red" />
    </View>
  );
}
