async function sendGetRequest(url) {
  const response = await fetch(url);
  const data = await response.text();
  console.log(data);
}

sendGetRequest();