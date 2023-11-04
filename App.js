import React from "react";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";

import AuthNavigation from "./navigation/AuthNavigation";
import { AppProvider } from "./context/AppContext";

export default function App() {
  return (
    <AppProvider>
      <NavigationContainer>
        <AuthNavigation />
      </NavigationContainer>
    </AppProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
