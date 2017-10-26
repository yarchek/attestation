'use strict';

function sum(...args) {
    let v = 0;
    for (let i = 0; i < args.length; i++) {
        v += args[i];
    }
    console.log(v);
    return (...parts) => {
        return sum(v, ...parts);
    }
}

sum(4,5)(5,7)(9,10)(8, 8);