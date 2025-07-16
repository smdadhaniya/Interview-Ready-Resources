// Write a function to find the peoples with duplicate names in an array of objects.

const peoples = [
  { name: "Alice", age: 30 },
  { name: "Bob", age: 25 },
  { name: "Alice", age: 28 },
  { name: "Charlie", age: 35 },
];

const findDuplicateNames = (arr) => {
  const duplicateNames = arr.filter(
    (person, index, self) =>
      index !== self.findIndex((p) => p.name === person.name)
  );
  return duplicateNames;
};

console.log(`Duplicate names are:`, findDuplicateNames(peoples));
