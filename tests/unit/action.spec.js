import actions from "@/store/actions";
import {
  getShowDetailsService,
  getSearchResultsService,
  getShowsService,
} from "../../src/service/Service.js";
const response = {
  data: [
    {
      id: 1,
      url: "https://www.tvmaze.com/shows/1/under-the-dome",
      name: "Under the Dome",
      type: "Scripted",
      language: "English",
      genres: ["Drama", "Science-Fiction", "Thriller"],
      status: "Ended",
      runtime: 60,
      averageRuntime: 60,
    },
  ],
};

const response_2 = {
  data: [
    {
      show: {
        id: 1,
        url: "https://www.tvmaze.com/shows/1/under-the-dome",
        name: "Under the Dome",
        type: "Scripted",
        language: "English",
        genres: ["Drama", "Science-Fiction", "Thriller"],
        status: "Ended",
        runtime: 60,
        averageRuntime: 60,
      },
    },
  ],
};

const result = [
  {
    averageRuntime: 60,
    genres: ["Drama", "Science-Fiction", "Thriller"],
    id: 1,
    language: "English",
    name: "Under the Dome",
    runtime: 60,
    status: "Ended",
    type: "Scripted",
    url: "https://www.tvmaze.com/shows/1/under-the-dome",
  },
];

const map1 = new Map();
map1.set("Drama", [
  {
    averageRuntime: 60,
    genres: ["Drama", "Science-Fiction", "Thriller"],
    id: 1,
    language: "English",
    name: "Under the Dome",
    runtime: 60,
    status: "Ended",
    type: "Scripted",
    url: "https://www.tvmaze.com/shows/1/under-the-dome",
  },
]);
map1.set("Science-Fiction", [
  {
    averageRuntime: 60,
    genres: ["Drama", "Science-Fiction", "Thriller"],
    id: 1,
    language: "English",
    name: "Under the Dome",
    runtime: 60,
    status: "Ended",
    type: "Scripted",
    url: "https://www.tvmaze.com/shows/1/under-the-dome",
  },
]);
map1.set("Thriller", [
  {
    averageRuntime: 60,
    genres: ["Drama", "Science-Fiction", "Thriller"],
    id: 1,
    language: "English",
    name: "Under the Dome",
    runtime: 60,
    status: "Ended",
    type: "Scripted",
    url: "https://www.tvmaze.com/shows/1/under-the-dome",
  },
]);
map1.set(undefined, []);
jest.mock("../../src/service/Service.js", () => ({
  getShowsService: jest.fn(),
  getShowDetailsService: jest.fn(),
  getSearchResultsService: jest.fn(),
}));
describe("getShowsService", () => {
  it("resolved response", async () => {
    const context = {
      commit: jest.fn(),
    };
    getShowsService.mockImplementation(() => Promise.resolve(response));
    await actions.getShow(context);

    expect(context.commit).toHaveBeenCalledWith("setShows", map1);
  });

  it("rejected response", async () => {
    const context = {
      commit: jest.fn(),
    };
    getShowsService.mockImplementation(() =>
      Promise.reject(new Error("Some Error Occured!!"))
    );
    await expect(actions.getShow(context)).rejects.toThrow(
      "Some Error Occured!!"
    );
  });

  describe("getShowDetailsService", () => {
    it("resolved response", async () => {
      const context = {
        commit: jest.fn(),
      };
      getShowDetailsService.mockImplementation(() => Promise.resolve(response));
      await actions.getShowDetailsById(context, "1");

      expect(context.commit).toHaveBeenCalledWith(
        "setShowDetailsById",
        response.data
      );
    });

    it("rejected response", async () => {
      const context = {
        commit: jest.fn(),
      };
      getShowDetailsService.mockImplementation(() =>
        Promise.reject(new Error("Some Error Occured!!"))
      );
      await expect(actions.getShowDetailsById(context, "1")).rejects.toThrow(
        "Some Error Occured!!"
      );
    });
  });

  describe("getSearchResultsService", () => {
    it("resolved response", async () => {
      const context = {
        commit: jest.fn(),
      };
      getSearchResultsService.mockImplementation(() =>
        Promise.resolve(response_2)
      );
      await actions.getSearchResults(context, "Under the Dome");

      expect(context.commit).toHaveBeenCalledWith("setSearchResults", result);
    });
    it("rejected response", async () => {
      const context = {
        commit: jest.fn(),
      };
      getSearchResultsService.mockImplementation(() =>
        Promise.reject(new Error("Some Error Occured!!"))
      );
      await expect(
        actions.getSearchResults(context, "Under the Dome")
      ).rejects.toThrow("Some Error Occured!!");
    });
  });
});
