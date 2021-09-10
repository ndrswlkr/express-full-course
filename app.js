const l = require('lodash')

let flat = l.flattenDeep([1,[[2],[3,4,5]],[6,7],8,9])

console.log(l.shuffle(flat))

let list = 'vorname andreas nachname walker strasse hinterwinkelstrasse nummer 3 ort selzach'.split(' ')
let person = l.kebabCase(list)
console.log(person)