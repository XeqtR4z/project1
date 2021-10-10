"use strict";

const persone = {
    name: "Alex",
    age: 25,
    get usetAge(){
        return this.age;
    },
    set usetAge(num){
        this.age = num;
    }
};
persone.usetAge = 10;
console.log(persone.usetAge);