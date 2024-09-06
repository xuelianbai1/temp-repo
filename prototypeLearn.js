// function Cat(asdf) {
//     this.asdf = asdf;
// }

// Cat.prototype.legs = 4;
// Cat.prototype.eyes = 2;
// Cat.prototype.tails = 1;
// Cat.prototype.ears = 2;
// Cat.prototype.teeth = 14;

class Cat {
    constructor(asdf) {
        this.asdf = asdf;
        this.legs = 4;
    }
    
}

class OtherCat extends Cat {
    constructor(asdf, age) {
        super(asdf)
        this.age = age
    }
}

const cat1 = new Cat("abc")
console.log(cat1.asdf) //abc
console.log(cat1.legs) //4

console.log('////////////////////////////')
const cat2 = new OtherCat("def", 3)
console.log(cat2.legs)
console.log(cat2.asdf)
console.log(cat2.age)




// function BritishShortHairCat() {
//     this.earlength = "short";
// }

// function SomeOtherCat(favfood) {
//     this.favfood = favfood;
// }


// Object.setPrototypeOf(BritishShortHairCat.prototype, Cat.prototype)
// Object.setPrototypeOf(SomeOtherCat.prototype, Cat.prototype)

// Object.setPrototypeOf(bshc, Cat.prototype)
// const soc = new SomeOtherCat('soc');

// console.log(bshc)
// console.log(bshc)
// console.log(bshc.earlength);
// console.log(bshc.legs);
// console.log(soc.legs);
// // function catFunc(name) {
// //     return {
// //         name,
// //         shout: function() {
// //             console.log(this.name)
// //         }
// //     }
// // // }

