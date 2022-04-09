import axios from "axios";

export const getUser = async (id) => {
  const { data: user } = await axios.get(`https://frag.world/api/users/${id}`);
  return user;
};
