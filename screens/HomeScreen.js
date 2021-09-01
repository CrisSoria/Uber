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
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { GOOGLE_MAPS_KEY } from "@env";
import { useDispatch } from "react-redux";
import { setDestination, setOrigin } from "../slices/navSlice";

import NavOptions from "../components/NavOptions";
import NavFavorites from "../components/NavFavorites";

const HomeScreen = () => {
  // console.log("Height on: ", Platform.OS, StatusBar.currentHeight);
  const dispatch = useDispatch();

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

        <GooglePlacesAutocomplete
          placeholder="Where from?"
          styles={{
            container: { flex: 0 },
            textInput: { fontSize: 18 },
          }}
          onPress={(data, details = null) => {
            // console.log(data)
            // console.log("homeScreen FEtch", details);
            dispatch(
              setOrigin({
                location: details.geometry.location,
                description: data.description,
              })
            );
            dispatch(setDestination(null));
          }}
          fetchDetails={true}
          returnKeyType={"search"}
          enablePoweredByContainer={false} //quita la publicidad de google
          minLength={2}
          query={{ key: GOOGLE_MAPS_KEY, language: "en" }}
          nearbyPlacesAPI="GooglePlacesSearch"
          debounce={400} //que ejecute la busqueda cuando deje de tipear por 400ms
        />

        <NavOptions />
        <NavFavorites />
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
