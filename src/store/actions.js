import {
  getShowsService,
  getShowDetailsService,
  getSearchResultsService,
} from "../service/Service";

export default {
  async getShow(context) {
    try {
      const response = await getShowsService();
      
      const uniqueGenreSet = new Set([]);
      const displayShowsBygene = new Map();
      response.data.forEach((element) => {
        element.genres.forEach((key) => {
          uniqueGenreSet.add(key);
        });
        
      });

      let sortByGenre = Array.from(uniqueGenreSet);
      
      for (let index = 0; index < 6; index++) {
        const genreSorting = [];
        response.data.forEach((element) => {
          element.genres.forEach((value) => {
            if (sortByGenre[index] == value) genreSorting.push(element);
          });
        });
        genreSorting.sort((a, b) =>
          a.rating.average > b.rating.average ? -1 : 1
        );
        displayShowsBygene.set(sortByGenre[index], genreSorting);
      }
     // console.log(displayShowsBygene)
      context.commit("setShows", displayShowsBygene);
    } catch (error) {
      console.log(error.message);
      throw error;
    }
  },

  async getShowDetailsById(context, id) {
    try {
      const response = await getShowDetailsService(id);
      context.commit("setShowDetailsById", response.data);
    } catch (error) {
      console.log(error.message);
      throw error;
    }
  },

  async getSearchResults(context, searchInput) {
    try {
      const result = [];
      const response = await getSearchResultsService(searchInput);
      response.data.forEach(function (element) {
        result.push(element.show);
      });
      context.commit("setSearchResults", result);
    } catch (error) {
      console.log(error.message);
      throw error;
    }
  },
};
