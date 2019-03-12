import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

import { GridItem } from "./animation-data/GridItem";

class Maze extends Component {
  state = {};

  render() {
    return (
      <View style={styles.root}>
        <GridItem pose={"RIGHT"} style={styles.gridItem} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  gridItem: {
    backgroundColor: "gold",
    borderWidth: 1,
    borderColor: "#333",
    width: 200,
    height: 200
  }
});

export default Maze;
