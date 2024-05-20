const markov = require("./markov")

describe("Testing the markov machine", function () {
    let mm;
    const corpus = "the cat in the hat comes back"
    beforeAll(function () {
        mm = new markov.MarkovMachine(corpus);
    })
    
    test("returns a string", function () {
        const numWords = 3; // arbitrary
        const machineOutput = mm.makeText(numWords);
        expect(machineOutput).toEqual(expect.any(String))
    })
    
    test("obeys maximum word count", function () {
        const numWords = 3; // arbitrary
        const machineOutput = mm.makeText(numWords);
        const outputArray = machineOutput.split(" ");
        expect(outputArray.length).toBeLessThanOrEqual(numWords);
    })
    
    test("if less than maximum word count, ends on last word in the corpus", function () {
        const numWords = 100; // arbitrary, want it to be much than the length of the corpus
        const machineOutput = mm.makeText(numWords);
        const outputArray = machineOutput.split(" ");
        const corpusArray = corpus.split(" ")
        if (outputArray.length < numWords) {
            expect(outputArray[outputArray.length-1]).toEqual(corpusArray[corpusArray.length-1])
        }
    })
})