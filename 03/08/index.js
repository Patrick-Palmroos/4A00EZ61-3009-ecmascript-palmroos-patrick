const fetch = require("node-fetch");
var readlineSync = require("readline-sync");

function idInputToString() {
  let id = readlineSync.question("Give id: ");
  if (typeof id == Number) {
    id.toString();
  }
  return id;
}

async function fetchName(num) {
  let p = await fetch(`https://swapi.dev/api/people/${num}/`)
    .then((res) => res.json())
    .then((json) => json["name"]);

  return p;
}

async function fetchTitle(num) {
  const newUrl = `https://swapi.dev/api/people/${num}/`;
  let a = await fetch(newUrl)
    .then((res) => res.json())
    .then((json) => json["films"][0]);

  let b = await fetch(a)
    .then((res) => res.json())
    .then((json) => json["title"]);

  return b;
}

const id = idInputToString();
fetchName(id)
  .then((name) => console.log(`Name: ${name}`))
  .then(
    fetchTitle(id).then((title) => console.log(`First film title: ${title}`))
  );
