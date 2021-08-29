import React, { useState } from "react";
import { StyleSheet, ScrollView, View, TouchableOpacity, Text, ImageBackground } from "react-native";
import commonStyles from "../style/commonStyles";
import BottomNavBar from "../components/BottomNavBar";

const TaskPage = ({ navigation }) => {
    return (
        <>
        <ScrollView>
            <View>
                <TouchableOpacity
                    style={styles.task}
                >
                    <View style={{flex: 1}}>
                    <ImageBackground source={require('../assets/pedestrian-crossing.png')} resizeMode='cover' style={{ flex: 1, justifyContent: "center"}}/>
                    <Text style={[commonStyles.taskText, {marginTop: 10, fontSize: 16, fontStyle: "italic"}]}>Task 1: </Text>
                    <Text style={commonStyles.taskText}>Go for a walk outside for 15 minutes!</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity
                    style={commonStyles.button}
                    onPress={() => navigation.navigate("CongratsPage")}
                >
                    <Text style={commonStyles.btnText}>Complete</Text>
                </TouchableOpacity>
                {/* <TouchableOpacity
                    style={styles.buttonStyle}
                >
                    <Text style={styles.text}>Skip Task</Text>
                </TouchableOpacity> */}
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

export default TaskPage;