import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Button,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import { useState } from "react";
import { Goals } from "./Goals";

const image = {
  uri: "file:///Users/ymas/Documents/DevExo/testProject/assets/backgr.jpg",
};

export default function App() {
  return (
    <ImageBackground source={image} style={styles.image}>
      <View style={styles.container}>
        <StatusBar style="auto" />
        <View>
          <Goals />
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: { image },
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    flex: 1,
  },
});
