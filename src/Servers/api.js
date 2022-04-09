import axios from "axios";

export const getServers = async (params) => {
  const res = await axios.get("https://frag.world/api/servers", {
    params
  });
  return res?.data;
};
