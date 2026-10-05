"use strict";
function rangeCategorization(num_array) {
    let result = [];
    for (let i = 0; i < num_array.length; i++) {
        let value = num_array[i];
        let category;
        if (value < 10)
            category = 'Low';
        else if (value >= 10 && value <= 50)
            category = 'Medium';
        else
            category = 'High';
        result.push({ value, category });
    }
    return result;
}
console.log(rangeCategorization([5, 12, 47, 60, 3, 25]));
function temperatureCategorization(tmp_arr) {
    let result = [];
    for (let i = 0; i < tmp_arr.length; i++) {
        let value = tmp_arr[i];
        let category;
        if (value < 20) {
            category = 'Cold';
        }
        else if (value >= 20 && value <= 30) {
            category = 'Warm';
        }
        else {
            category = 'Hot';
        }
        result.push({ value, category });
    }
    return result;
}
console.log(temperatureCategorization([15, 22, 29, 35, 10]));
function wordCounter(text) {
    const counts = {};
    const words = text.split(" ");
    for (let word of words) {
        if (counts[word])
            counts[word] += 1;
        else
            counts[word] = 1;
    }
    return counts;
}
console.log(wordCounter("playwright makes testing easy playwright is fast"));
