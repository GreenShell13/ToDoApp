import { memo } from "react";
import { timed } from "../../../../../../helpers/timers";

const myFunc = x => x * 2;
//const myFunc = new Function('x', 'return x * 2');
//function myFunc(x) { return x * 2; }

const improvedFunc = () => {
    let total = 0;
    //const myFunc = x => x * 2;
    //const myFunc = new Function('x', 'return x * 2');
    //function myFunc(x) { return x * 2; }
    for (let i = 0; i < 100000; i++) {
        //const myFunc = x => x * 2;
        //const myFunc = new Function('x', 'return x * 2');
        //function myFunc(x) { return x * 2; }
        total += myFunc(i);
    }
    console.log(total);
}

const FunctionConstructor = () => {
    timed(improvedFunc)();
};

export default memo(FunctionConstructor);