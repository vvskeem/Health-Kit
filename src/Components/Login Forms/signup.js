import React from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

export default class SignUp extends React.Component {
  state = {
    username: "",
    password: "",
    email: "",
    phone_number: ""
  };
  onChangeText = (key, val) => {
    this.setState({ [key]: val });
  };
  signUp = async () => {
    const { username, password, email, phone_number } = this.state;
    try {
      // here place your signup logic
      console.log("user successfully signed up!: ", success);
    } catch (err) {
      console.log("error signing up: ", err);
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder="Username"
          autoCapitalize="none"
          placeholderTextColor="black"
          onChangeText={val => this.onChangeText("username", val)}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry={true}
          autoCapitalize="none"
          placeholderTextColor="black"
          onChangeText={val => this.onChangeText("password", val)}
        />
        <TextInput
          style={styles.input}
          placeholder="Email"
          autoCapitalize="none"
          placeholderTextColor="black"
          onChangeText={val => this.onChangeText("email", val)}
        />
        <TextInput
          style={styles.input}
          placeholder="Phone Number"
          autoCapitalize="none"
          placeholderTextColor="black"
          onChangeText={val => this.onChangeText("phone_number", val)}
        />
        <TouchableOpacity onPress={this.signUp}>
          <Text style={styles.signUp}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  input: {
    width: 350,
    height: 50,
    backgroundColor: "white",
    margin: 5,
    padding: 5,
    color: "black",
    borderRadius: 25,
    fontSize: 20,
    fontWeight: "500"
  },
  container: {
    height: 500,
    display: "flex",
    flexWrap: "wrap",
    alignSelf: "center",
    justifyContent: "center"
  },
  signUp: {
    color: "white",
    display: "flex",
    flexWrap: "wrap",
    width: 120,
    height: 50,
    borderRadius: 14,
    fontSize: 30,
    fontWeight: "500",
    margin: 5,
    padding: 5,
    alignSelf: "center",
    justifyContent: "center"
  }
});
