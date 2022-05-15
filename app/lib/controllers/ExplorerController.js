const Reader = require("../utils/Reader");
const ExplorerService = require("../services/ExplorerService");
const FizzbuzzService = require("../services/FizzbuzzService");

class ExplorerController{
    static getExplorersByMission(mission) {
        const explorers = Reader.readJsonFile("explorers.json");
        const explorersInNode = ExplorerService.filterByMission(explorers, mission);
        return explorersInNode;
    }
    static getExplorersUsernamesByMission(mission) {
        const explorers = Reader.readJsonFile("explorers.json");
        const usernamesInNode = ExplorerService.getExplorersUsernamesByMission(explorers, mission);
        return usernamesInNode;
    }
    static getExplorersAmonutByMission(mission) {
        const explorers = Reader.readJsonFile("explorers.json");
        const numberOfExplorersInNode = ExplorerService.getAmountOfExplorersByMission(explorers, mission);
        return numberOfExplorersInNode;
    }
    static applyValidationInNumber(number) {
        const score = FizzbuzzService.applyValidationInNumber(number);
        return score;
    }
}

module.exports = ExplorerController;