import { shallowMount, createLocalVue } from "@vue/test-utils";
import Dashboard from "@/views/Dashboard.vue";
import BootstrapVue from 'bootstrap-vue';
import Vuex from 'vuex';

describe('In Dashboard Component ',()=>{
    let wrapper;
    const state = {
        tvShows:{
            id: 1,
    url: "https://www.tvmaze.com/shows/1/under-the-dome",
    name: "Under the Dome",
    type: "Scripted",
    language: "English",
        },
    };

    const actions = {
        getShow : jest.fn(),

    };

    beforeEach(() =>{
        const localVue = createLocalVue();
        localVue.use(BootstrapVue);
        localVue.use(Vuex);

        const store = new Vuex.Store({
            state,
            actions,
        });

        wrapper = shallowMount(Dashboard, {
            localVue,
            store,
        });
    });

    afterEach(() =>{
        wrapper.destroy();
    });

    it('is a vue instance', ()=>{
        expect(wrapper.isVueInstance).toBeTruthy();
    });

    it('should render the correct markup', ()=>{
        expect(wrapper.html()).toContain('<div class="show-card">');

        
    });

    it('getShow action should be called on calling getShow method', ()=>{
        wrapper.vm.getShow();
        expect(actions.getShow).toHaveBeenCalled();
    });
 })