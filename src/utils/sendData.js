const postData = async (uri, requestOptions) => {
  try {
    const rawData = await fetch(uri, requestOptions);
    const result = await rawData.json();
    console.log(result);
  } catch (error) {
    console.log(error);
  }
};

export default postData;
