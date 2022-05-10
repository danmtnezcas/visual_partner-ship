class ExplorerService{
    static filterByMission(explorers, mission) {
        const explorersInNode = explorers.filter(explorer => explorer.mission == mission);
        return explorersInNode;
    }
    static getAmountOfExplorersByMission(explorers, mission) {
        const explorersInNode = this.filterByMission(explorers, mission);
        const numberOfExplorersInNode = explorersInNode.length;
        return numberOfExplorersInNode;
    }
}

module.exports = ExplorerService;