import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

import { GridItem } from "./animation-data/GridItem";

class Maze extends Component {
  animationInterval = null;

  state = {
    position: "RIGHT"
  };

  componentDidMount() {
    this.animationInterval = setInterval(() => {
      this.setState({
        position: this.state.position === "RIGHT" ? "LEFT" : "RIGHT"
      });
    }, 2000);
  }

  componentWillUnmount() {
    clearInterval(this.animationInterval);
    this.animationInterval = null;
  }

  render() {
    return (
      <View style={styles.root}>
        <GridItem pose={this.state.position} style={styles.gridItem} />
        <View style={styles.gridItemDiagonal}>{}</View>
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
  },
  gridItemDiagonal: {
    width: 3,
    height: Math.sqrt(2) * 200
  }
});

export default Maze;
