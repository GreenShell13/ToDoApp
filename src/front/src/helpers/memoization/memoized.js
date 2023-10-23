function memoized(func) {
    const cache = new Map();

    return (...args) => {
        const key = `${args.length}_${args.join('-')}`;
        if (cache.has(key))
            return cache.get(key);
        else {
            const result = func.apply(this, args);
            cache.set(key, result);
            return result;
        }
    };
}

export default memoized;