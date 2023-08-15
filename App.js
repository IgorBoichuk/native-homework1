import { PostsScreen } from "./Screens/PostsScreen";
import { CommentsScreen } from "./Screens/CommentsScreen";
import { Home } from "./Screens/Home";
import { CreatePostsScreen } from "./Screens/CreatePostsScreen";
import { MapScreen } from "./Screens/MapScreen";
import { ProfileScreen } from "./Screens/ProfileScreen";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import "react-native-gesture-handler";
// import { LoginScreen } from "./components/LoginScreen";
// import { RegistrationScreen  } from "./components/RegistrationScreen ";

const MainStack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <MainStack.Navigator>
        <MainStack.Screen name="PostsScreen" component={PostsScreen} />
        <MainStack.Screen name="Home" component={Home} />
        <MainStack.Screen name="CommentsScreen" component={CommentsScreen} />
        <MainStack.Screen
          name="CreatePostsScreen"
          component={CreatePostsScreen}
        />
        <MainStack.Screen name="MapScreen" component={MapScreen} />
        <MainStack.Screen name="ProfileScreen" component={ProfileScreen} />

        {/* <PostsScreen /> */}
        {/* <MainStack.Screen name="Login" component={Login} /> */}
        {/* <MainStack.Screen name="Registration" component={Registration} /> */}
      </MainStack.Navigator>
    </NavigationContainer>
  );
}
