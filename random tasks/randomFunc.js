let myName = 'alexander', nameToUpper = '';

function forInFunc(name) {
    let newName = '';
    for (let _i = 0; _i < name.length; _i++) {
        newName += name[_i].toUpperCase();
    }
    return newName;
}

let myNewName = forInFunc(myName);

console.log(myNewName);


