import React, { useEffect, useContext, useState } from "react";
import {
  StyleSheet,
  View,
  Image,
  FlatList,
  Text,
  Pressable,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { AppContext } from "../context/AppContext";

const Screen_02 = () => {
  const [data, setData] = useState([]);
  const { searchText } = useContext(AppContext);
  useEffect(() => {
    fetch("https://653f4b2b9e8bd3be29e02e84.mockapi.io/screen_02")
      .then((response) => response.json())
      .then((json) => setData(json));
  }, []);

  const filteredData = data.filter((item) =>
    item.restaurants.toLowerCase().includes(searchText.toLowerCase())
  );
  const navigation = useNavigation();
  const handleImagePress = (item) => {
    navigation.navigate("Screen_03", { item });
  };
  const renderItem = ({ item }) => (
    <Pressable onPress={() => handleImagePress(item)}>
      <View style={{ flex: 1, margin: 10 }}>
        <View style={{ alignItems: "center" }}>
          <Image
            style={{
              width: 370,
              height: 100,
              resizeMode: "cover",
              marginVertical: 10,
              borderRadius: 10,
              overflow: "hidden",
            }}
            source={{ uri: item.image }}
          />
        </View>
        <View
          style={{
            flexDirection: "row",
            width: "100%",
            justifyContent: "space-between",
            marginBottom: 12,
            alignItems: "center",
          }}
        >
          <View
            style={{
              flexDirection: "row",
              backgroundColor: "#F3F4F6",
              width: 180,
              height: 30,
              alignItems: "center",
            }}
          >
            <Image
              style={{
                width: 20,
                height: 20,
                resizeMode: "contain",
                marginLeft: 4,
              }}
              source={
                item.titleStatus === "Accepting Orders"
                  ? require("../assets/icons/accept.png")
                  : require("../assets/icons/lock.png")
              }
            />
            <Text style={{ fontSize: 16, color: "#0FA958", marginLeft: 4 }}>
              {item.titleStatus}
            </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              backgroundColor: "#F3F4F6",
              width: 140,
              height: 30,
              alignItems: "center",
            }}
          >
            <Image
              style={{
                width: 20,
                height: 20,
                resizeMode: "contain",
                marginLeft: 4,
              }}
              source={require("../assets/icons/clock.png")}
            />
            <Text style={{ fontSize: 16, color: "#DE3B40", marginLeft: 4 }}>
              {item.postingTime}
            </Text>
          </View>
          <Image
            style={{ width: 20, height: 20, resizeMode: "contain" }}
            source={require("../assets/icons/map.png")}
          />
        </View>
        <Text
          style={{
            fontSize: 18,
            color: "#000",
            fontWeight: "bold",
          }}
        >
          {item.restaurants}
        </Text>
        <Text style={{ fontSize: 16, color: "#6F7174" }}>{item.address}</Text>
      </View>
    </Pressable>
  );

  return (
    <View style={{ flex: 1, backgroundColor: "#fff" }}>
      <FlatList
        data={filteredData}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
      />
    </View>
  );
};

export default Screen_02;

const style = StyleSheet.create({
  images: {
    marginVertical: 10,
  },
});
