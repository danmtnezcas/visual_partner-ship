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
    test("Get the number of the explorers in node, we should only have 10 explorers in node", () => {
        const numberOfExplorersInNode = ExplorerController.getExplorersAmonutByMission("node");
        expect(numberOfExplorersInNode).toBe(10);
        //expect(numberOfExplorersInNode).toBe(11);
    });
    test("Get the type of score", () => {
        const score1 = ExplorerController.applyValidationInNumber(1);
        expect(score1).toBe(1);
        const score3 = ExplorerController.applyValidationInNumber(3);
        expect(score3).toBe("Fizz");
        const score5 = ExplorerController.applyValidationInNumber(5);
        expect(score5).toBe("Buzz");
        const score15 = ExplorerController.applyValidationInNumber(15);
        expect(score15).toBe("FizzBuzz");
    });
});