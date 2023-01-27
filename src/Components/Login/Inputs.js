import { StyleSheet, View } from "react-native";
import { TextInput } from 'react-native-rapi-ui';
import React from "react";

const Input = ({ placeholder, nameLogo, size }) => {
  return (
    <View style={styles.container}>
      
        <TextInput placeholder={placeholder}  />

    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
