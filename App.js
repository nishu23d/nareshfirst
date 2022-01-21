import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { Button, SafeAreaView, StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import HomeStack from "./Navigators/HomeStack";

const App = () => {
  return (
    <NavigationContainer>
      <StatusBar style="light" />
      <HomeStack />
    </NavigationContainer>
  );
};

export default App;
