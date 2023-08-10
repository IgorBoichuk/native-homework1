import React from "react";
import {
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

import bgImage from "./galary/bgimage.jpg";

export const LoginScreen = () => {
  return (
    <View style={styles.component}>
      <ImageBackground source={bgImage}>
        <View style={styles.componentWrapper}>
          <Text style={styles.title}>Увійти</Text>
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
            <Text style={styles.buttonText}>Увійти</Text>
          </TouchableOpacity>
          <View style={styles.loginQuary}>
            <Text style={styles.isAccount}>Немає акаунту?</Text>
            <TouchableOpacity>
              <Text style={styles.isAccount}>Зареєструватися</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  component: {
    flex: 1,
    margin: 0,
    padding: 0,
  },

  imageBackground: {
    flex: 1,
    resizeMode: "cover",
  },

  componentWrapper: {
    backgroundColor: "#FFF",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    marginTop: 200,
  },

  title: {
    marginLeft: "auto",
    marginRight: "auto",
    fontSize: 30,
    lineHeight: 35,
    marginBottom: 32,
    marginTop: 50,
    paddingTop: 20,
  },

  input: {
    width: 343,
    height: 50,
    marginBottom: 16,
    marginLeft: "auto",
    marginRight: "auto",
    padding: 10,
    borderRadius: 8,
    backgroundColor: "#E8E8E8",
  },

  button: {
    borderRadius: 100,
    backgroundColor: "#FF6C00",
    marginBottom: 40,
    marginLeft: "auto",
    marginRight: "auto",
    alignItems: "center",
    width: 343,
  },

  buttonText: {
    fontSize: 16,
    color: "#FFF",
    padding: 12,
  },

  loginQuary: {
    display: "flex",
  },

  isAccount: {
    fontSize: 16,
    lineHeight: 18,
    textAlign: "center",
  },
});
