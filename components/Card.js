import React, { useState } from "react";
import { StyleSheet, ScrollView, View, TouchableOpacity, Text, ImageBackground } from "react-native";
import commonStyles from "../style/commonStyles";

const Card = (props) => {
    const [imgSrc, setImgSrc] = useState(require(""+props.imgSrc));

    return (
        <></>
        // <TouchableOpacity
        //     style={styles.task}
        // >
        //     <View style={{flex: 1}}>
        //         <ImageBackground source={props.imgSrc ? require(imgSrc) : ""} resizeMode='cover' style={{ flex: 1, justifyContent: "center"}}/>
        //         <Text style={[commonStyles.taskText, {marginTop: 10, fontSize: 16, fontStyle: "italic"}]}>{props.italicText}</Text>
        //         <Text style={commonStyles.taskText}>{props.text}</Text>
        //     </View>
        // </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
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
  });

export default Card;