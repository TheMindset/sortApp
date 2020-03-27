import { NumbersCollection } from './NumbersCollection'
import { CharactersCollection } from './CharactersCollection'
import { Sorter } from './Sorter'

// const collection = new NumbersCollection([145, 5, -12, 0])
// const sorter = new Sorter(collection)
// sorter.sort()
// console.log(collection.data)

// const charactersCollection = new CharactersCollection('sdefFFdsz')
// const sorter = new Sorter(charactersCollection)
// sorter.sort() 
// console.log(charactersCollection.data)

const charactersCollection = new CharactersCollection('sdefFFdsz')
charactersCollection.sort()
console.log(charactersCollection.data)

const collectionNumbers = new NumbersCollection([145, 5, -12, 0])
collectionNumbers.sort()
console.log(collectionNumbers.data)
