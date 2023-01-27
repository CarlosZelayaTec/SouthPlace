import { View, Text, StyleSheet, Button } from "react-native";
import React from "react";

import { Input } from "../Components/Login/index";

const Login = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Input placeholder="Correo electronico" />
      <Input placeholder="Contraseña" />
      <Button title="Iniciar Sesión" onPress={() => navigation.push("Home")} />
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
