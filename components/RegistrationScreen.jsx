import React, { useState } from "react";
import {
  Image,
  ImageBackground,
  Keyboard,
  KeyboardAvoidingView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

import bgImage from "./galary/bgimage.jpg";
import avatar from "./galary/avatar.jpg";

export const RegistrationScreen = () => {
  const navigation = useNavigation();
  const [login, setLogin] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = () => {
    console.log(
      "User login: ",
      login,
      "User email: ",
      email,
      "User password: ",
      password
    );
    setLogin("");
    setEmail("");
    setPassword("");
    navigation.navigate("PostsScreen");
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.component}>
        <StatusBar style="auto" />
        <ScrollView contentContainerStyle={styles.container}>
          <ImageBackground source={bgImage}>
            <View style={styles.bgi}>
              <View style={styles.avatarContainer}>
                <Image source={avatar} style={styles.avatar} />
                <View style={styles.addAvatar}>
                  <Text style={styles.addAvatarPlus}>+</Text>
                </View>
              </View>
            </View>
            <View style={styles.componentWrapper}>
              <Text style={styles.title}>Реєстрація</Text>
              <KeyboardAvoidingView
                behavior={Platform.OS == "ios" ? "padding" : "height"}
              >
                <TextInput
                  placeholder="Логін"
                  style={styles.input}
                  value={login}
                  onChangeText={setLogin}
                />
                <TextInput
                  placeholder="Адреса електронної пошти"
                  keyboardType="email-address"
                  autoCapitalize="none"
                  style={styles.input}
                  value={email}
                  onChangeText={setEmail}
                />
                <TextInput
                  placeholder="Пароль"
                  secureTextEntry={true}
                  style={styles.input}
                  value={password}
                  onChangeText={setPassword}
                />
                <TouchableOpacity style={styles.button} onPress={handleSubmit}>
                  <Text style={styles.buttonText}>Зареєстуватися</Text>
                </TouchableOpacity>
              </KeyboardAvoidingView>
              <View style={styles.loginQuary}>
                <Text style={styles.isAccount}>Вже є акаунт?</Text>
                <TouchableOpacity>
                  <Text
                    style={styles.isAccount}
                    onPress={() => navigation.navigate("LoginScreen")}
                  >
                    Увійти
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </ImageBackground>
        </ScrollView>
      </View>
    </TouchableWithoutFeedback>
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

  avatarContainer: {
    position: "absolute",
    zIndex: 2,
    backgroundColor: "#F6F6F6",
    borderRadius: 20,
    width: 100,
    height: 100,
    left: "50%",
    transform: [{ translate: [-50, 150] }],
  },

  addAvatar: {
    position: "absolute",
    zIndex: 3,
    backgroundColor: "white",
    width: 20,
    borderRadius: 50,
    right: "-10%",
    bottom: "10%",
    borderWidth: 1,
    borderColor: "#FF6C00",
  },
  addAvatarPlus: {
    color: "#FF6C00",
    marginLeft: "auto",
    marginRight: "auto",
  },

  avatar: {
    borderRadius: 20,
    width: 100,
    height: 100,
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
