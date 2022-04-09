import axios from "axios";

export const getGames = async () => {
  const res = await axios.get("https://frag.world/api/games");
  return res?.data;
};
