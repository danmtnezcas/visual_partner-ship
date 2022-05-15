const ExplorerController = require("../../../app/lib/controllers/ExplorerController");

describe("Unit Tests for ExplorerController class", () => {
    test("Get the explorers in node, we should only have explorers in node", () => {
        const explorersInNode = ExplorerController.getExplorersByMission("node");
        expect(explorersInNode).toEqual(
            expect.arrayContaining([
                expect.objectContaining({"name": "Woopa1"}), // This explorer is in node
                //expect.objectContaining({"name": "Woopa9"}), // This explorer isn't in node
                expect.objectContaining({"name": "Woopa15"}) // This explorer is in node
            ])
        );
    });
});