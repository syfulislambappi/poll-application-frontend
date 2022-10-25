const getSingleData = async (uri) => {
  const data = await fetch(uri, { method: "GET" });
  const result = await data.json();
  return result;
};

export default getSingleData;
