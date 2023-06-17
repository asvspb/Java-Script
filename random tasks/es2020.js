// Exercise 1: what do you think the MIN_SAFE_INTEGER is?
console.log(Number.MAX_SAFE_INTEGER) //?
console.log(Number.MIN_SAFE_INTEGER) //?

// Exercise 2: why does this throw an error? How can you fix it?
// @ts-ignore
3n + 4n + 1n

// Exercise 3: Clean up this code using optional chaining
let will_pokemon = {
    pikachu: {
        species: 'Mouse Pokemon',
        height: 0.4,
        weight: 6,
        power: 'lightning',
        friend: {
            charizard: {
                species: 'Dragon Pokemon',
                height: 1.7,
                weight: 90.5,
                power: 'fire'
            }
        }
    }
}

let andrei_pokemon = {
    raichu: {
        species: 'Mouse Pokemon',
        height: 0.8,
        weight: 30,
        power: ''
    }
}

if (andrei_pokemon && andrei_pokemon.raichu && will_pokemon
    && will_pokemon.pikachu && will_pokemon.pikachu.friend
    && will_pokemon.pikachu.friend.charizard) {
    console.log('fight!')
} else {
    console.log('walk away...')
}


// Exercise 4: What do these each output?
console.log(false ?? 'hellooo')
console.log(null ?? 'hellooo')
console.log(null || 'hellooo')
console.log((false || null) ?? 'hellooo')
console.log()

const az = 'no' ?? (null ?? (false || 'yes'));
const bz = 42;
const cz = undefined;
const dz = 'hello';
const zz = false;
const tz = true;
console.log(null ?? 'справа');
console.log(undefined || 'справа');

let coolarr = [1, 2, 'yes', true, null]
coolarr[coolarr.length - 2] //?
coolarr.at(-2) //?

console.log(0 || 'yes');
console.log(true ?? 'yes');
console.log(null ?? 'yes');
console.log(false || 'yes');