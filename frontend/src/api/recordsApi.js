import axios from "axios";

const API = "http://localhost:5000/records";

export const fetchRecords = async () => {
  const res = await axios.get(API, {
    headers: { token: localStorage.token }
  });
  return res.data;
};

export const createRecord = async (form) => {
  await axios.post(API, form, {
    headers: { token: localStorage.token }
  });
};

export const removeRecord = async (id) => {
  await axios.delete(`${API}/${id}`, {
    headers: { token: localStorage.token }
  });
};