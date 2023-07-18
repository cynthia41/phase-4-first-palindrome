var firstPalindrome = function(words) {
  let Arry = [];
  for (let w of words) {
    if (w.split('').reverse().join('') === w) {
      Arry.push(w);
    } else {
      Arry.push('');
    }
  }
   return Arry.find(word => word !== '') || '';
  

    
};