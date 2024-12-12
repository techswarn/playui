import axios from "axios";

//Set up base back end URL
let baseURL = "http://127.0.0.1:8001/api/v1";

const makeRequest = axios.create({
  baseURL: baseURL,
});

const fetchData = async (path, req) => {
  const url = `${baseURL}${path}`;
  console.log(url);
  console.log(req.method);
  console.log(req.payload);
  let response;

  try {
    response = await fetch(url, {
      method: req?.method, // *GET, POST, PUT, DELETE, etc.
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(req.payload), // body data type must match "Content-Type" header
    });
    return response.json();
  } catch (err) {
    console.log(err);
    return err;
  }
};

export default fetchData;