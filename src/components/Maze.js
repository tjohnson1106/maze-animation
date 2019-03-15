import React, { Component } from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";

import { GridItem } from "./animation-data/GridItem";

const { width, height } = Dimensions.get("screen");

const LINE_WIDTH = 3;

const RATIO = height / width;

const ITEMS_PER_ROW = 6;

const SIZE = width / ITEMS_PER_ROW;

const ROWS = Math.round((RATIO * height) / SIZE);

const TOTAL_ITEMS = ITEMS_PER_ROW * ROWS;

const POSITIONS = ["LEFT", "RIGHT"];

const getRandomPosition = (arr = POSITIONS) => {
  return arr[Math.floor(Math.random() * arr.length)];
};

class Maze extends Component {
  animationInterval = null;

  state = {
    position: "RIGHT"
  };

  constructGrid = () => {
    return [...Array(TOTAL_ITEMS).keys()].map((index) => ({
      key: index,
      position: getRandomPosition()
    }));
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
        <GridItem pose={this.state.position} style={styles.gridItem}>
          <View style={styles.gridItemDiagonal}>{}</View>
        </GridItem>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff"
  },
  gridItem: {
    backgroundColor: "gold",
    borderWidth: 1,
    borderColor: "#333",
    width: SIZE,
    height: SIZE,
    alignItems: "center",
    justifyContent: "center"
  },
  gridItemDiagonal: {
    width: LINE_WIDTH,
    height: Math.sqrt(2) * SIZE,
    backgroundColor: "#333"
  }
});

export default Maze;
