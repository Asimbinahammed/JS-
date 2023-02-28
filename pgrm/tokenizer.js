const natural = require('natural');
const { TokenizerEn } = require('@nlpjs/lang-en');

const reference = "I haven't made a thing,I'll make all the thing's";

function tokenize(text) {
    // return text.split(/\W+/g);
    return text.split(/[\s,.!?;:([\]'"¿¡)/]+/);
}

function tokenizeAggressive(text){
    const tokenizer = new natural.AggressiveTokenizer();
    return tokenizer.tokenize(text); 
}

function tokenizeTreebank(text){
    const tokenizer = new natural.TreebankWordTokenizer();
    return tokenizer.tokenize(text); 
}

function tokenizeNlpjs(text){
    const tokenizer = new TokenizerEn();
    return tokenizer.tokenize(text);
}

console.log(tokenize(reference));
console.log(tokenizeTreebank(reference));
console.log(tokenizeAggressive(reference));
console.log(tokenizeNlpjs(reference));