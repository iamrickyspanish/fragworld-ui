import React from "react";
import { Box, Button } from "grommet";
import { Play } from "grommet-icons";
import ServerInfoRow from "./InfoRow";
import FavoriteIcon from "Favorite/Icon";

const Item = ({
  data,
  onToggleFavorite,
  isFavorite,
  disableFavorite,
  full,
  onToggleFull,
  ...restProps
}) => {
  return (
    <Box {...restProps} background="white" direction="column">
      <ServerInfoRow
        favoriteControl={
          <FavoriteIcon
            onClick={() => onToggleFavorite(data.serverId)}
            active={isFavorite}
            disabled={disableFavorite}
          />
        }
        mapInfo={data.map}
        playersInfo={`${data.players}/${data.maxPlayers}`}
        controls={<Button plain icon={<Play />} />}
      />
      <Box>
        {data.name} <br />
        <small>
          {data.host}:{data.port}
        </small>
      </Box>
    </Box>
  );
};

export default Item;
