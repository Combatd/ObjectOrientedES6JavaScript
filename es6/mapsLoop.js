let scores = new Map([
  ['maths', 90],
  ['physics', 95],
  ['chemistry', 80]
]);


for(let key of scores.keys()) {
  console.log(key);
  console.log(scores.get(key));
}

for (let v of scores.values()) {
  console.log(v);
}

for (let entry of scores.entries()) {
  console.log(entry);
  console.log(entry[0], entry[1]);
}

for (let [k, v] of scores.entries()) {
  console.log(k, v);
}