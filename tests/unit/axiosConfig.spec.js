import axiosInstance from '../../src/service/axiosConfig.js';

jest.mock('../../src/service/axiosConfig.js', () => ({
    baseURL: 'https://api.tvmaze.com',
    get: jest.fn(),
}));

describe('Config', ()=> {
    it('Config', async () => {
axiosInstance.get.mockImplementation( () => Promise.resolve(response));
    })
})