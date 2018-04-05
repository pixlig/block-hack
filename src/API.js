export function getMarket() {
  return fetch(
    "https://mwq82ie5x0.execute-api.eu-west-1.amazonaws.com/Prod/getMarketOverview",
    {
      method: "POST",
      headers: new Headers({
        Accept: 'application/json',
        'Content-Type': 'application/json',
      }),
      credentials: 'include',
      mode: 'cors',
      body: JSON.stringify({ "marketName": "1H8Tcu3y4Fft8KelagMarket42" }),
    })
    .then(response =>
      response.json().then(json => {
        if (!response.ok) {
          let errors = json.errors || ['Unkown Error'];
          throw { errors, json };
        } else {
          return json;
        }
      })
    )
    .catch((err) => {
      console.log("Big error: " + err)
    });
}

export function getReport() {
  return fetch(
    "https://mwq82ie5x0.execute-api.eu-west-1.amazonaws.com/Prod/getInfo",
    {
      method: "POST",
      headers: new Headers({
        Accept: 'application/json',
        'Content-Type': 'application/json',
      }),
      mode: 'cors',
      body: JSON.stringify({ "streamName": "13pER3GZmVPQUdM8ipjEnergySurvey" }),
    })
    .then(res => res.json())
    .catch(error => console.error('Error:', error))
    .then(response => response["report"]);
}

export function publishOffer(address, quantity, price) {
  return fetch(
    "https://mwq82ie5x0.execute-api.eu-west-1.amazonaws.com/Prod/publish",
    {
      method: "POST",
      headers: new Headers({
        Accept: 'application/json',
        'Content-Type': 'application/json',
      }),
      credentials: 'include',
      body: JSON.stringify({address, quantity, price}),
      mode: 'cors',
    })
    .then(response =>
      response.json().then(json => {
        if (!response.ok) {
          let errors = json.errors || ['Unkown Error'];
          throw { errors, json };
        } else {
          return json;
        }
      })
    )
    .catch((err) => {
      console.log("Big error: " + err)
    });
}

export function publishRequest(address, quantity) {
  return fetch(
    "https://mwq82ie5x0.execute-api.eu-west-1.amazonaws.com/Prod/publish",
    {
      method: "POST",
      headers: new Headers({
        Accept: 'application/json',
        'Content-Type': 'application/json',
      }),
      credentials: 'include',
      body: JSON.stringify({address, quantity}),
      mode: 'cors',
    })
    .then(response =>
      response.json().then(json => {
        if (!response.ok) {
          let errors = json.errors || ['Unkown Error'];
          throw { errors, json };
        } else {
          return json;
        }
      })
    )
    .catch((err) => {
      console.log("Big error: " + err)
    });
}
