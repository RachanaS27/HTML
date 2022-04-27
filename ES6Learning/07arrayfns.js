var names = ["Mark","John","Vincy"];

names.push("Jancy")
names.push("Hema","Malini")

console.log(names)
console.log(names.pop())
console.log(names)

names.unshift("abc")
console.log(names)

names.unshift("James")
console.log(names)
names.shift()
console.log(names)

names.splice(2,2)
console.log(names)

names.splice(2,0,"Ram","Seetha")
console.log(names)
