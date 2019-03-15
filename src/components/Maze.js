import React, { Component } from "react";
import { View, StyleSheet, Dimensions, StatusBar } from "react-native";

import { GridItem } from "./animation-data/GridItem";

const { width, height } = Dimensions.get("screen");
const LINE_WIDTH = 3;

const RATIO = height / width;

const ITEMS_PER_ROW = 10;

const SIZE = width / ITEMS_PER_ROW;

const ROWS = Math.round((RATIO * height) / SIZE);

const TOTAL_ITEMS = ITEMS_PER_ROW * ROWS;

const POSITIONS = ["LEFT", "RIGHT"];

const getRandomPosition = (arr = POSITIONS) => {
  return arr[Math.floor(Math.random() * arr.length)];
};

const Grid = ({ items }) =>
  items.map(({ key, position }) => (
    <GridItem pose={position} style={styles.gridItem}>
      <View style={styles.gridItemDiagonal} />
    </GridItem>
  ));

class Maze extends Component {
  animationInterval = null;
  constructor(props) {
    super(props);

    this.state = {
      items: this.constructGrid()
    };
  }

  constructGrid = () => {
    return [...Array(TOTAL_ITEMS).keys()].map((index) => ({
      key: index,
      position: getRandomPosition()
    }));
  };

  componentDidMount() {
    StatusBar.setHidden(true);
    this.animationInterval = setInterval(() => {
      this.setState({
        items: this.constructGrid()
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
        <Grid items={this.state.items} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "gold",
    flexDirection: "row",
    flexWrap: "wrap"
  },
  gridItem: {
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
