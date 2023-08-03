import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { PostsScreen } from "./Screens/PostsScreen";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      <PostsScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 25,
    color: "red",
    fontWeight: "bold",
  },
});
