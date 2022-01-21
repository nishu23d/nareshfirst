import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  ScrollView,
  FlatList,
} from "react-native";
import React, { useState, useEffect } from "react";
import axios from "axios";

//grab screen dimensions
const { width } = Dimensions.get("window");

const Bundles = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://api.firebrandbbq.com.au/cards")
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));

    //cleanup, this is to avoid memory leak. just return all your
    // useState's initial value
    return () => {
      setData([]);
    };
  }, []);

  return (
    <ScrollView style={{ backgroundColor: "black", flex: 1 }}>
      <Text style={{ color: "white", fontSize: 30, textAlign: "center" }}>
        Firebrand Bundles
      </Text>
      {/* flatlist way */}
      <View>
        <FlatList
          data={data}
          keyExtractor={(item) => item._id}
          horizontal
          renderItem={({ item }) => (
            <View style={{ margin: 5 }}>
              <Image
                style={styles.flatlistImageStyle}
                source={{ uri: item.cover }}
              />
              <Text style={styles.title}>{item.title}</Text>
            </View>
          )}
        />
      </View>
      {/* mapping way */}
      {data.map((item) => (
        <View key={item._id}>
          <Image style={styles.imageStyle} source={{ uri: item.cover }} />
          <Text style={styles.title}>{item.title}</Text>
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  imageStyle: {
    width: width,
    height: width,
    borderRadius: 15,
  },
  flatlistImageStyle: {
    width: width - 100,
    height: width - 100
    ,
    borderRadius: 15,
  },
  title: {
    color: "white",
    fontSize: 25,
    margin: 10,
    textAlign: "center",
  },
});

export default Bundles;
