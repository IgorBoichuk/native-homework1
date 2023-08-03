import { StatusBar } from "expo-status-bar";
import { ScrollView, StyleSheet } from "react-native";
import { PostsScreen } from "./Screens/PostsScreen";

export default function App() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <StatusBar style="auto" />

      <PostsScreen />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    margin: 0,
    padding: 0,
  },
});
