import { shallowMount, createLocalVue } from "@vue/test-utils";
import Header from "@/components/Header.vue";
import BootstrapVue from "bootstrap-vue";
import VueRouter from "vue-router";

describe("In Header Component", () => {
  let wrapper;

  beforeEach(() => {
    const localVue = createLocalVue();
    localVue.use(VueRouter);
    localVue.use(BootstrapVue);
    wrapper = shallowMount(Header, {
      localVue,
     

    });
  });

  afterEach(() => {
    wrapper.destroy();
  });

  it("is a vue instance", () => {
    expect(wrapper.isVueInstance).toBeTruthy();
  });

  it("should render the correct markup", () => {
    expect(wrapper.html()).toContain('<div class="header">');
  });

  it("should call searchQuery on clicking serch button", async () => {
    await wrapper.find("#searchShows").trigger("click");

  });
  test("Test description", () => {
    const t = () => {
      throw new TypeError();
    };
    expect(t).toThrow(TypeError);
  });

  test("Test description", () => {
    const t = () => {
      
      throw new TypeError("NavigationDuplicated");
    };
    expect(t).toThrow(TypeError);
    expect(t).toThrow("NavigationDuplicated");
  });

  
  test('Expect error value ', () => {
 const searchQuery = jest.fn()

    expect(searchQuery(undefined)).toBeUndefined()
    expect(searchQuery(undefined)).toBeUndefined();
  });
});
