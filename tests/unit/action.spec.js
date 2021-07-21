import actions from '@/store/actions';
import { getShowDetailsService } from "../../src/service/Service"

const response = {
    data: {
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
    },
};


jest.mock('../../src/service/Service', () => ({
    getShowDetailsService: jest.fn(),
    getShowsService: jest.fn()
}));

describe('getShowDetailsService', () => {
    it('resolved response', async () => {
        const context = {
            commit: jest.fn(),
        };
        getShowDetailsService.mockImplementation(() => Promise.resolve(response));
        await actions.getShowDetailsById(context, '1');
        expect(context.commit).toHaveBeenCalledWith('setShowDetailsById', response.data)
    });

    it('rejected response', async () => {
        const context = {
            commit: jest.fn(),
        };
        getShowDetailsService.mockImplementation(() => Promise.reject(new Error('Some Error Occured!!')));
        await expect(actions.getShowDetailsById(context, '1')).rejects.toThrow('Some Error Occured!!');
    });



});


