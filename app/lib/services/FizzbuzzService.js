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
}

module.exports = FizzbuzzService;