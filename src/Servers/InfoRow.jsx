import React from "react";
import { Box } from "grommet";

export default ({
  favoriteControl,
  playersInfo,
  mapInfo,
  controls,
  ...restProps
}) => {
  return (
    <Box direction="row" align="center" width="100%" {...restProps}>
      <Box width="50px">{favoriteControl}</Box>
      <Box fill pad={{ horizontal: "small" }}>
        {mapInfo}
      </Box>
      <Box width="130px">{playersInfo}</Box>
      <Box align="flex-end" width="70px">
        {controls}
      </Box>
    </Box>
  );
};
