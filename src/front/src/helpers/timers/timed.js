const timed = (func) => 
    (...args) => {
        const startTime = new Date();
        console.log(`Entering the function ${func.name} at ${startTime}`);

        try {
            return func(...args);
        }
        finally {
            const endTime = new Date();            
            const elapsedTime = endTime - startTime;
            console.log(`Exiting the function ${func.name} at ${endTime}`);
            console.log(`Elapsed time is ${elapsedTime} ms`);
        }
    };

export default timed;