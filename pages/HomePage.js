import React, { useState } from "react";
import { StyleSheet, ScrollView, View, TouchableOpacity, Text, Image, ImageBackground } from "react-native";
import commonStyles from "../style/commonStyles";

const HomePage = ({ navigation }) => {
    return (
        <>
        <ScrollView>
            <View>
                    <TouchableOpacity
                        style={styles.task}
                    >
                        <View style={{flex: 1}}>
                            <ImageBackground source={require("../assets/home.png")} resizeMode='cover' style={{ flex: 1, justifyContent: "center"}}/>
                        </View>
                    </TouchableOpacity>
                <TouchableOpacity
                    style={styles.buttonStyle}
                    onPress={() => navigation.navigate("QuestionPage")}
                >
                    <Text style={commonStyles.btnText}>Today's Questions</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.buttonStyle}
                    onPress={() => navigation.navigate("TaskPage")}
                >
                    <Text style={commonStyles.btnText}>Today's Tasks</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.buttonStyle}
                >
                    <Text style={commonStyles.btnText}>Tasks Completed</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.buttonStyle}
                >
                    <Text style={commonStyles.btnText}>Daily Progress</Text>
                </TouchableOpacity>
                {/* <TouchableOpacity style={styles.buttonStyle}>
                    <View style={{flex: 1}}>
                        <ImageBackground source={require("../assets/home.png")} resizeMode='cover' style={{ flex: 1, justifyContent: "center"}}/>
                    </View>
                </TouchableOpacity> */}
            </View>
            
        </ScrollView>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
      position: "absolute",
      right: 0,
      left: 0,
      top: 0,
    //   bottom: 70,
      borderColor: "white",
      borderWidth: 2,
    },
    task: { 
        height: 300,
        alignItems: "left",
        // backgroundColor: "#6b63ff",
        // padding: 30,
        paddingTop: 5,
        borderRadius: 10, 
        margin: 10,
        textAlign: "left"
        // marginBottom: 2.5
    },
    viewStyle: {
        width: "80%",
        height: "30%",
        alignSelf: "center",
        marginTop: 10,
    },
    buttonStyle: { 
        alignItems: "center",
        backgroundColor: "#6b63ff",
        padding: 23,
        borderRadius: 10, 
        margin: 10,
        marginBottom: 2.5
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

export default HomePage;