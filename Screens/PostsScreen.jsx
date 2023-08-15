import React from "react";
import { ScrollView, StatusBar, StyleSheet, View } from "react-native";
import { RegistrationScreen } from "../components/RegistrationScreen";
import { LoginScreen } from "../components/LoginScreen";

export const PostsScreen = () => {
  return (
    <View>
      <StatusBar style="auto" />
      <ScrollView contentContainerStyle={styles.container}>
        <RegistrationScreen />
        <LoginScreen />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    margin: 0,
    padding: 0,
  },
});
