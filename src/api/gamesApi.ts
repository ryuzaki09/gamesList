export const gamesApi = {
  async fetchAllGames() {
    return Promise.resolve(require("../testdata/gamesdata.json"));
  },
};
