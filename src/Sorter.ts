import { NumbersCollection } from './NumbersCollection'

interface Sortable {
  length: number
  compare(leftIndex: number, rigthIndex: number): boolean
  swap(leftIndex: number, rigthIndex: number): void
}

// export class Sorter {
//   /**
//    * This is too long
//    */
//   // collection: number[]

//   // constructor(collection: number[]) {
//   //   this.collection = collection
//   // }

//   /**
//    * The shorter version is exactly equivalent
//    */
//   constructor(public collection: Sortable) {}

//   sort(): void {
//     const { length } = this.collection

//     for (let i = 0; i < length; i++) {
//       for (let j = 0; j < length - i - 1; j++) {
//         if (this.collection.compare(j, j + 1)) {
//           this.collection.swap(j, j + 1)
//         }
//       }
//     }
//   }

  /**
   * Abstract class can't be instanciated
   */
  export abstract class Sorter {

    /**
     * Here we tell that.
     * This method (length, compare, swap) will be implemented by the child class in the futur
     * It is à promesse
     */
    abstract length: number
    abstract compare(leftIndex: number, rigthIndex: number): boolean
    abstract swap(leftIndex: number, rigthIndex: number): void

    sort(): void {
      const { length } = this
  
      for (let i = 0; i < length; i++) {
        for (let j = 0; j < length - i - 1; j++) {
          if (this.compare(j, j + 1)) {
            this.swap(j, j + 1)
          }
        }
      }
    }
  
}