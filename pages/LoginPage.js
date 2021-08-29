import React, { Component, useState } from "react";
import { View, Text, TextInput, Button } from "react-native";
// import { Input } from "../components/Input";
import { Card } from "react-native-elements";
// import firebase from "firebase";

const LoginPage = ({ navigation }) => {
  const [state, setState] = useState({ email: "", password: "", error: "" });

  const onButtonPress = (props) => {
    const { email, password } = state;

    setState({ ...setState, error: "" });
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((data) => {
        console.log("successful login!! ", data);
        navigation.navigate("HomePage");
      })
      .catch((data) => {
        console.log("failed login ", data);
        firebase
          .auth()
          .createUserWithEmailAndPassword(email, password)
          .then((data) => {
            console.log("created user", data);
          })
          .catch((err) => {
            console.log(" not created user : ", err);
            setState({ ...state, error: "Authentication Failed." });
          });
      });
  };
  return (
    <View>
      <Card>
        <Card>
          {/* <Input
            secureTextEntry={false}
            label="Email"
            placeholder="user@abc.com"
            value={state.email}
            onChangeText={(email) => setState({ ...state, email })}
          /> */}
        </Card>
        <Card>
          <Input
            secureTextEntry
            label="Password"
            placeholder="minimum 6 characters"
            value={state.password}
            onChangeText={(password) => setState({ ...state, password })}
          />
        </Card>
        <Text style={styles.errorTextStyle}>{state.error}</Text>
        {/* <Button onPress={onButtonPress.bind(this)} title="Login" /> */}
        <Button title="Login" />
      </Card>
    </View>
  );
};
const styles = {
  errorTextStyle: {
    fontSize: 20,
    color: "red",
    alignItems: "center",
  },
};
export default LoginPage;
