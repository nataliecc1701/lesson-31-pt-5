/** Textual markov chain generator */


class MarkovMachine {

  /** build markov machine; read in text.*/

  constructor(text) {
    let words = text.split(/[ \r\n]+/);
    this.words = words.filter(c => c !== "");
    this.makeChains();
  }

  /** set markov chains:
   *
   *  for text of "the cat in the hat", chains will be
   *  {"the": ["cat", "hat"], "cat": ["in"], "in": ["the"], "hat": [null]} */

  makeChains() {
    this.chains = {};
    for (let i = 0; i < this.words.length; i++) {
      if (!(this.words[i] in this.chains)) {
        this.chains[this.words[i]] = [];
      }
      if (i + 1 < this.words.length) {
        this.chains[this.words[i]].push(this.words[i+1]);
      }
      if (i === this.words.length) {
        this.chains[this.words[i].push(null)]
      }
    }
  }
  
  /** return a random word given the previous word */
  
  nextWord(word) {
    if (!(word in this.chains)) {
      return undefined
    }
    else {
      return this.chains[word][Math.floor(Math.random() * this.chains[word].length)]
    }
  }


  /** return random text from chains */

  makeText(numWords = 100) {
    text = []
    // pick the first word at random from our list of words
    let currWord = this.words[Math.floor(Math.random() * this.words.length)]
    
    while (text.length < numWords) {
      text.push(currWord);
      currWord = nextWord(currWord);
    }
  }
}
