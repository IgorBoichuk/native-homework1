import React from "react";
import {
  Image,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import logout from "../components/galary/log-out.png";
import { Ionicons } from "@expo/vector-icons";

const Tabs = createBottomTabNavigator();

function CreatePostsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Settings!</Text>
    </View>
  );
}

function ProfileScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Profile!</Text>
    </View>
  );
}

export const PostsScreen = () => {
  return (
    <View>
      <StatusBar style="auto" />
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.componentWrapper}>
          <View style={styles.header}>
            <View></View>
            <Text>Публікації</Text>
            <Image source={logout} style={styles.logout} />
          </View>
        </View>

        <Tabs.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;

              if (route.name === "Posts") {
                iconName = focused ? "grid-outline" : "grid-outline";
              } else if (route.name === "CreatePostsScreen") {
                iconName = focused ? "add-outline" : "add-outline";
              } else if (route.name === "ProfileScreen") {
                iconName = focused ? "person-outline" : "person-outline";
              }

              return <Ionicons name={iconName} size={size} color={color} />;
            },
          })}
          tabBarOptions={{
            activeTintColor: "tomato",
            inactiveTintColor: "gray",
            tabBarStyle: [
              {
                display: "flex",
              },
              null,
            ],
          }}
        >
          <Tabs.Screen name="Posts" component={PostsScreen} />
          <Tabs.Screen name="CreatePostsScreen" component={CreatePostsScreen} />
          <Tabs.Screen name="ProfileScreen" component={ProfileScreen} />
        </Tabs.Navigator>
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
  componentWrapper: {},
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    borderBottomWidth: 1,
    borderBottomColor: "#747474",
    padding: 10,
  },
});
