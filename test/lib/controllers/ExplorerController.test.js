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
    test("Get the explorer's usernames in Node, we should only have the explorer's usernames in node", () => {
        const usernamesInNode = ExplorerController.getExplorersUsernamesByMission("node");
        expect(usernamesInNode).toContain("ajolonauta1"); // This username is in node
        //expect(usernamesInNode).toContain("ajolonauta9"); // This username isn't node
        expect(usernamesInNode).toContain("ajolonauta15"); // This username is in node
    });
});