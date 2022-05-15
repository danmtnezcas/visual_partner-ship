const Reader = require("../app/lib/utils/Reader");
const ExplorerService = require("../app/lib/services/ExplorerService");
const FizzbuzzService = require("../app/lib/services/FizzbuzzService");

// Part 1 Read json file ===========================
const explorers = Reader.readJsonFile("explorers.json");
//console.log(explorers);

// Part 2: Get the quantity of explorers names in node
const explorersInNode = ExplorerService.filterByMission(explorers, "node");
//console.log(explorersInNode);
const numberOfExplorersInNode = ExplorerService.getAmountOfExplorersByMission(explorers, "node");
//console.log(numberOfExplorersInNode);

// Part4: Get the explorer's usernames in Node
const usernamesInNode = ExplorerService.getExplorersUsernamesByMission(explorers, "node");
//console.log(usernamesInNode);

// Part 8: Get a list of the explorers in node, if the score is divisible by 5 and 3, set the property trick and the value FIZZBUZZ, if is just divisible by 5 set the property trcik and the value BUZZ, if is just divisible by 3 set the property trick and the value FIZZ, otherwise set the property trick and the score value. TODO
const explorersInNodeApplyValidation = FizzbuzzService.applyValidationInExplorer(explorersInNode);
console.log(explorersInNodeApplyValidation);