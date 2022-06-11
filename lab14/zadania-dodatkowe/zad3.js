"use strict";
const together = async (promisesTab, callback) => {
    const results = promisesTab.map(async (func) => {
        return await func();
    });
    return callback(results);
};
(async () => {
    console.log(await together([async () => 10, async () => 11], async (results) => {
        return await results.reduce(async (acc, current) => {
            return (await acc) + (await current);
        }, Promise.resolve(0));
    }));
})();
