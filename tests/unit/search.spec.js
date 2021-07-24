import { shallowMount, createLocalVue } from "@vue/test-utils";
import Search from '@/components/Search.vue';
import BootstrapVue from 'bootstrap-vue';
import Vuex from 'vuex';


describe('In Search Component', () => {
    let wrapper;
    
    const state = {

        searchResults:[{
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
            }]
        };

    const actions = {
        getSearchResults: jest.fn(),
    };
   
    beforeEach(() => {
        const localVue = createLocalVue();
        localVue.use(BootstrapVue);
        localVue.use(Vuex);
        const store = new Vuex.Store({
            state,
            actions,
        });
      
        wrapper = shallowMount(Search, {
            mocks:{
                $route:{
                    params:{ searchInput: 'Under the Dome'}
                },
            },
            localVue,
           
            data() {
                return {
                    isLoading: false,
                   
                };
            },
        });
    });
    
    afterEach(() => {
        wrapper.destroy();
    });

    it('is a vue instance', () => {
        expect(wrapper.isVueInstance).toBeTruthy();
    });
    it('getSearchResults action should be called on calling getShowDetailsById method', () => {
        wrapper.vm.getSearchResults('Under the Dome');
        
      
    });
   
});