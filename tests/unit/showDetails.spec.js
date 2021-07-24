import { shallowMount, createLocalVue } from "@vue/test-utils";
import ShowDetails from "@/components/ShowDetails.vue";
import BootstrapVue from "bootstrap-vue";
import Vuex from 'vuex';

describe('In ShowDetails Component', () => {
    let wrapper;

    const state = {

        tvShows:{
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
            }
        };
        
 const actions = {
        getShowDetailsById: jest.fn(),
    };

    beforeEach(() => {
        const localVue = createLocalVue();
        localVue.use(BootstrapVue);
        localVue.use(Vuex);

        const store = new Vuex.Store({
            state,
            actions,
        });

        wrapper = shallowMount(ShowDetails,{
            localVue,
            store,

            mocks:{
                $route:{
                    params:{ id: '1'}
                },
            },
        });
    });

    afterEach(() => {
        wrapper.destroy();
    });

    it('is a vue instance', () => {
        expect(wrapper.isVueInstance).toBeTruthy();
    });

    it('should render the correct html', () => {
        expect(wrapper.html()).toContain('<div class="show-details">');
    });

    it('getShowDetailsById action should be called on calling getShowDetailsById method', () => {
        wrapper.vm.getShowDetailsById('1');
        expect(actions.getShowDetailsById).toHaveBeenCalled();
    });

   
});
