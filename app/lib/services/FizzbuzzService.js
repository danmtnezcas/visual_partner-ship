class FizzbuzzService {
    static  applyValidationInExplorer(explorers) {
        const explorersInNodeApplyValidation = [];
        explorers.forEach((explorer) => {
            if(explorer.score%5 === 0 && explorer.score%3 === 0){
                explorer.trick = "FIZZBUZZ";
                explorersInNodeApplyValidation.push(explorer);
            } else if(explorer.score%5 === 0) {
                explorer.trick = "BUZZ";
                explorersInNodeApplyValidation.push(explorer);
            } else if(explorer.score%3 === 0) {
                explorer.trick = "FIZZ";
                explorersInNodeApplyValidation.push(explorer);
            } else {
                explorer.trick = explorer.score;
                explorersInNodeApplyValidation.push(explorer);
            }
        });
        return explorersInNodeApplyValidation;
    }
    static applyValidationInNumber(number) {
        const validation = true;
        var score = "";
        switch (validation) {
        case number === 3:
            score = "Fizz";
            break;
        case number === 5:
            score = "Buzz";
            break;
        case number === 15:
            score = "FizzBuzz";
            break;
        default:
            score = number;
            break;
        }
        return score;
    }
}

module.exports = FizzbuzzService;