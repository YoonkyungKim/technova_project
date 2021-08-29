import { StyleSheet } from "react-native";

const commonStyles = StyleSheet.create({
    purpleBg: {
        backgroundColor: "#6b63ff",
    },
    pinkBg: {
        backgroundColor: "#ff6585"
    },
    lightPinkBg: {
        backgroundColor: "#ffc4d0"
    },
    mintBg: {
        backgroundColor: "#99eac8"
    },
    lightMintBg: {
        backgroundColor: "#bdf2db"
    },
    view: {
        alignItems: "left",
        textAlign: "left",
        margin: 10
    },
    taskText: {
        fontSize: 25,
        fontWeight: "bold",
        lineHeight: "1.5em",
        color: "#ffffff",
        textAlign: "left"
    },
    button: { 
        alignItems: "center",
        backgroundColor: "#ff6585",
        padding: 23,
        borderRadius: 10, 
        margin: 10,
        marginBottom: 2.5
    },
    btnText: {
        color: "#ffffff",
        fontWeight: "bold",
        fontSize: 20
    },
    listDivider: {
        alignSelf: "center",
        width: "50%",
        borderBottomColor: "#ffadbd",
        borderBottomWidth: 5,
        // StyleSheet.hairlineWidth
      },
});

export default commonStyles;
