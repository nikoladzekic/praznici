import axios from "axios";

const config = {
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Content-Type": "application/json",
  },
};

export const fetchData = async (url) => {
  const { data } = await axios.get(
    process.env.REACT_APP_API_BASE + url,
    config
  );
  return data;
};

export const patchData = async (url, updatedData) => {
  const { statusText } = await axios.patch(
    process.env.REACT_APP_API_BASE + url,
    { ...updatedData },
    config
  );

  return statusText;
};
