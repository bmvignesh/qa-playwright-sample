"use strict";
function wordFrequencyCounter(text) {
    const words = text.split(" ");
    const count = {};
    for (const word of words) {
        count[word] = (count[word] || 0) + 1;
    }
    return count;
}
console.log(wordFrequencyCounter('automation testing automation framework playwright testing qa'));
function wordCounter(text) {
    const words = text.split(" ");
    const count = {};
    for (const word of words) {
        count[word] = (count[word] || 0) + 1;
    }
    return count;
}
console.log(wordCounter('dog cat dog bird'));
function letterCounter(text) {
    const count = {};
    for (let word of text) {
        count[word] = (count[word] || 0) + 1;
    }
    return count;
}
console.log(letterCounter('banana'));
function numberCounter(numbs) {
    const count = {};
    for (const num of numbs) {
        count[num] = (count[num] || 0) + 1;
    }
    return count;
}
console.log(numberCounter([1, 2, 2, 3, 3, 3]));
function caseInsensitiveWordCounter(text) {
    const count = {};
    const words = text.toLowerCase().split(" ");
    for (const word of words) {
        count[word] = (count[word] || 0) + 1;
    }
    return count;
}
console.log(caseInsensitiveWordCounter('QA qa Qa qA'));
function firstLetterCounter(word_array) {
    const count = {};
    for (let word of word_array) {
        count[word.charAt(0)] = (count[word.charAt(0)] || 0) + 1;
    }
    return count;
}
console.log(firstLetterCounter(["apple", "ant", "banana", "ball", "cat"]));
function sortResult(text) {
    const count = {};
    const words = text.split(" ");
    for (const word of words) {
        count[word] = (count[word] || 0) + 1;
        console.log(count[word]);
    }
    const result = Object.keys(count).map(word => ({ word, count: count[word] }));
    result.sort((a, b) => b.count - a.count);
    return result;
}
console.log('Sort Result output is: ', sortResult('dog cat dog bird dog cat'));
const carCount = { maruti: 10, honda: 9, tata: 12, nissan: 11 };
const result = Object.entries(carCount).map(([name, score]) => ({ name, score }));
result.sort((a, b) => b.score - a.score);
console.log(result);
const scores = { Alice: 85, Bob: 92, Charlie: 78 };
const result1 = Object.entries(scores).map((studname, score) => ({ studname, score }));
result1.sort((a, b) => b.score - a.score);
console.log(result1);
const numCount = { "1": 2, "2": 5, "3": 1 };
const result2 = Object.entries(numCount).map(([number, frequency]) => ({ number, frequency }));
result2.sort((a, b) => b.frequency - a.frequency);
console.log(result2);
