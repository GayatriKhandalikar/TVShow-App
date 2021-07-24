import Vue from "vue";
import VueRouter from "vue-router";
import Dashboard from "../views/Dashboard.vue"
import ShowDetails from "../components/ShowDetails.vue"
import Search from "../components/Search.vue"
import About from "../views/About.vue"

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Dashboard",
    component: Dashboard,
  },
  {
  path: '/showdetails/:id',
    name: 'ShowDetails',
    component: ShowDetails
},
{
  path: '/search',
  name: 'Search',
  props: true,
  component: Search

},

{
  path: '/about',
  name: 'About',
  component: About

}
];

const router = new VueRouter({
  routes,
});

export default router;
