"use strict";
function errorPromise() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject("Something went wrong");
        }, 1000);
    });
}
errorPromise()
    .then((result) => {
    console.log(result);
})
    .catch((error) => {
    console.log(error);
});
