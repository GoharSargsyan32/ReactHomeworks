const arr = [1, 1, 5, 6, 7, 7, 8, 8, 8, 9, 3, 4, 4];

const removeDuplicates = (arr) => {
  let set = new Set(arr);
  let myArr = Array.from(set);
  return myArr;
};

console.log(removeDuplicates(arr));

const list = [
  {
    key: "a",
    value: "1",
  },
  {
    key: "a",
    value: "2",
  },
  {
    key: "b",
    value: "1",
  },
  {
    key: "c",
    value: "1",
  },
  {
    key: "c",
    value: "1",
  },
  {
    key: "c",
    value: "2",
  },
];

let obj = {};
for (let i = 0; i < list.length; i++) {
  if (!obj[list[i].key]) {
    obj[list[i].key] = {
        key: list[i].key,
        count: 0,
        values: new Set()
    }
  }
  if (!obj[list[i].key].values.has(list[i].value)) {
    obj[list[i].key].values.add(list[i].value);
    obj[list[i].key].count++; 
  }
};


const newList = Object.values(obj).map(item => ({
    key: item.key,
    count:item.count,
    values: Array.from(item.values)
}));
console.log(newList);
