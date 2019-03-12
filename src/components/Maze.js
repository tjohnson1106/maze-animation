import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

import { GridItem } from "./animation-data/GridItem";

class Maze extends Component {
  animationInteval = null;

  state = {
    position: "RIGHT"
  };

  componentDidMount() {
    this.animationInteval = setInterval(() => {
      this.setState(
        {
          position: this.state.position === "RIGHT" ? "LEFT" : "RIGHT"
        },
        2000
      );
    });
  }

  componentWillUnmount() {
    clearInterval(this.animationInteval);
    this.animationInteval = null;
  }

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
