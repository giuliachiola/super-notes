/**
 * ==============================
 * REDUCE
 * ==============================
*/

/**
 * Convert arrays into objects by id
 */

const people = [
  { id: 1, name: 'John', age: 20 },
  { id: 2, name: 'Emma', age: 23 },
  { id: 3, name: 'Wes', age: 45 },
  { id: 4, name: 'Bill', age: 60 },
  { id: 5, name: 'Jake', age: 13 },
]

const byId = (stored, current) => ({ ...stored, [current.id]: current })
const peopleById = people.reduce(byId, {})

console.log(peopleById)

/* output:
{
  "1": { "id": 1, "name": "John", "age": 20 },
  "2": { "id": 2, "name": "Emma", "age": 23 },
  "3": { "id": 3, "name": "Wes", "age": 45 },
  "4": { "id": 4, "name": "Bill", "age": 60 },
  "5": { "id": 5, "name": "Jake", "age": 13 }
}
*/

/**
 * Find the longest array
 */

const arr = [
  [1,2,3],
  [2,4,5,6,7,6],
  [1],
  [1,2]
]

const longest = (stored, current) => (stored.length > current.length) ? stored : current
const r = arr.reduce(longest, [])

console.log(r)

/*
  [ 2, 4, 5, 6, 7, 6 ]
*/