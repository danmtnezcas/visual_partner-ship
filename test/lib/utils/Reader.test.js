const Reader = require("../../../app/lib/utils/Reader");

describe("Unit Test for Reader class", () => {
    test("Read json file, we should have names from Woopa1 to Woopa15", () => {
        const explorers = Reader.readJsonFile("explorers.json");
        expect(explorers).toEqual(
            expect.arrayContaining([
                expect.objectContaining({"name": "Woopa1"}),
                expect.objectContaining({"name": "Woopa15"})
            ])
        );
    });
});