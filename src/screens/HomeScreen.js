import React from "react";
import { Text, StyleSheet, Image, View } from "react-native";
import SignUp from "../Components/Login Forms/signup.js";

const HomeScreen = () => {
  return (
    <View style={styles.main}>
      <Text style={styles.text}>Mobile Health Care</Text>
      <Image
        style={{
          width: 300,
          height: 300,
          alignSelf: "center",
          display: "flex"
        }}
        source={require("../../assets/vvsHealth.jpg")}
      />
      <Text style={styles.title}>
        {"A Very Very Special HealthCare Solution"}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  },
  main: {
    backgroundColor: "black",
    color: "black"
  },
  title: {
    fontSize: 15,
    fontWeight: "700",
    color: "white",
    alignSelf: "center",
    display: "flex",
    flexWrap: "wrap"
  }
});

export default HomeScreen;
