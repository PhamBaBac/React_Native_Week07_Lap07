import React from "react";
import { StyleSheet, View, Image, Text, Pressable } from "react-native";

import { useNavigation } from "@react-navigation/native";

const Screen_01 = () => {
    const navigation = useNavigation();
  return (
    <View style={{ flex: 1, alignItems: "center" }}>
      <View style={{ height: 120, justifyContent: "center" }}>
        <Text style={{ fontSize: 30, fontWeight: "bold" }}>
          Welcome to Cafe world
        </Text>
      </View>
      <View style={style.imgaes}>
        <Image
          style={{ width: 300, height: 100, resizeMode: "contain" }}
          source={require("../assets/images/Image.png")}
        />
      </View>
      <View style={style.imgaes}>
        <Image
          style={{ width: 300, height: 100, resizeMode: "contain" }}
          source={require("../assets/images/Image1.png")}
        />
      </View>
      <View style={style.imgaes}>
        <Image
          style={{ width: 300, height: 100, resizeMode: "contain" }}
          source={require("../assets/images/Image2.png")}
        />
      </View>
      <Pressable
        onPress={() => navigation.navigate("Screen_02")}
        style={{
          marginTop: 80,
          backgroundColor: "#00BDD6",
          width: 250,
          height: 50,
          borderWidth: 1,
          borderColor: "#00BDD6",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Text style={{ color: "#fff", fontSize: 18, fontWeight: "bold" }}>
          GET STARTED
        </Text>
      </Pressable>
    </View>
  );
};

export default Screen_01;

const style = StyleSheet.create({
  imgaes: {
    marginVertical: 10,
  },
});
