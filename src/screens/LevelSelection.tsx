import { Modal, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default (props) => {
  return (
    <Modal
      onRequestClose={props.onCancel}
      visible={props.isVisible}
      animationType="slide"
      transparent={true}
    >
      <View style={styles.frame}>
        <View style={styles.container}>
          <Text style={styles.title}>Selecione o Nível de Dificuldade:</Text>
          {[
            { label: "Fácil", value: 0.1, style: styles.bgEasy },
            { label: "Médio", value: 0.2, style: styles.bgNormal },
            { label: "Difícil", value: 0.3, style: styles.bgHard },
          ].map((level, idx) => (
            <TouchableOpacity
              key={level.label}
              style={[styles.button, level.style]}
              onPress={() => props.onLevelSelected(level.value)}
            >
              <Text style={styles.buttonText}>{level.label}</Text>
            </TouchableOpacity>
          ))}
          {props.children}
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  frame: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(0,0,0,0.6)",
  },
  container: {
    backgroundColor: "#EEE",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
    borderRadius: 10,
    width: "80%",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
  },
  button: {
    backgroundColor: "#999",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    marginBottom: 20,
  },
  buttonText: {
    color: "#FFF",
    fontSize: 18,
    fontWeight: "bold",
  },
  bgEasy: {
    backgroundColor: "green",
  },
  bgNormal: {
    backgroundColor: "orange",
  },
  bgHard: {
    backgroundColor: "red",
  },
});
