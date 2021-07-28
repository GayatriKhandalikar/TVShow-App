import {
  getShowsService,
  getShowDetailsService,
  getSearchResultsService,
} from "../service/Service";

export default {
  async getShow(context) {
    try {
      const response = await getShowsService();

      const uniqueGenreSet = new Set([]);  //empty set
      const displayShowsBygene = new Map();   //empty map

      response.data.forEach((element) => {        //set of Unique genre
        element.genres.forEach((key) => {
          uniqueGenreSet.add(key);
        });

      });

      let sortByGenre = Array.from(uniqueGenreSet);//convert set into array
      sortByGenre.sort()                           // Alphabetically sort array

      for (let index = 0; index < 6; index++) {        //according to assignment statment few genres among all
        const genreSorting = [];
        response.data.forEach((element) => {
          element.genres.forEach((value) => {             //we have array of genres hence again foreach
            if (sortByGenre[index] == value) genreSorting.push(element);     //check against each genre inside an array
          });
        });

        genreSorting.sort((a, b) =>
          a.rating.average > b.rating.average ? -1 : 1
        );

        displayShowsBygene.set(sortByGenre[index], genreSorting.slice(0, 8));
      }

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