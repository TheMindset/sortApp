import { Sorter } from './Sorter'

// export class CharactersCollection {
//   constructor(public data: string) {}

//   swap(leftIndex: number, rightIndex: number):void {
//     const characters = this.data.split('')

//     const leftHand = characters[leftIndex]
//     characters[leftIndex] = characters[rightIndex]
//     characters[rightIndex] = leftHand

//     this.data = characters.join('')
//   }

//   compare(leftIndex: number, rightIndex: number): boolean {
//     return this.data[leftIndex].toLowerCase() > this.data[rightIndex].toLowerCase()
//   }

//   get length(): number {
//     return this.data.length
//   }
// }

export class CharactersCollection extends Sorter{
  constructor(public data: string) {
    super()
  }

  swap(leftIndex: number, rightIndex: number):void {
    const characters = this.data.split('')

    const leftHand = characters[leftIndex]
    characters[leftIndex] = characters[rightIndex]
    characters[rightIndex] = leftHand

    this.data = characters.join('')
  }

  compare(leftIndex: number, rightIndex: number): boolean {
    return this.data[leftIndex].toLowerCase() > this.data[rightIndex].toLowerCase()
  }

  get length(): number {
    return this.data.length
  }
}