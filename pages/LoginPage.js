import React, { Component, useState } from "react";
import { ScrollView } from "react-native";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ImageBackground } from "react-native";
import commonStyles from "../style/commonStyles";

const LoginPage = ({ navigation }) => {
  return (
    <ScrollView>
      <View style={commonStyles.view}>
        <Text style={styles.title}>Conquer</Text>
        <View
          style={commonStyles.listDivider}
        />
        <TouchableOpacity
            style={styles.task}
        >
            <View style={{flex: 1}}>
                <ImageBackground source={require("../assets/login.png")} resizeMode='cover' style={{ flex: 1, justifyContent: "center"}}/>
            </View>
        </TouchableOpacity>

        <View style={{margin: 10}}>
          <View style={styles.container}>
            <Text style={styles.label}>Email</Text>
            <TextInput 
              style={styles.input}
              placeholder="Enter your email"
            />
          </View>

          <View style={styles.container}>
            <Text style={styles.label}>Password</Text>
            <TextInput 
              style={styles.input}
              placeholder="Enter your password"
            />
          </View>

          <TouchableOpacity style={commonStyles.button} onPress={() => navigation.navigate("HomePage")}>
              <Text style={commonStyles.btnText}>Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  title: {
    fontSize: 40,
    fontWeight: "bold",
    fontStyle: "italic",
    textAlign: "center",
    marginVertical: 10
  },
  container: {
    height: 60,
    alignItems: "left",
    margin: 15
  },
  task: { 
    height: 300,
    alignItems: "left",
    paddingTop: 5,
    borderRadius: 10, 
    margin: 10,
    textAlign: "left"
    // marginBottom: 2.5
  },
  label: {
    paddingLeft: 5,
  },
  input: {
    color: "#000",
    paddingRight: 5,
    paddingLeft: 5,
    fontSize: 17,
    lineHeight: 23,
    flex: 2,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: "#464646",
  },
});
export default LoginPage;
