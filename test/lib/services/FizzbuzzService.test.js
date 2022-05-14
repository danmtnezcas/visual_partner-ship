const Reader = require("../../../app/lib/utils/Reader");
const ExplorerService = require('../../../app/lib/services/ExplorerService');
const FizzbuzzService = require('../../../app/lib/services/FizzbuzzService');

describe("Unit Tests for FizzbuzzService class", () => {
    test("Get a new list of explorers in node", () => {
        const explorers = Reader.readJsonFile("explorers.json");
        const explorersInNode = ExplorerService.filterByMission(explorers, "node");
        const explorersInNodeApplyValidation = FizzbuzzService.applyValidationInExplorer(explorersInNode);
        expect(explorersInNodeApplyValidation).toEqual(
            expect.arrayContaining([
                expect.objectContaining({"name": "Woopa1", "trick": 1}), // This explorer has a score 1, trick: 1
                expect.objectContaining({"name": "Woopa3", "trick": "FIZZ"}), // This explorer has a score 3, trick: "FIZZ"
                expect.objectContaining({"name": "Woopa5", "trick": "BUZZ"}), // This explorer has a score 5, trick: "BUZZ"
                //expect.objectContaining({"name": "Woopa9"}), // This explorer isn't in node
                expect.objectContaining({"name": "Woopa14", "trick": 14}), // This explorer has a score 14, trick: 14
                expect.objectContaining({"name": "Woopa15", trick: "FIZZBUZZ"}) // This explorer has a score 15, trick: "FIZZBUZZ"
            ])
        )
    })
})