import {getShowsService, getShowDetailsService,getSearchResultsService} from "../../src/service/Service.js"
import axiosInstance from '../../src/service/axiosConfig.js';

jest.mock('../../src/service/axiosConfig.js', () => ({
    baseURL: 'https://api.tvmaze.com',
    get: jest.fn(),
}));

const response = {
    data: [{
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
        officialSite: "http://www.cbs.com/shows/under-the-dome/",
        }],
    };


describe('service', ()=> {
    it('getShowsService', async () => {
        axiosInstance.get.mockImplementation( () => Promise.resolve(response));
        const show = await getShowsService();
        expect(axiosInstance.get).toHaveBeenCalledWith('/shows');
        expect(show).toEqual(response);
    })

    it('getShowDetailsService', async ()=> {
        axiosInstance.get.mockImplementation( ()=> Promise.resolve(response));
        const shows = await getShowDetailsService('2');
        expect(axiosInstance.get).toHaveBeenCalledWith('/shows/2');
        expect(shows).toEqual(response);
    });

    it('getSearchResultsService', async ()=> {
        axiosInstance.get.mockImplementation( ()=> Promise.resolve(response));
        const shows = await getSearchResultsService('Breaking Bad');
        expect(axiosInstance.get).toHaveBeenCalledWith('/search/shows?q=Breaking Bad');
        expect(shows).toEqual(response);
    });
    });

