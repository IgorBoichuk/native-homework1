import React from "react";
import { View } from "react-native";
import { RegistrationScreen } from "../components/RegistrationScreen";
import { LoginScreen } from "../components/LoginScreen";

export const PostsScreen = () => {
  return (
    <View>
      <RegistrationScreen />
      <LoginScreen />
    </View>
  );
};
