import { shallowMount, createLocalVue } from "@vue/test-utils";
import Showcard from '@/components/Showcard.vue'
import BootstrapVue from 'bootstrap-vue';

describe('In Showcard Component', () => {
    let wrapper;

    beforeEach(() => {
        const localVue = createLocalVue();
        localVue.use(BootstrapVue);

        wrapper = shallowMount(Showcard, {
            propsData: {
                show: {
                    name: "Under the Dome",
                    medium: "https://static.tvmaze.com/uploads/images/medium_portrait/81/202627.jpg",
                   },
            },
            mocks: {
                $router:{
                    push: jest.fn(),
                },
            },
            localVue,
             $route : {
                name: "ShowDetails"
              }
          
        });
    });

    afterEach(() => {
        
        wrapper.destroy();
    });
    it('is a vue instance', () => {
        
        expect(wrapper.isVueInstance).toBeTruthy();
    });

    it('should render the correct markup', () => {
        expect(wrapper.html()).toContain('<div class="show-card">');
    });


   test('should call getShowDetails on clicking Get Details button',async () => {
      wrapper.vm.getShowDetails(1);
      });
      
      it('Cheak flags for image find',async()=>{
        await  expect(typeof imageFlag === 'boolean').toBe(false)
      })
     
});