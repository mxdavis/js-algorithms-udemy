function harmlessRansomNote(noteText, magazineText){
  var noteArray = noteText.split(' ')
  var magazineArray = magazineText.split(' ')
  var magazineObj = {};

  magazineArray.forEach(word => {
    if (!magazineObj[word]) magazineObj[word] = 0;
    magazineObj[word]++
  })

  var noteIsPossible = true
  noteArray.forEach(word => {
    if (magazineObj[word]){
      magazineObj[word]--
      if (magazineObj[word] < 0) noteIsPossible = false
    } else noteIsPossible = false
  })

  return noteIsPossible
}

harmlessRansomNote('this is the magazine text', 'this is the text of the note');
