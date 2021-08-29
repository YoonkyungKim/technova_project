import React, { useState } from "react";
import { StyleSheet, ScrollView, View, TouchableOpacity, Text, ImageBackground } from "react-native";
import { Icon } from "react-native-elements";
import commonStyles from "../style/commonStyles";
import BottomNavBar from "../components/BottomNavBar";

const DashboardPage = ({ navigation }) => {
    return (
        <>
        <ScrollView>
            <View>
            <Icon name="volunteer-activism" color="#ff6585" size={21} style={{margin: 6}}/>
            </View>
        </ScrollView>
        <BottomNavBar navigation={navigation} />
        </>
    );
}

const styles = StyleSheet.create({
    container: {
      position: "absolute",
      right: 0,
      left: 0,
      top: 0,
      bottom: 70,
      borderColor: "white",
      borderWidth: 2,
    },
    viewStyle: {
        width: "80%",
        height: "30%",
        alignSelf: "center",
        marginTop: 10,
    },
    task: { 
        height: 420,
        alignItems: "left",
        backgroundColor: "#6b63ff",
        padding: 30,
        borderRadius: 10, 
        margin: 10,
        textAlign: "left"
        // marginBottom: 2.5
    },
    text: {
        color: "#ffffff",
        fontSize: 16
    },
    iconImage: {
      width: 50,
      height: 50,
      resizeMode: "stretch",
    },
  });

export default DashboardPage;