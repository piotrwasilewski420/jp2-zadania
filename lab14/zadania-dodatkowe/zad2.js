"use strict";
const connect = (funTab, fun) => {
    const promises = funTab.map((el) => el());
    return Promise.all([...promises]).then((result) => {
        return result.map((res) => {
            return [res, fun(res)];
        });
    });
};
(async () => {
    console.log(await connect([async () => 1, async () => 2, async () => 3], async (n) => n + 1));
})();
