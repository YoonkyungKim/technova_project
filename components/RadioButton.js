import React, { useState } from "react";
import { StyleSheet, ScrollView, View, TouchableOpacity, Text } from "react-native";

const RadioButton = (props) => {
    const [selected, setSelected] = useState(false);
    const [number, setNumber] = useState(-1);
    
    function sendNumber() {
        //condition: opposite
        if (!selected){
            // setNumber(props.number);
            props.sendDataToParent(props.number);
        } else {
            // setNumber(-props.number);
            props.sendDataToParent(-props.number);
        }
    }

    function sendSelected() {
        props.sendSelectedToParent(props.number);
    }

    return (
        <TouchableOpacity 
            onPress={()=>{
                //   console.log(props.number);
                console.log(props.selectedNum);
                console.log(props.number);
                setNumber(props.number);
                if (number === -1 || Math.abs(props.selectedNum) === Math.abs(props.number)) setSelected(!selected);
                sendSelected();
                sendNumber();
            }
        }>
            <View style={[
                styles.button, 
                props.style]}
            >
            {
                (props.selectedNum === props.number) ?
                <View style={styles.buttonFill}/>
                : null
            }
            </View>
        </TouchableOpacity>
    );
  }

  const styles = StyleSheet.create({
    button: {
        height: 30,
        width: 30,
        borderRadius: 15,
        borderWidth: 1,
        borderColor: '#000',
        alignItems: 'center',
        justifyContent: 'center',
        margin: 7        
    },
    buttonFill: {
        height: 12,
        width: 12,
        borderRadius: 6,
        backgroundColor: '#000',
    }
  });

export default RadioButton;