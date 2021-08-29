import React, { useState } from "react";
import { StyleSheet, ScrollView, View, TouchableOpacity, Text } from "react-native";
// import RadioButton from "./RadioButton";
import { RadioButton } from 'react-native-paper';

const Question = (props) => {
  const [selectedNum, setSelectedNum] = useState(-1);
  const [selected, setSelected] = useState(false);
  const [value, setValue] = React.useState(-99999999);

  function sendNumber(newValue) {
    props.sendToQuestionPage(parseInt(newValue), props.qNum);
    console.log("qnum sent");
  }


  return (
    <>
    <View style={styles.questionContainer}>
      <Text style={styles.question}>{props.question}</Text>
      <View style={styles.viewStyle}>
        <RadioButton.Group onValueChange={newValue => {setSelected(!selected); sendNumber(newValue); setValue(newValue);  }} value={value}>
          <View style={styles.viewStyle}>
            <View>
              <Text>0</Text>
              <RadioButton.Android color="#6b63ff" value="0" />
            </View>
            <View>
              <Text>1</Text>
              <RadioButton.Android color="#6b63ff" value="1" />
            </View>
            <View>
              <Text>2</Text>
              <RadioButton.Android color="#6b63ff" value="2" />
            </View>
            <View>
              <Text>3</Text>
              <RadioButton.Android color="#6b63ff" value="3" />
            </View>
            <View>
              <Text>4</Text>
              <RadioButton.Android color="#6b63ff" value="4" />
            </View>
            <View>
              <Text>5</Text>
              <RadioButton.Android color="#6b63ff" value="5" />
            </View>
          </View>

        </RadioButton.Group>
      </View>
      <View style={styles.viewStyle}>
        {/* <View> */}
        {/* <Text style={styles.number}>0</Text> */}
        {/* <RadioButton 
          sendDataToParent={sendNumber}
          number={0}
          sendSelectedToParent={handleSelected}
          selectedNum={selectedNum}
          // selected={selected}
          // onPress={setSelectedNum(0)}
        />
        </View>
        <View>
        <Text style={styles.number}>1</Text>
        <RadioButton 
          sendDataToParent={sendNumber}
          number={1}
          sendSelectedToParent={handleSelected}
          selectedNum={selectedNum}
          // selected={selected}
          // onPress={setSelectedNum(0)}
        />
        </View>
        <View>
        <Text style={styles.number}>2</Text>
        <RadioButton 
          sendDataToParent={sendNumber}
          number={2}
          sendSelectedToParent={handleSelected}
          selectedNum={selectedNum}
          // selected={selected}
          // onPress={setSelectedNum(0)}
        />
        </View>
        <View>
        <Text style={styles.number}>3</Text>
        <RadioButton 
          sendDataToParent={sendNumber}
          number={3}
          sendSelectedToParent={handleSelected}
          selectedNum={selectedNum}
          // selected={selected}
        />
        </View>
        <View>
        <Text style={styles.number}>4</Text>
        <RadioButton 
          sendDataToParent={sendNumber}
          number={4}
          sendSelectedToParent={handleSelected}
          selectedNum={selectedNum}
          // selected={selected}
        />
        </View>
        <View>
        <Text style={styles.number}>5</Text>
        <RadioButton
          sendDataToParent={sendNumber} 
          number={5}
          sendSelectedToParent={handleSelected}
          selectedNum={selectedNum}
          // selected={selected}
        /> */}
        {/* </View> */}
      </View>
    </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    right: 10,
    left: 10,
    top: 10,
    bottom: 10,
  },
  viewStyle: {
    flex: 1,
    flexDirection: "row",
    height: "30%",
    alignSelf: "center",
    // marginBottom: 10,
    textAlign: "center",
    alignItems: 'center',
    justifyContent: 'center'
  },
  questionContainer: {
    margin: 12,
    marginBottom: 3,
    marginLeft: 15
  },
  question: {
    fontSize: 16,
    color: "#464646",
    fontWeight: "500",
    marginBottom: 22,
    lineHeight: "1.5em"
  },
  number: {
    textAlign: "center",
    width: "100%",
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 3,      
  },
  iconImage: {
    width: 50,
    height: 50,
    resizeMode: "stretch",
  },
});

export default Question;

// fd6584