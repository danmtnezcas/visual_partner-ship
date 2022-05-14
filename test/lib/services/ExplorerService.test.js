const Reader = require("../../../app/lib/utils/Reader");
const ExplorerService = require('../../../app/lib/services/ExplorerService');

describe('Unit Tests for ExplorerService class', () => {
    test("Get the explorers in node, we should only have explorers in node", () => {
        const explorers = Reader.readJsonFile("explorers.json");
        const explorersInNode = ExplorerService.filterByMission(explorers, "node");
        expect(explorersInNode).toEqual(
            expect.arrayContaining([
                expect.objectContaining({"name": "Woopa1"}), // This explorer is in node
                //expect.objectContaining({"name": "Woopa9"}), // This explorer isn't in node
                expect.objectContaining({"name": "Woopa15"}) // This explorer is in node
            ])
        )
    })
    test("Get the number of the explorers in node, we should only have 10 explorers in node", () => {
        const explorers = Reader.readJsonFile("explorers.json");
        const numberOfExplorersInNode = ExplorerService.getAmountOfExplorersByMission(explorers, "node");
        expect(numberOfExplorersInNode).toBe(10);
    })
    test("Get the explorer's usernames in Node, we should only have the explorer's usernames in node", () => {
        const explorers = Reader.readJsonFile("explorers.json");
        const usernamesInNode = ExplorerService.getExplorersUsernamesByMission(explorers, "node");
        expect(usernamesInNode).toContain("ajolonauta1"); // This username is in node
        //expect(usernamesInNode).toContain("ajolonauta9"); // This username isn't node
        expect(usernamesInNode).toContain("ajolonauta15"); // This username is in node
    })
})