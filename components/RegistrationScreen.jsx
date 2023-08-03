import React from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export const RegistrationScreen = () => {
  return (
    <View>
      <Text style={styles.title}>Реєстрація</Text>
      <TextInput placeholder="Логін" style={styles.input} />
      <TextInput placeholder="Адреса електронної пошти" style={styles.input} />
      <TextInput placeholder="Пароль" style={styles.input} />
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Зареєстуватися</Text>
      </TouchableOpacity>
      <Text style={styles.isAccount}>Вже є акаунт?</Text>
    </View>
  );
};

const styles = StyleSheet.create({
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
    borderWidth: 1,
    padding: 10,
    borderRadius: 4,
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
  isAccount: {
    fontSize: 16,
    lineHeight: 18,
    textAlign: "center",
  },
});
