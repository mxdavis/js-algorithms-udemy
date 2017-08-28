function reverseWords(string){
  var stringArray = string.split(' ')
  var reversedWords = []
  stringArray.forEach(word => {
    var reversedWord = []
    word.split('').forEach(letter => {
      reversedWord.unshift(letter)
    })
    reversedWords.push(reversedWord.join(''))
  })
  return reversedWords.join(' ')
}

reverseWords("Hello, my name is Malki")

function reverseWords2(string){
  return string.split(' ').map(word => word.split('').reverse().join('')).join(' ')
}

reverseWords2("Hello, my name is Malki")

function reverseWords3(string) {
  var wordsArr = string.split(' ');
  var reversedWordsArr = [];

  wordsArr.forEach(word => {
    var reversedWord = '';
    for (var i = word.length - 1; i >= 0; i--) {
      reversedWord += word[i];
    };
    reversedWordsArr.push(reversedWord);
  });

  return reversedWordsArr.join(' ');
}

reverseWords3('Coding JavaScript');
