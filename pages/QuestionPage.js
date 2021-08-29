import React, { useState } from "react";
import { StyleSheet, ScrollView, View, TouchableOpacity, Text, Modal, Pressable } from "react-native";
import Question from "../components/Question";
import BottomNavBar from "../components/BottomNavBar";

const QuestionPage = ({ navigation }) => {
    const [total, setTotal] = useState(0);
    const [score, setScore] = useState([]);
    const [modalVisible, setModalVisible] = useState(false);

    function receiveData(childData, qNum) {
        let newState = [...score];
        let newObj = {qNumber: qNum, answer: childData};
        var i = newState.findIndex(o => o.qNumber === qNum);
        if (newState[i]) { newState[i] = newObj } else { newState.push(newObj) };

        console.log(newState);
        setScore(newState);
    }

    function calculateTotal() {
        if (score.length === 5){
            let total = 0;
            score.forEach((elem)=>{
                console.log(elem.answer);
                total += elem.answer;
            })
            setTotal(total);
            navigation.navigate("TaskPage");
        } else {
            setModalVisible(true);
        }

    }

    return (
        <>
        <ScrollView style={styles.view}>
            <View style={styles.container}>
                    <Question 
                        qNum={1}
                        question="1. Little interest or pleasure in doing things"
                        sendToQuestionPage={receiveData}

                    />
                    <Question 
                        qNum={2}
                        question="2. Feeling down, depressed, or hopeless"
                        sendToQuestionPage={receiveData}
                    />
                    <Question 
                        qNum={3}
                        question="3. Trouble falling or staying asleep, or sleeping too much"
                        sendToQuestionPage={receiveData}
                    /> 
                    <Question 
                        qNum={4}
                        question="4. Feeling tired or having little energy"
                        sendToQuestionPage={receiveData}
                    />
                    <Question 
                        qNum={5}
                        question="5. Poor appetite or overeating"
                        sendToQuestionPage={receiveData}
                    />

                <TouchableOpacity style={styles.submitButton} onPress={calculateTotal}>
                    <Text style={styles.submitBtnText}>Submit</Text>
                </TouchableOpacity>

                {/* <Text>{total}</Text> */}
                <Modal
                    transparent={true} 
                    visible={modalVisible}
                >
                    <View style={styles.centeredView}>
                        <View style={styles.modalView}>
                            <Text style={styles.message}>You missed some questions.{"\n"}Please answer every question.</Text> 

                            {/* <View style={styles.buttonsContainer}> */}
                                <Pressable
                                    style={[styles.button]}
                                    onPress={() => {
                                        setModalVisible(!modalVisible);
                                    }}
                                >
                                    <Text style={styles.buttonText}>OK</Text>
                                </Pressable>
                            {/* </View> */}
                        </View>
                    </View>
                </Modal>
            </View>
        </ScrollView>
        <BottomNavBar navigation={navigation} />
        </>
    );
}

const styles = StyleSheet.create({
    view: {
        backgroundColor: "#c7fce4"
    },
    container: {
        position: "absolute",
        right: 10,
        left: 10,
        top: 10,
        bottom: 10,
    },
    viewStyle: {
        flexDirection: "row",
        width: "80%",
        height: "30%",
        alignSelf: "center",
        marginTop: 10,
    },
    submitButton: { 
        alignItems: "center",
        backgroundColor: "#ff6585",
        padding: 20,
        borderRadius: 10, 
        margin: 10,
        marginHorizontal: 12, //
        marginBottom: 2.5,
        marginTop: -5
    },
    submitBtnText: {
        color: "#ffffff",
        fontWeight: "bold",
        fontSize: 16,
    },
    iconImage: {
        width: 50,
        height: 50,
        resizeMode: "stretch",
    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 10,
      },
      modalView: {
        height: 350,
        width: 280,
        marginTop: 10,
        marginBottom: 50,
        backgroundColor: "#6b63ff",
        borderRadius: 20,
        paddingVertical: 40,
        paddingHorizontal: 20,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
        overflow: 'hidden',
      },
      modalText: {
        marginTop: 33,
        marginBottom: 6.5,
        textAlign: "center",
        fontFamily: 'Nunito_800ExtraBold',
        fontSize: 30,
        lineHeight: 35
      },
      buttonsContainer: {
        flexDirection:'row',
        // flexWrap:'wrap',
        // marginTop: 50,
        // borderRadius: 10,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        width: '100%',
        overflow: 'hidden',
      },
      button: {
        height: 70,
        width: 280,
        marginTop: 140,
        justifyContent: 'center',
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        paddingVertical: 10,
        paddingHorizontal: 50,
        overflow: 'hidden',
        backgroundColor: "#ff6585"
      },
      buttonText: {
        color: "#ffffff",
        fontSize: 16,
        fontWeight: "bold",
        textAlign: "center"
      },
      message: {
        justifyContent: "center",
        color: "#ffffff",
        fontSize: 24,
        marginLeft: 10,
        fontWeight: "bold",
        textAlign: "left"
      }
});

export default QuestionPage;