const mergeSort = require("./0049");

test(`mergeSort([4, 20, 12, 10, 7, 9])`, () => {
  expect(mergeSort([4, 20, 12, 10, 7, 9])).toEqual([4, 7, 9, 10, 12, 20]);
});

test(`mergeSort([0, -10, 7, 4]))`, () => {
  expect(mergeSort([0, -10, 7, 4])).toEqual([-10, 0, 4, 7]);
});

test(`mergeSort([1, 2, 3])`, () => {
  expect(mergeSort([1, 2, 3])).toEqual([1, 2, 3]);
});

test(`mergeSort([])`, () => {
  expect(mergeSort([])).toEqual([]);
});

const nums = [
  4, 3, 5, 3, 43, 232, 4, 34, 232, 32, 4, 35, 34, 23, 2, 453, 546, 75, 67, 4342,
  32,
];

test(`mergeSort(nums)`, () => {
  expect(mergeSort(nums)).toEqual([
    2, 3, 3, 4, 4, 4, 5, 23, 32, 32, 34, 34, 35, 43, 67, 75, 232, 232, 453, 546,
    4342,
  ]);
});

const kitties = ["LilBub", "Garfield", "Heathcliff", "Blue", "Grumpy"];

function strComp(a, b) {
  if (a < b) {
    return -1;
  } else if (a > b) {
    return 1;
  }
  return 0;
}

test(`mergeSort(kitties, strComp)`, () => {
  expect(mergeSort(kitties, strComp)).toEqual([
    "Blue",
    "Garfield",
    "Grumpy",
    "Heathcliff",
    "LilBub",
  ]);
});

const moarKittyData = [
  {
    name: "LilBub",
    age: 7,
  },
  {
    name: "Garfield",
    age: 40,
  },
  {
    name: "Heathcliff",
    age: 45,
  },
  {
    name: "Blue",
    age: 1,
  },
  {
    name: "Grumpy",
    age: 6,
  },
];

function oldestToYoungest(a, b) {
  return b.age - a.age;
}

test(`mergeSort(moarKittyData, oldestToYoungest)`, () => {
  expect(mergeSort(moarKittyData, oldestToYoungest)).toEqual([
    { name: "Heathcliff", age: 45 },
    { name: "Garfield", age: 40 },
    { name: "LilBub", age: 7 },
    { name: "Grumpy", age: 6 },
    { name: "Blue", age: 1 },
  ]);
});
