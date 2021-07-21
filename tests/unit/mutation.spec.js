import mutations from '@/store/mutations';


describe('store mutations', () => {
  it('add Shows to state', () => {
    const state = {
      tvShows: [],
    };
    const tvShows = [{
      id: 1,
      url: "https://www.tvmaze.com/shows/1/under-the-dome",
      name: "Under the Dome",
      type: "Scripted",
      language: "English",
      genres: [
        "Drama",
        "Science-Fiction",
        "Thriller"
      ],
      status: "Ended",
      runtime: 60,
      averageRuntime: 60,
      premiered: "2013-06-24",
      officialSite: "http://www.cbs.com/shows/under-the-dome/"
    }];
    mutations.setShows(state, tvShows);
    expect(state).toEqual({
      tvShows: [{
        id: 1,
        url: "https://www.tvmaze.com/shows/1/under-the-dome",
        name: "Under the Dome",
        type: "Scripted",
        language: "English",
        genres: [
          "Drama",
          "Science-Fiction",
          "Thriller"
        ],
        status: "Ended",
        runtime: 60,
        averageRuntime: 60,
        premiered: "2013-06-24",
        officialSite: "http://www.cbs.com/shows/under-the-dome/"
      }]
    });
  })


  it('add show details to state', () => {
    const state = {
      showDetails: [],
    };
    const showDetails = [{
      id: 1,
      url: "https://www.tvmaze.com/shows/1/under-the-dome",
      name: "Under the Dome",
      type: "Scripted",
      language: "English",
      genres: [
        "Drama",
        "Science-Fiction",
        "Thriller"
      ],
      status: "Ended",
      runtime: 60,
      averageRuntime: 60,
      premiered: "2013-06-24",
      officialSite: "http://www.cbs.com/shows/under-the-dome/"
    }];
    mutations.setShowDetailsById(state, showDetails);
    expect(state).toEqual({
      showDetails: [{
        id: 1,
        url: "https://www.tvmaze.com/shows/1/under-the-dome",
        name: "Under the Dome",
        type: "Scripted",
        language: "English",
        genres: [
          "Drama",
          "Science-Fiction",
          "Thriller"
        ],
        status: "Ended",
        runtime: 60,
        averageRuntime: 60,
        premiered: "2013-06-24",
        officialSite: "http://www.cbs.com/shows/under-the-dome/"
      }],
    });
  });

  it('add search result to state', () => {
    const state = {
      searchResults: [],
    };
    const searchResults = [{ name: 'Under the Dome' }];
    mutations.setSearchResults(state, searchResults);
    expect(state).toEqual({
      searchResults: [{ name: 'Under the Dome' }],
    });
  });

});