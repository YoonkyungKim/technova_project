import * as React from "react";
import { Text, View, Card, StyleSheet, TouchableOpacity } from "react-native";
import { Icon } from "react-native-elements";

const styles = StyleSheet.create({
  viewStyle: {
    backgroundColor: "#3f3d56",
    flexDirection: "row",
    justifyContent: "space-evenly",
    flex: 0.2,
    position: "absolute",
    right: 0,
    left: 0,
    bottom: -1,
  },
  button: {
    color: "white",
    width: "33%",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    // borderWidth: 0.5,
    // borderColor: "#e6e6e6",
    backgroundColor: "#3f3d56",
    padding: 10,
  },
  buttonText: {
    color: "white",
    marginBottom: 6
    //alignItems: "center",
    //justifyContent: "center",
  },
});

export default function BottomNavBar({ navigation }) {
  return (
    <View style={styles.viewStyle}>
      <TouchableOpacity
        onPress={() => navigation.navigate("HomePage")}
        style={styles.button}
      >
        <Icon name="home" type="font-awesome" color="white" size={24} style={{margin: 6}}/>
        <Text style={styles.buttonText}>Home</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => navigation.navigate("TaskPage")}
        style={styles.button}
      >
        <Icon name="heart" type="font-awesome" color="white" size={21} style={{margin: 6}}/>
        <Text style={styles.buttonText}>Tasks</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => navigation.navigate("DashboardPage")}
        style={styles.button}
      >
        <Icon name="dashboard" color="white" size={21} style={{margin: 6}}/>
        <Text style={styles.buttonText}>MyPage</Text>
      </TouchableOpacity>
    </View>
  );
}
