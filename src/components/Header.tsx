import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Flag from "./Flag";

export default (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.flagContainer} />
      <TouchableOpacity onPress={props.onFlagPress} style={styles.flagButton}>
        <Flag bigger />
      </TouchableOpacity>
      <Text style={styles.flagsLeft}>= {props.flagsLeft}</Text>
      <TouchableOpacity onPress={props.onNewGame} style={styles.button}>
        <Text style={styles.buttonText}>Novo Jogo</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        backgroundColor: "#EEE",
        alignItems: "center",
        justifyContent: "space-between",
        paddingVertical: 16,
        paddingHorizontal: 24,
        minHeight: 70,
    },
    flagContainer: {
        flexDirection: "row",
        alignItems: "center",
    },
    flagButton: {
        marginRight: 8,
        minWidth: 36,
        alignItems: "center",
        justifyContent: "center",
    },
    button: {
        backgroundColor: "#999",
        paddingVertical: 8,
        paddingHorizontal: 16,
        borderRadius: 8,
        marginLeft: 16,
    },
    buttonText: {
        color: "#FFF",
        fontSize: 18,
        fontWeight: "bold",
    },
    flagsLeft: {
        fontSize: 28,
        fontWeight: "bold",
        marginLeft: 8,
        color: "#333",
    },
});
