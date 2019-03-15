import React from "react";

import posed from "react-native-pose";

export const GridItem = posed.View({
  RIGHT: { rotate: "45deg" },
  LEFT: { rotate: "-45deg" }
});
