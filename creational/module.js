// Used for encapsulation code
const myModule = (function() {
  // Private variable
  const memes = ['cats', 'doge', 'harambe'];
    
  const getMemes = function() {
    return memes;
  };

  return {
    getMemes: getMemes
  };
})();


console.log(myModule.getMemes()); // array of memes
console.log(myModule.memes); // undefined
