import React, { useEffect, useContext, useState, useReducer } from "react";
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

const Screen_03 = () => {
  const { searchText, data, setData, selectedItems, setSelectedItems } =
    useContext(AppContext);

  const initState = {};

  const UP_ACTION = "up";
  const DOWN_ACTION = "down";

  const reducer = (state, action) => {
    switch (action.type) {
      case UP_ACTION:
        return { ...state, [action.itemId]: (state[action.itemId] || 0) + 1 };
      case DOWN_ACTION:
        if (state[action.itemId] > 0) {
          return { ...state, [action.itemId]: state[action.itemId] - 1 };
        }
        return state;
      default:
        return state;
    }
  };

  const [itemCounts, dispatch] = useReducer(reducer, initState);

  useEffect(() => {
    fetch("https://653f4b2b9e8bd3be29e02e84.mockapi.io/screen_03")
      .then((response) => response.json())
      .then((json) => setData(json));
  }, []);

  const filteredData = data.filter((item) =>
    item.name.toLowerCase().includes(searchText.toLowerCase())
  );

  const navigation = useNavigation();

  const renderItem = ({ item }) => {
    const count = itemCounts[item.id] || 0;
    return (
      <View
        style={{
          flex: 1,
          margin: 10,
          flexDirection: "row",
          borderColor: "#D9D9D9",
          borderWidth: 1,
        }}
      >
        <View style={{ alignItems: "center" }}>
          <Image
            style={{
              width: 60,
              height: 60,
              resizeMode: "contain",
              borderRadius: 5,
              overflow: "hidden",
              margin: 2,
            }}
            source={{ uri: item.image }}
          />
        </View>
        <View
          style={{
            flexDirection: "column",
            justifyContent: "space-between",
            marginHorizontal: 14,
            marginVertical: 4,
            width: 180,
          }}
        >
          <View>
            <Text style={{ fontSize: 18, fontWeight: "bold" }}>
              {item.name}
            </Text>
          </View>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Image
              style={{ width: 14, height: 14, resizeMode: "contain" }}
              source={require("../assets/icons/Vector.png")}
            />
            <Text style={{ fontSize: 16, color: "#565E6C", marginLeft: 4 }}>
              ${item.price}
            </Text>
          </View>
        </View>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Pressable
            onPress={() => dispatch({ type: DOWN_ACTION, itemId: item.id })}
          >
            <Image
              style={{
                width: 20,
                height: 20,
                resizeMode: "contain",
                marginHorizontal: 10,
              }}
              source={require("../assets/icons/down.png")}
            />
          </Pressable>
          <Text style={{ fontSize: 16, color: "#565E6C" }}>{count}</Text>
          <Pressable
            onPress={() => dispatch({ type: UP_ACTION, itemId: item.id })}
          >
            <Image
              style={{
                width: 20,
                height: 20,
                resizeMode: "contain",
                marginHorizontal: 10,
              }}
              source={require("../assets/icons/up.png")}
            />
          </Pressable>
        </View>
      </View>
    );
  };

  return (
    <View style={{ flex: 1, backgroundColor: "#fff" }}>
      <FlatList
        data={filteredData}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
      />
      <View style={{ alignItems: "center" }}>
        <Pressable
          onPress={() => {
            const newSelectedItems = data.filter(
              (item) => itemCounts[item.id] > 0
            );
            setSelectedItems(
              newSelectedItems.map((item) => ({
                ...item,
                count: itemCounts[item.id],
              }))
            );
            navigation.navigate("Screen_04");
          }}
          style={{
            marginBottom: 40,
            backgroundColor: "#EFB034",
            width: 250,
            height: 50,
            borderWidth: 1,
            borderColor: "#EFB034",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text style={{ color: "#fff", fontSize: 18, fontWeight: "bold" }}>
            GO TO CART
          </Text>
        </Pressable>
      </View>
    </View>
  );
};

export default Screen_03;

const style = StyleSheet.create({
  images: {
    marginVertical: 10,
  },
});
