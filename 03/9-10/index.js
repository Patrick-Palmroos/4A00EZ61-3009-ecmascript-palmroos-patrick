//This is very bad and slow :(

const fetch = require("node-fetch");
var arguments = process.argv;
arguments.splice(0, 2);

async function fetchAllTitles(num) {
  function asynFunc(resolve) {
    Promise.all([fetchName(num), fetchMovies(num)]).then((result) =>
      resolve(result)
    );
  }
  let p = new Promise(asynFunc);
  return p;
}

async function fetchName(num) {
  let p = await fetch(`https://swapi.dev/api/people/${num}/`)
    .then((res) => res.json())
    .then((json) => "name: " + json["name"]);

  return p;
}

async function fetchMovies(num) {
  let a = await fetch(`https://swapi.dev/api/people/${num}/`)
    .then((res) => res.json())
    .then((json) => json["films"]);

  let titleArr = [];

  for (let i = 0; i < a.length; i++) {
    await fetch(a[i])
      .then((res) => res.json())
      .then((json) => (titleArr[i] = json["title"]));
  }

  return titleArr;
}

async function fetchAll(args) {
  let allFetches = [];
  for (let i = 0; i < args.length; i++) {
    allFetches[i] = await fetchAllTitles(args[i]);
  }

  return allFetches;
}

fetchAll(arguments).then((data) => console.log(data));
