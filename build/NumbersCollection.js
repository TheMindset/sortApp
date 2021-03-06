"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Sorter_1 = require("./Sorter");
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
var NumbersCollection = /** @class */ (function (_super) {
    __extends(NumbersCollection, _super);
    function NumbersCollection(data) {
        var _this = 
        // Instancition on the Sorter Class by super()
        _super.call(this) || this;
        _this.data = data;
        return _this;
    }
    NumbersCollection.prototype.swap = function (leftIndex, rigthIndex) {
        var leftHand = this.data[leftIndex];
        this.data[leftIndex] = this.data[rigthIndex];
        this.data[rigthIndex] = leftHand;
    };
    NumbersCollection.prototype.compare = function (leftIndex, rigthIndex) {
        return this.data[leftIndex] > this.data[rigthIndex];
    };
    Object.defineProperty(NumbersCollection.prototype, "length", {
        // length(): number {
        //   return this.data.length
        // }
        get: function () {
            return this.data.length;
        },
        enumerable: true,
        configurable: true
    });
    return NumbersCollection;
}(Sorter_1.Sorter));
exports.NumbersCollection = NumbersCollection;
