import { memo } from 'react';
import { timed } from '../../../../../../helpers/timers/index';

const TimedTestBlock = () => {

    function summ(number) {
        let total = number;
        for (let i = number; i > 0; i--, total += i);
        return total;
    }
    
    console.log(timed(summ)(1000000000));
}

export default memo(TimedTestBlock);