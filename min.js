const message =`I love Javascript`;

const itrString = message[Symbol.iterator]();

console.log(itrString.next())
console.log(itrString.next())
console.log(itrString.next())
console.log(itrString.next())
console.log(itrString.next())
console.log(itrString.next())
// ... more  to  complet the string 