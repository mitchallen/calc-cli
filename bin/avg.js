#! /usr/bin/env node

var sum = 0

process.argv.slice(2).forEach( arg => 
    sum += parseInt(arg, 10) || 0
)

let avg = sum / (process.argv.length - 2)

console.log(avg)
