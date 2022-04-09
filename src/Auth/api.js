import axios from "axios";

export const login = async (credentials) => {
  const res = await axios.post("https://frag.world/api/auth/login", {
    credentials
  });
  return res?.data;
};

export const logout = async () => {
  const res = await axios.get("https://frag.world/api/auth/logout");
  return res?.data;
};

export const join = async (data) => {
  const res = await axios.post("https://frag.world/api/auth/join", data);
  return res?.data;
};
