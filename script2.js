const users = [
  { id: 4, name: "Diana", age: 57 },
  { id: 1, name: "Alice", age: 35 },
  { id: 2, name: "Bob", age: 30 },
  { id: 3, name: "Charlie", age: 22 },
  { id: 3, name: "charlie1", age: 22 },
  { id: 4, name: "Dianaaa", age: 57 },
  { id: 5, name: "Dianaaa", age: 10 },
];

const Ans = users.findLast((item) => item.age > 22);
console.log(Ans);
//find method hamesh first value ko nikal ke data hai based condition par//
//findLast method hamesha last value ko nikal ke dega based condition//
