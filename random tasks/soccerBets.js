
const gameList = {
    team1: 'Bayern Munich',
    team2: 'Borrussia Dortmund',
    players: [
        [
            'Neuer',
            'Pavard',
            'Martinez',
            'Alaba',
            'Davies',
            'Kimmich',
            'Goretzka',
            'Coman',
            'Muller',
            'Gnarby',
            'Lewandowski',
        ],
        [
            'Burki',
            'Schulz',
            'Hummels',
            'Akanji',
            'Hakimi',
            'Weigl',
            'Witsel',
            'Hazard',
            'Brandt',
            'Sancho',
            'Gotze',
        ],
    ],
    score: '4:0',
    scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
    date: 'Nov 9th, 2037',
    odds: {
        team1: 1.23,
        x: 3.25,
        team2: 6.5,
    },
};
/*
// 1. Create one player array for each team (variables 'players1' and 'players2')
// let players1 = gameList.players[0];//?
// let players2 = gameList.players[1];//?

const [players1, players2] = gameList.players; //?

// 2. The first player in any player array is the goalkeeper and the others are field players. For Bayern Munich (team 1) create one variable ('gk') with the goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10 field players
const [gk, ...fieldPlayers] = players1;
const [gk2, ...fieldPlayers2] = players2;


// 3. Create an array 'allPlayers' containing all players of both teams (22 players)
const allPlayers = [...players1, ...players2];

// 4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a new array ('players1Final') containing all the original team1 players plus 'Thiago', 'Coutinho' and 'Perisic'
const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];

// 5. Based on the game.odds object, create one variable for each odd (called 'team1', 'draw' and 'team2')
const { odds: { team1, draw, team2 } } = gameList;


// 6. Write a function ('printGoals') that receives an arbitrary number of player names (NOT an array) and prints each of them to the console, along with the number of goals that were scored in total (number of player names passed in)
const printGoals = function (...players) {
    console.log(`${players.length} goals were scored`);
}
printGoals(...gameList.scored);//?

// 7. The team with the lower odd is more likely to win. Print to the console which team is more likely to win, WITHOUT using an if/else statement or the ternary operator.
let resulT1 = (((team1 / team2) < 1 && gameList.team1) || gameList.team2); //?


*****************************************************************************************************************************

Let's continue with our football betting app!
1. Loop over the game.scored array and print each player name to the console, along with the goal number (Example: "Goal 1: Lewandowski")
2. Use a loop to calculate the average odd and log it to the console (We already studied how to calculate averages, you can go check if you don't remember)
3. Print the 3 odds to the console, but in a nice formatted way, exaclty like this:
    Odd of victory Bayern Munich: 1.33
    Odd of draw: 3.25
    Odd of victory Borrussia Dortmund: 6.5
Get the team names directly from the game object, don't hardcode them (except for "draw"). HINT: Note how the odds and the game objects have the same property names
BONUS: Create an object called 'scorers' which contains the names of the players who scored as properties, and the number of goals as the value. In this game, it will look like this:
    {
        Gnarby: 1,
        Hummels: 1,
        Lewandowski: 2
    }

*****************************************************************************************************************************
*/

// 1. Loop over the game.scored array and print each player name to the console, along with the goal number (Example: "Goal 1: Lewandowski")
for (let i = 0; i < gameList.scored.length; i++) {
    console.log(`Goal ${i + 1}: ${gameList.scored[i]}`);
}

// 2. Use a for loop to calculate the average odd and log it to the console
const odds = Object.values(gameList.odds);
Object.keys(gameList.odds);//?
let sum = 0;
for (let i = 0; i < odds.length; i++) {
    sum = + odds[i]; //?
}
console.log(`Average odds is: ${(sum / odds.length).toFixed(2)}`);

// 3. Print the 3 odds to the console, but in a nice formatted way, exaclty like this:
// Odd of victory Bayern Munich: 1.33
// Odd of draw: 3.25
// Odd of victory Borrussia Dortmund: 6.5
// Get the team names directly from the game object, don't hardcode them (except for "draw"). HINT: Note how the odds and the game objects have the same property names
for (let key in gameList.odds) {
    let teamName = key === 'x' ? 'draw' : gameList[key];
    console.log(`Odd of victory ${teamName}: ${gameList.odds[key]}`);
}

// Create an object called 'scorers' which contains the names of the players who scored as properties, and the number of goals as the value. In this game, it will look like this:
// {
//     Gnarby: 1,
//     Hummels: 1,
//     Lewandowski: 2
// }
const scorers = {};

for (let i = 0; i < gameList.scored.length; i++) {
    const player = gameList.scored[i];
    // добавляет элемент в объект и проверяет есть ли уже элемент в объекте, тернарный выбор (да, добавляется ++ , нет - 1)
    scorers[player] ? scorers[player]++ : scorers[player] = 1;
    // if (scorers[player]) {
    //     scorers[player]++;
    // } else {
    //     scorers[player] = 1;
    // }
};
console.log(scorers);

// добавление свойств в объекты производится через точечную или скобочную нотацию
scorers.Messi = 3;
scorers['Ronaldo'] = 2;
console.log(scorers);

// добавление через создание нового объекта
const obj1 = { prop1: 'value1' };
const obj2 = { prop2: 'value2' };
const obj3 = Object.assign(obj1, obj2, { prop3: 'value3' }); //?

// добавление элементов в массив
let noScr = [];
noScr.push('Ronaldo'); // в конец массива
noScr.unshift('Messi'); // в начало массива
noScr = [...noScr, 'Henry']; // обычно для нового массива, но можно и так
console.log(noScr);

///////////////////////////////////////
// Coding Challenge #3

/*
Let's continue with our football betting app! This time, we have a map with a log of the events that happened during the game. The values are the events themselves, and the keys are the minutes in which each event happened (a football game has 90 minutes plus some extra time).
1. Create an array 'events' of the different game events that happened (no duplicates)
2. After the game has finished, is was found that the yellow card from minute 64 was unfair. So remove this event from the game events log.
3. Print the following string to the console: "An event happened, on average, every 9 minutes" (keep in mind that a game has 90 minutes)
4. Loop over the events and log them to the console, marking whether it's in the first half or second half (after 45 min) of the game, like this:
    [FIRST HALF] 17: ⚽️ GOAL
GOOD LUCK 😀
*/

const gameEvents = new Map([
    [17, '⚽️ GOAL'],
    [36, '🔁 Substitution'],
    [47, '⚽️ GOAL'],
    [61, '🔁 Substitution'],
    [64, '🔶 Yellow card'],
    [69, '🔴 Red card'],
    [70, '🔁 Substitution'],
    [72, '🔁 Substitution'],
    [76, '⚽️ GOAL'],
    [80, '⚽️ GOAL'],
    [92, '🔶 Yellow card'],
    [98, '🔶 Penalty!'],
]);

// 1. Create an array 'events' of the different game events that happened (no duplicates)
const events = [...new Set(gameEvents.values())];    //?

// 2. After the game has finished, is was found that the yellow card from minute 64 was unfair. So remove this event from the game events log.
gameEvents.delete(64);  //?
gameEvents //?

// 3. Print the following string to the console: "An event happened, on average, every 9 minutes" (keep in mind that a game has 90 minutes)
console.log(`An event happened, on average, every ${90 / gameEvents.size} minutes`);

// 4. Loop over the events and log them to the console, marking whether it's in the first half or second half (after 45 min) of the game, like this:
//     [FIRST HALF] 17: ⚽️ GOAL
//     [SECOND HALF] 56: 🔁 Substitution

for (const [min, event] of gameEvents) {
    const half = min < 45 ? 'FIRST HALF' : 'SECOND HALF';
    console.log(`[${half}] ${min}: ${event}`);
}



