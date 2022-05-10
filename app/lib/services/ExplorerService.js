class ExplorerService{
    static filterByMission(explorers, mission) {
        const explorersInNode = explorers.filter(explorer => explorer.mission == mission);
        return explorersInNode;
    }
}

module.exports = ExplorerService;