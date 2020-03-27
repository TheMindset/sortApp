# Sort APP

## Overview
The main purpose of this application is to focus on design pattern in typecript,
i.e. How to improve the design of a algorithm implemented in an application.

## Design Pattern
Through this application I will learn how to implement an algorithm and improve it as we go along.

### Union type & Type Guards

##### First implementation

```typescript
class Sorter {
  constructor(public collection: number[] | string) {}

  // Seules les méthodes et propriétes accessible aux "
  // types number[] et string" sont accessible

  sort(): void {
    const { length } = this.collection

    for (let i = 0; i < length; i++) {
      for (let j = 0; j < length - i - 1; j++) {

        if (this.collection[j] > this.collection[j + 1]) {
          const leftHand = this.collection[j]
          this.collection[j] = this.collection[j + 1]
          this.collection[j + 1] = leftHand
        }

      }
    }
  }
}
```
Lorsque "Union Type" est utilisé comme dans l'exemple ci-dessus, 
**seules les méthodes et propriétés aux deux types seront accessibles. En effet typescript rend les autres inaccessible**.

Pour rémédier à cette sitution les "Types Guards" sont une solution. Qui vont nous permettre de spécifier dans chaque situation, ce que nous allons faire. 

##### Second implementation

```typescript
class Sorter {
  constructor(public collection: number[] | string) {}

  sort(): void {
    const { length } = this.collection

    for (let i = 0; i < length; i++) {
      for (let j = 0; j < length - i - 1; j++) {

        // If collection is an array ==> 'Type Guards'
        if (this.collection instanceof Array) {
          // Tous les méthodes et propriétés liées au type Array sont de nouveau accessibles 

          if (this.collection[j] > this.collection[j + 1]) {
            const leftHand = this.collection[j]
            this.collection[j] = this.collection[j + 1]
            this.collection[j + 1] = leftHand
          }
        }

        // If collection is a string ==> 'Type Guards'
        if (typeof this.collection === 'string') {
          // Tous les méthodes et propriétés liées au type 'string' sont de nouveau accessibles 
          ...
          ...
        }
      }
    }
  }
}
```

#### Types Guards, quand les utiliser ?

| Types Guards | When to use it ? |
| -------------|:----------------:|
| typeof | Primitive types: boolean, number, string, symbol |
| instanceof      | Every other value composed with a contructor function: Array, Date, class name (for exemple: Sorter), etc...     |


### Use 'abstract class' instead of interface.

```typescript
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

  /* "get" it's an accessor. 
    An another way to provide access to the properties or method of an object
  */
  get length(): number {
    return this.data.length
  }
}
```

Cette l'example ci-dessus. **Nous avons utilisé 'abstract' à la place d'une interface car nous voulons réutiliser la fonction "sort()" qui depend d'autres fonctions dans plusieurs class à l'avenir.**

### Abstract Classes vs Interfaces

> Interfaces: crée un contrat entre plusieurs classes. A utiliser lorsque les classes sont différentes (ex: Company, User, Vehicle ==> ces classes peuvent avoir en commun le "name", une "adresse", etc...). Les interfaces ne nécessitent pas qu'il y est une relation entre les classes. Chaque class peut fonctionner séparément

> Abstract classes: crée un contrat en plusieurs classes. A utiliser lorsque les classes sont liées (ex: Sorter, NumberCollections, CharactersCollection ==> ces trois classes sont liées. La class Sorter a pour objectif de trier des "number[]" ou des "string"). Ou lorsque nous voulons utiliser une fonction d'une "class parent" dans des "class enfants". L'abstraction rend les classes liées les uns aux autres.

