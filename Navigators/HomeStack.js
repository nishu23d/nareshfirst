import { View, Text } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// screens
import Counter from "../Screens/Counter";
import Bundles from "../Screens/Bundles";

// grab the create stack navigator function
const Stack = createNativeStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: "black",
        },
      }}
    >
      <Stack.Screen name="Counter" component={Counter} />
      <Stack.Screen name="Bundles" component={Bundles} />
    </Stack.Navigator>
  );
};

export default HomeStack;
