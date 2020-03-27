import { Sorter } from './Sorter'

// export class NumbersCollection {
//   constructor(public data: number[]) {}

//   swap(leftIndex: number, rigthIndex: number): void {
//     const leftHand = this.data[leftIndex]
//     this.data[leftIndex] = this.data[rigthIndex]
//     this.data[rigthIndex] = leftHand
//   }

//   compare(leftIndex: number, rigthIndex: number): boolean {
//     return this.data[leftIndex] > this.data[rigthIndex]
//   }

//   // length(): number {
//   //   return this.data.length
//   // }

//   get length(): number {
//     return this.data.length
//   }
// }

export class NumbersCollection extends Sorter {
  constructor(public data: number[]) {
    // Instancition on the Sorter Class by super()
    super()
  }

  swap(leftIndex: number, rigthIndex: number): void {
    const leftHand = this.data[leftIndex]
    this.data[leftIndex] = this.data[rigthIndex]
    this.data[rigthIndex] = leftHand
  }

  compare(leftIndex: number, rigthIndex: number): boolean {
    return this.data[leftIndex] > this.data[rigthIndex]
  }

  // length(): number {
  //   return this.data.length
  // }

  get length(): number {
    return this.data.length
  }
}