const arr1 = [1, 1, 1, 1, 4, 2, 5];
const arr2 = [1, 2, 2, 4, 5, 7, 1, 4, 2, 0, 5];
const arr3 = [4512, 463, 354, 777, 3421, 0, 777, 3213, 3213, 0, 777];
const trollingArr = [
  'olololololo',
  'trololo',
  'trololololo',
  'ahahah',
  'ohohoho',
  'trololo',
  4,
  5,
  null,
];

const mostHits = arr => {
  const valueMap = new Map();
  for (const elem of arr) {
    if (valueMap.has(elem)) {
      valueMap.set(elem, valueMap.get(elem) + 1);
    } else {
      valueMap.set(elem, 1);
    }
  }
  
  let hits = 0;
  let currentKey;
  valueMap.forEach((value, key) => {
    if (value > hits) {
      hits = value;
      currentKey = key;
    }
  });

  return currentKey;
};

console.log(mostHits(arr1));
console.log(mostHits(arr2));
console.log(mostHits(arr3));
console.log(mostHits(trollingArr));
