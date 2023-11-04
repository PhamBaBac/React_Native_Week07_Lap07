import React, { useState, useContext } from "react";
import { Image, Pressable, TextInput, View, Text } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { useNavigation } from "@react-navigation/native";

import { AppContext } from "../context/AppContext";

import Screen_01 from "../screen/Screen_01";
import Screen_02 from "../screen/Screen_02";
import Screen_03 from "../screen/Screen_03";
import Screen_04 from "../screen/Screen_04";

const Stack = createStackNavigator();

const AuthNavigation = () => {
  const [isSearchVisible, setSearchVisible] = useState(false);
  const { setSearchText } = useContext(AppContext);

  const handleSearchClick = () => {
    setSearchVisible(!isSearchVisible);
  };

  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{ headerShown: false }}
        name="Screen_01"
        component={Screen_01}
      />
      <Stack.Screen
        options={{
          headerLeft: () => {
            const navigation = useNavigation();
            return (
              <Pressable
                onPress={() => navigation.goBack()}
                style={{ paddingLeft: 10 }}
              >
                <Image
                  source={require("../assets/images/Vector.png")}
                  style={{
                    width: 20,
                    height: 20,
                    resizeMode: "contain",
                    tintColor: "#9095A0",
                  }}
                />
              </Pressable>
            );
          },
          headerTitleAlign: "center",
          headerTitle: () =>
            isSearchVisible ? (
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <TextInput
                  style={{
                    width: 200,
                    height: 30,
                    borderColor: "gray",
                    borderWidth: 1,
                    borderRadius: 5,
                    paddingLeft: 10,
                  }}
                  onChangeText={(text) => setSearchText(text)}
                  placeholder="Search"
                />
              </View>
            ) : (
              <Text style={{ fontWeight: "bold", fontSize: 20 }}>
                Shops Near Me
              </Text>
            ),
          headerStyle: {
            backgroundColor: "#fff",
          },
          headerTintColor: "#000",
          headerRight: () => {
            return (
              <Pressable
                style={{ marginRight: 40 }}
                onPress={handleSearchClick}
              >
                <Image
                  source={require("../assets/images/search.png")}
                  style={{
                    width: 20,
                    height: 20,
                    resizeMode: "contain",
                  }}
                />
              </Pressable>
            );
          },
        }}
        name="Screen_02"
        component={Screen_02}
      />
      <Stack.Screen
        options={{
          headerLeft: () => {
            const navigation = useNavigation();
            return (
              <Pressable
                onPress={() => navigation.navigate("Screen_02")}
                style={{ paddingLeft: 10 }}
              >
                <Image
                  source={require("../assets/images/Vector.png")}
                  style={{
                    width: 20,
                    height: 20,
                    resizeMode: "contain",
                    tintColor: "#9095A0",
                  }}
                />
              </Pressable>
            );
          },
          headerTitleAlign: "center",
          headerTitle: () =>
            isSearchVisible ? (
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <TextInput
                  style={{
                    width: 200,
                    height: 30,
                    borderColor: "gray",
                    borderWidth: 1,
                    borderRadius: 5,
                    paddingLeft: 10,
                  }}
                  onChangeText={(text) => setSearchText(text)}
                  placeholder="Search"
                />
              </View>
            ) : (
              <Text style={{ fontWeight: "bold", fontSize: 20 }}>Drinks</Text>
            ),
          headerStyle: {
            backgroundColor: "#fff",
          },
          headerTintColor: "#000",
          headerRight: () => {
            return (
              <Pressable
                style={{ marginRight: 40 }}
                onPress={handleSearchClick}
              >
                <Image
                  source={require("../assets/images/search.png")}
                  style={{
                    width: 20,
                    height: 20,
                    resizeMode: "contain",
                  }}
                />
              </Pressable>
            );
          },
        }}
        name="Screen_03"
        component={Screen_03}
      />
      <Stack.Screen
        options={{
          headerLeft: () => {
            const navigation = useNavigation();
            return (
              <Pressable
                onPress={() => navigation.navigate("Screen_03")}
                style={{ paddingLeft: 10 }}
              >
                <Image
                  source={require("../assets/images/Vector.png")}
                  style={{
                    width: 20,
                    height: 20,
                    resizeMode: "contain",
                    tintColor: "#9095A0",
                  }}
                />
              </Pressable>
            );
          },
          headerTitleAlign: "center",
          headerTitle: () =>
            isSearchVisible ? (
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <TextInput
                  style={{
                    width: 200,
                    height: 30,
                    borderColor: "gray",
                    borderWidth: 1,
                    borderRadius: 5,
                    paddingLeft: 10,
                  }}
                  onChangeText={(text) => setSearchText(text)}
                  placeholder="Search"
                />
              </View>
            ) : (
              <Text style={{ fontWeight: "bold", fontSize: 20 }}>
                Your orders
              </Text>
            ),
          headerStyle: {
            backgroundColor: "#fff",
          },
          headerTintColor: "#000",
          headerRight: () => {
            return (
              <Pressable
                style={{ marginRight: 40 }}
                onPress={handleSearchClick}
              >
                <Image
                  source={require("../assets/images/search.png")}
                  style={{
                    width: 20,
                    height: 20,
                    resizeMode: "contain",
                  }}
                />
              </Pressable>
            );
          },
        }}
        name="Screen_04"
        component={Screen_04}
      />
    </Stack.Navigator>
  );
};

export default AuthNavigation;
