export function betterGet(path) {
  return fetch(
    "https://mwq82ie5x0.execute-api.eu-west-1.amazonaws.com/Prod/publish",
    {
      method: "GET",
      headers: new Headers({
        Accept: 'application/json',
        'Content-Type': 'application/json',
      }),
      credentials: 'include'
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

export function betterPost(dataObject) {
  return fetch(
    "https://mwq82ie5x0.execute-api.eu-west-1.amazonaws.com/Prod/publish",
    {
      method: "POST",
      headers: new Headers({
        Accept: 'application/json',
        'Content-Type': 'application/json',
      }),
      credentials: 'include',
      body: JSON.stringify(dataObject),
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
