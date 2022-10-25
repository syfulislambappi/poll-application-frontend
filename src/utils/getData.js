const getData = async (uri) => {
  const bufferData = await fetch(uri, { method: "GET" });
  const data = await bufferData.json();
  return data;
};

export default getData;
