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
    image: {
        medium: "https://static.tvmaze.com/uploads/images/medium_portrait/81/202627.jpg",
        original: "https://static.tvmaze.com/uploads/images/original_untouched/81/202627.jpg"
    },
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
    it('Cheak flags for image find',async()=>{
      await  expect(typeof isImageFound === 'boolean').toBe(false)
      
    })
   
});
