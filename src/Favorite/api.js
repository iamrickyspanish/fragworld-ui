import axios from "axios";

export const getFavorites = async (params = {}) => {
  const res = await axios.get("https://frag.world/api/favorites", {
    params
  });
  return res?.data;
};

export const createFavorite = async (data = {}) => {
  const res = await axios.post("https://frag.world/api/favorites", data);
  return res?.data;
};

export const deleteFavorite = async (id) => {
  const res = await axios.delete("https://frag.world/api/favorites/" + id);
  return res?.data;
};
