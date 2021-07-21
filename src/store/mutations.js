export default {

    setShows(state, payload) {
        state.tvShows = payload;
    },
    setShowDetailsById(state, payload) {
        state.showDetails = payload;
    },
    setSearchResults(state, payload) {
        state.searchResults = payload;
    },
}

