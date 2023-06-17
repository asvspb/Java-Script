let cypher1 = 5; //?
let cypher2 = 10; //?
let cypher3 = cypher1; //?

cypher3 += 1 //?



let object1 = { name: `asv`, password: `secure` } //?
let object2 = object1 //?
let object3 = Object.assign({}, object1)//?
let object4 = { ...object1 } //?
let object5 = JSON.parse(JSON.stringify(object1)) //?
object2.password = 'hacked' //?


console.log(`1`, object1);
console.log(`2`, object2);
console.log(`3`, object3);
console.log(`4`, object4);
console.log(`5`, object5);

function sameobjectect(objectect1, objectect2) {
    const sameobjectect = Object.is(objectect1, objectect2)
    return sameobjectect
}

// sameobjectect(object1, object2) //?

//Evaluate these:
//#1
// [2] === [2]
// { } === {}

//#2 what is the value of property a for each object.
const ob1 = { a: 5 }; //?
const ob2 = ob1;//?
const ob3 = ob2;//?
const ob4 = { a: 5 };//?
ob1.a = 4;//?


//#3 create two classes: an Animal class and a Mamal class.
// create a cow that accepts a name, type and color and has a sound method that moo's her name, type and color.
