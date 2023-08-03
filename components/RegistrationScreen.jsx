import React from "react";
import {
  ImageBackground,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

import bgImage from "./galary/bgimage.jpg";

export const RegistrationScreen = () => {
  return (
    <View style={styles.component}>
      <ImageBackground source={bgImage}>
        <View style={styles.bgi}></View>
        <View style={styles.componentWrapper}>
          <Text style={styles.title}>Реєстрація</Text>
          <TextInput placeholder="Логін" style={styles.input} />
          <TextInput
            placeholder="Адреса електронної пошти"
            keyboardType="email-address"
            autoCapitalize="none"
            style={styles.input}
          />
          <TextInput
            placeholder="Пароль"
            secureTextEntry={true}
            style={styles.input}
          />
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Зареєстуватися</Text>
          </TouchableOpacity>
          <View style={styles.loginQuary}>
            <Text style={styles.isAccount}>Вже є акаунт?</Text>
            <TouchableOpacity>
              <Text style={styles.isAccount}>Увійти</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  component: {
    margin: 0,
    padding: 0,
  },

  bgi: { height: 100 },
  componentWrapper: {
    backgroundColor: "#FFF",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
  title: {
    marginLeft: "auto",
    marginRight: "auto",
    fontSize: 30,
    lineHeight: 35,
    marginBottom: 32,
  },
  input: {
    width: 325,
    height: 50,
    marginBottom: 16,
    padding: 10,
    borderRadius: 8,
    backgroundColor: "#E8E8E8",
  },
  button: {
    borderRadius: 100,
    backgroundColor: "#FF6C00",
    marginBottom: 40,
    alignItems: "center",
  },
  buttonText: {
    display: "block",
    fontSize: 16,
    color: "#FFF",
    padding: 12,
  },
  loginQuary: { display: "flex" },
  isAccount: {
    fontSize: 16,
    lineHeight: 18,
    textAlign: "center",
  },
});
