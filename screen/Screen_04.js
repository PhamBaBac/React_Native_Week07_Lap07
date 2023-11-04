import React, { useContext } from "react";
import { View, Image, FlatList, Text, Pressable } from "react-native";
import { AppContext } from "../context/AppContext";

const Screen_04 = () => {
  const { searchText, selectedItems } = useContext(AppContext);

  const totalPrice = selectedItems.reduce((total, item) => {
    return total + item.count * item.price;
  }, 0);
  const filteredData = selectedItems.filter((item) =>
    item.name.toLowerCase().includes(searchText.toLowerCase())
  );
  const renderItem = ({ item }) => (
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
            width: 80,
            height: 80,
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
          width: 260,
        }}
      >
        <View>
          <Text style={{ fontSize: 18, fontWeight: "bold" }}>{item.name}</Text>
        </View>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Text style={{ fontSize: 16, color: "#565E6C", marginLeft: 4 }}>
            Tổng tiền: ${item.price * item.count}
          </Text>
        </View>
        <Text style={{ fontSize: 16, color: "#565E6C", marginLeft: 4 }}>
          Số lượng: {item.count}
        </Text>
      </View>
    </View>
  );

  return (
    <View style={{ flex: 1, backgroundColor: "#fff" }}>
      <FlatList
        data={filteredData}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
      />
      <View
        style={{
          flexDirection: "row",
          marginBottom: 60,
          marginHorizontal: 10,
        }}
      >
        <Text style={{ fontSize: 18, fontWeight: "bold", marginRight: 10 }}>
          Thành tiền:
        </Text>
        <Text style={{ fontSize: 18, fontWeight: "bold" }}>${totalPrice}</Text>
      </View>
      <View style={{ alignItems: "center" }}>
        <Pressable
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
            PAY NOW
          </Text>
        </Pressable>
      </View>
    </View>
  );
};

export default Screen_04;
