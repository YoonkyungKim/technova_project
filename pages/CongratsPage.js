import React, { useState } from "react";
import { StyleSheet, ScrollView, View, TouchableOpacity, Text, ImageBackground } from "react-native";
import { Icon } from "react-native-elements";
import commonStyles from "../style/commonStyles";
import BottomNavBar from "../components/BottomNavBar";

const CongratsPage = ({ navigation }) => {
    return (
        <>
        <ScrollView style={commonStyles.lightMintBg}>
            <View style={[commonStyles.view,{alignItems: "center"}]}>
                <View style={{width: 250, height: 250, borderRadius: 125, justifyContent: "center", backgroundColor: "#ffffff"}}>
                    <Icon name="emoji-events" color="#ff6585" size={80}/>
                    <Text style={[commonStyles.taskText, {textAlign: "center", fontSize: 30, color: "#3f3d56"}]}>10 points</Text>
                    <View
                        style={commonStyles.listDivider}
                    />
                </View>
                <Text style={[commonStyles.taskText, {margin: 10, color: "#3f3d56"}]}>Good job!{"\n"}You just earned 10 points!</Text>
            </View>
            <TouchableOpacity
                style={commonStyles.button}
                onPress={() => navigation.navigate("TaskPage")}
            >
                <Text style={commonStyles.btnText}>Continue to next task</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={[commonStyles.button, {backgroundColor: "#48d6a9"}]}
                onPress={() => navigation.navigate("ResultPage")}
            >
                <Text style={commonStyles.btnText}>End it here today</Text>
            </TouchableOpacity>
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

export default CongratsPage;