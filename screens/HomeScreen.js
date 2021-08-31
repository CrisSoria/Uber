import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  StatusBar,
  Platform,
  Image,
} from "react-native";
import tw from "tailwind-react-native-classnames";

import NavOptions from "../components/NavOptions";

const HomeScreen = () => {
  // console.log("Height on: ", Platform.OS, StatusBar.currentHeight);

  return (
    <SafeAreaView style={[tw`bg-white h-full`, styles.container]}>
      <View style={tw`p-5`}>
        <Image
          style={{
            width: 100,
            height: 100,
            resizeMode: "contain",
          }}
          source={{ uri: "https://links.papareact.com/gzs" }}
        />

        <NavOptions />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    // con android se superpoene a la barra de estado por lo tanto esto lo soluciona
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  text: {
    color: "blue",
  },
});
