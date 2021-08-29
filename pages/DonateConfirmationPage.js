import React, { useState } from "react";
import { StyleSheet, ScrollView, View, TouchableOpacity, Text, ImageBackground } from "react-native";
import { Icon } from "react-native-elements";
import commonStyles from "../style/commonStyles";
import BottomNavBar from "../components/BottomNavBar";

const DonateConfirmationPage = ({ navigation }) => {
    return (
        <>
        <ScrollView style={commonStyles.mintBg}>
            <View style={[commonStyles.view,{alignItems: "center"}]}>
                <TouchableOpacity
                    style={styles.task}
                >
                    <View style={{flex: 1}}>
                        <ImageBackground source={require("../assets/joy-yellow.png")} resizeMode='cover' style={{ flex: 1, justifyContent: "center"}}/>
                        <Text style={[commonStyles.taskText, {color: "#3f3d56", fontSize: 30}]}>Donation success!</Text>
                    </View>
                </TouchableOpacity>
            </View>
            <TouchableOpacity
                style={[commonStyles.button, {backgroundColor: "#6b63ff"}]}
                onPress={() => navigation.navigate("TaskPage")}
            >
                <Text style={[commonStyles.btnText, {textAlign: "center"}]}>Explore more tasks</Text>
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
        // backgroundColor: "#6b63ff",
        padding: 30,
        paddingTop: 5,
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

export default DonateConfirmationPage;