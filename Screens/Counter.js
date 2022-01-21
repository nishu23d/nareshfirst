import React, { useState } from "react";
import { Button, SafeAreaView, StyleSheet, Text, View } from "react-native";

const Counter = (props) => {
  const [counter, setCounter] = useState(0);

  const increase = () => {
    setCounter(counter + 1);
  };

  const decrease = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  };

  console.log(props);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={[styles.title, { textAlign: "center" }]}>
        This is a counter App!
      </Text>
      <Button title="+" onPress={increase} />
      <Text style={{ color: "white", fontSize: 150 }}>{counter}</Text>
      <Button title="-" onPress={decrease} />
      <Button
        title="Go To Bundle's Screen"
        onPress={() => props.navigation.navigate("Bundles")}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "black",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 30,
    color: "white",
  },
});

export default Counter;
