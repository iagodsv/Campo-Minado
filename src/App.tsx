import { Alert, StyleSheet, View } from "react-native";
import MineField from "./components/MineField";
import {
  cloneBoard,
  createMinedBoard,
  flagsUsed,
  hadExplosion,
  invertFlag,
  openField,
  showMines,
  wonGame,
} from "./functions";
import params from "./params";

import React, { useState } from "react";
import Header from "./components/Header";
import LevelSelection from "./screens/LevelSelection";

export default function App() {
  const minesAmount = () => {
    const cols = params.getColumnsAmount();
    const rows = params.getRowsAmount();
    return Math.ceil(cols * rows * params.difficultLevel);
  };

  const createState = () => {
    const cols = params.getColumnsAmount();
    const rows = params.getRowsAmount();
    return {
      board: createMinedBoard(rows, cols, minesAmount()),
      won: false,
      lost: false,
      showLevelSelection: false,
      flagsLeft: minesAmount(),
    };
  };

  const onOpenField = (row, column) => {
    const board = cloneBoard(state.board);
    openField(board, row, column);
    const lost = hadExplosion(board);
    const won = wonGame(board);
    if (lost) {
      showMines(board);
      Alert.alert("Perdeu", "Que pena! Você perdeu :(");
    }
    if (won) {
      Alert.alert("Parabéns", "Você venceu!");
    }

    setState({ board, lost, won, showLevelSelection: lost || won, flagsLeft: 0 });
  };

  const [state, setState] = useState(createState());

  const onSelectField = (row, column) => {
    const board = cloneBoard(state.board);
    invertFlag(board, row, column);
    const won = wonGame(board);
    if (won) {
      Alert.alert("Parabéns", "Você venceu!");
    }
    setState({ board, won, showLevelSelection: won });
  };

  const onLevelSelected = (level) => {
    params.difficultLevel = level;
    setState(createState());
  };

  return (
    <View style={styles.container}>
      <LevelSelection
      isVisible={state.showLevelSelection}
      onLevelSelected={onLevelSelected}
      onCancel={() => setState({ ...state, showLevelSelection: false })}
      />
      <Header
      flagsLeft={minesAmount() - flagsUsed(state.board)}
      onNewGame={() => setState(createState())}
      onFlagPress={() => setState({ ...state, showLevelSelection: true })}
      />
      <View style={styles.board}>
      <MineField
        board={state.board}
        onOpenField={onOpenField}
        onSelectField={onSelectField}
      />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  welcome: {
    fontSize: 20,
    fontWeight: "bold",
    alignItems: "center",
    color: "#000",
  },
  instructions: {
    textAlign: "center",
    color: "#333",
    marginBottom: 5,
  },
  board: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#AAA",
    padding: 5,
  },
});
