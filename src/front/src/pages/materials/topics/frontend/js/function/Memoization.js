import { memoized } from "../../../../../../helpers/memoization";
import { timed } from "../../../../../../helpers/timers";

function largeCalculations (number) {
    let result = number;
    for (
        let i = 1;
        i < number;
        result += i++
    );
    return result;
}

const Memoization = () => {
    const bigNumber = 1000000000;
    console.log(timed(largeCalculations)(bigNumber));
    const memoizedLargeCalculations = memoized(largeCalculations);
    console.log(timed(memoizedLargeCalculations)(bigNumber));
    console.log(timed(memoizedLargeCalculations)(bigNumber));
    console.log(timed(memoizedLargeCalculations)(bigNumber * 10));
    console.log(timed(memoizedLargeCalculations)(bigNumber * 10));
};

export default Memoization;