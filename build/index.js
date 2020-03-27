"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var NumbersCollection_1 = require("./NumbersCollection");
var CharactersCollection_1 = require("./CharactersCollection");
// const collection = new NumbersCollection([145, 5, -12, 0])
// const sorter = new Sorter(collection)
// sorter.sort()
// console.log(collection.data)
// const charactersCollection = new CharactersCollection('sdefFFdsz')
// const sorter = new Sorter(charactersCollection)
// sorter.sort() 
// console.log(charactersCollection.data)
var charactersCollection = new CharactersCollection_1.CharactersCollection('sdefFFdsz');
charactersCollection.sort();
console.log(charactersCollection.data);
var collectionNumbers = new NumbersCollection_1.NumbersCollection([145, 5, -12, 0]);
collectionNumbers.sort();
console.log(collectionNumbers.data);
