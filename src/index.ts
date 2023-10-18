import PromptSync from "prompt-sync";
// declare a constant for prompt function
const prompt = PromptSync();
// take input from user
let userInput: string = prompt("Please Write the desired Statement: ");
// define a function to count numbers of words
let wordsCounter = (input: string): number => {
    let inputWords: string[] = input.split(/\s+/).filter((words) => words != " ");
    return inputWords.length;
};
// define another function to count numbers of characters
let charactersCounter = (input: string): number => {
    let inputCharacters: string = input.replace(/\s+/g, "");
    return inputCharacters.length;
};
// calling both the functions
let desiredWords: number = wordsCounter(userInput);
let desiredCharacters: number = charactersCounter(userInput);
// displaying desired results
console.log(`The number of 'WORDS' in "${userInput}" are: ${desiredWords}`);
console.log(`The number of 'CHARACTERS' are: ${desiredCharacters}`);